import React, { useCallback, useEffect, useMemo, useState } from 'react';
import css from './FilteredTable.scss';
import { Button, DataTable, FiltersPanel, FlexCell, FlexRow, PresetsPanel, Text } from '@epam/promo';
import { getFilters } from './filters';
import {
    useLazyDataSource, useUuiContext, UuiContexts, useTableState, LazyDataSourceApiRequest, ITablePreset,
    DataQueryFilter, DataTableState,
} from "@epam/uui-core";
import { FilteredTableFooter } from "./FilteredTableFooter";
import { Person } from '@epam/uui-docs';
import { personColumns } from './columns';
import { SearchInput } from "@epam/uui";
import { TApi } from "../../../data";

const defaultPresets: ITablePreset[] = [
    {
        name: 'All',
        id: -1,
        isReadonly: true,
        order: 'a',
    },
    {
        name: 'My Team',
        id: -2,
        order: 'b',
        filter: {
            managerId: [13],
        },
        isReadonly: true,
    },
];

export const FilteredTable: React.FC = () => {
    const svc = useUuiContext<TApi, UuiContexts>();
    const filters = useMemo(getFilters, []);
    const [totalCount, setTotalCount] = useState(0);
    const [initialPresets] = useState<ITablePreset<DataQueryFilter<Person>>[]>([...defaultPresets, ...(JSON.parse(localStorage.getItem('presets')) || [])]);

    const tableStateApi = useTableState<DataQueryFilter<Person>>({
        filters: filters,
        initialPresets: initialPresets,
        onPresetCreate: svc.api.presets.createPreset,
        onPresetUpdate: svc.api.presets.updatePreset,
        onPresetDelete: svc.api.presets.deletePreset,
    });

    const api = useCallback(async (rq: LazyDataSourceApiRequest<{}>) => {
        const result = await svc.api.demo.personsPaged({
            ...rq,
            filter: rq.filter || {},
            page: rq.page - 1,
            pageSize: rq.pageSize,
        });
        setTotalCount(() => result.totalCount);
        result.count = result.items.length;
        result.from = 0;
        return result;
    }, []);

    const dataSource = useLazyDataSource<Person, number, Person>({
        api: api,
        selectAll: false,
    }, []);

    const view = dataSource.useView(tableStateApi.tableState, tableStateApi.setTableState, {
        rowOptions: {
            isSelectable: true,
        },
    });

    const searchHandler = (val: string | undefined) => tableStateApi.setTableState({ ...tableStateApi.tableState, search: val });

    const { setTableState, setFilter, setColumnsConfig, setFiltersConfig, ...presetsApi } = tableStateApi;

    return (
        <div className={ css.container }>
            <div className={ css.presetsPanel }>
                <Text fontSize="24" lineHeight='30' font='museo-sans' cx={ css.presetsTitle }>Users Dashboard</Text>
                <PresetsPanel { ...presetsApi } />
            </div>
            <FlexRow cx={ css.filterPanelWrapper } background="white" borderBottom={ true }>
                <FlexRow cx={ css.filterPanel }>
                    <FiltersPanel
                        filters={ filters }
                        tableState={ tableStateApi.tableState }
                        setTableState={ tableStateApi.setTableState }
                    />
                </FlexRow>
                <FlexCell cx={ css.search } width={ 295 }>
                    <SearchInput
                        value={ tableStateApi.tableState.search }
                        onValueChange={ searchHandler }
                        placeholder="Search"
                        debounceDelay={ 1000 }
                    />
                </FlexCell>
            </FlexRow>
            <DataTable
                headerTextCase={ "upper" as "upper" | "normal" }
                getRows={ view.getVisibleRows }
                columns={ personColumns }
                value={ tableStateApi.tableState }
                onValueChange={ tableStateApi.setTableState }
                showColumnsConfig={ true }
                allowColumnsResizing={ true }
                allowColumnsReordering={ true }
                { ...view.getListProps() }
            />
            <FilteredTableFooter
                tableState={ tableStateApi.tableState }
                setTableState={ tableStateApi.setTableState }
                totalCount={ totalCount }
            />
        </div>
    );
};
