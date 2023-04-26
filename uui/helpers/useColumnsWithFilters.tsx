import React, { useCallback, useMemo } from "react";
import { DropdownBodyProps, DataColumnProps, ILens, TableFiltersConfig } from "@epam/uui-core";
import { FilterItemBody } from "../components";

export const useColumnsWithFilters = <TFilter extends Record<string, any>>(initialColumns: DataColumnProps[], filters: TableFiltersConfig<TFilter>[] | undefined) => {

    const makeFilterRenderCallback = useCallback<(key: string) => (lens: ILens<TFilter>, dropdownProps: DropdownBodyProps) => React.ReactNode>
    ((key) => (filterLens, dropdownProps) => {
        const filter = filters.find(f => f.columnKey === key);
        if (!filter) return null;

        const props = filterLens.prop(filter.field).toProps();
        return <FilterItemBody { ...props } { ...filter } { ...dropdownProps } />;
    }, [filters]);

    const columns = useMemo(() => {
        if (filters) {
            const filterKeys = filters.map(f => f.columnKey);
            const newColumns = (initialColumns.map(column => {
                if (filterKeys.includes(column.key)) {
                    return {
                        ...column,
                        renderFilter: makeFilterRenderCallback(column.key),
                    };
                } else {
                    return column;
                }
            }));
            return newColumns;
        }
        return initialColumns;
    }, [filters, initialColumns]);

    return columns;
};