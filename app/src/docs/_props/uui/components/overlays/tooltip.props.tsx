import * as React from 'react';
import { DocBuilder, iEditable } from '@epam/uui-docs';
import { TooltipProps } from '@epam/uui-components';
import { Button, Tooltip, TooltipMods } from '@epam/uui';
import { DefaultContext } from '../../docs';
import { ForwardedRef, forwardRef } from "react";

const Sfc = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => <div ref={ ref }>123</div>);

const tooltipDoc = new DocBuilder<TooltipProps & TooltipMods>({ name: 'Tooltip', component: Tooltip })
    .prop('content', { examples: [{ value: 'Some text', isDefault: true },
            {value: 'kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa kolbasa', name: 'long text' }], type: 'string' })
    .prop('children', {
        examples: [{ value:<Button color="primary" size="36" caption="Button"/>, name: 'Blue button', isDefault: true }, { value: <Sfc>123</Sfc>, name: 'sfc' }],
    })
    .prop('placement', {
        examples: [
            'auto-start', 'auto', 'auto-end', 'top-start',
            { value: 'top', isDefault: true },
            'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start',
        ],
    })
    .prop('renderContent', { examples: [() => <div style={ {width: '80px', height: '32px', border: '1px dashed black'} }>Component</div>] })
    .prop('closeOnMouseLeave', { examples: [{ name: 'toggler', value: 'toggler', isDefault: true }, 'boundary'] })
    .prop('color', { examples: ['contrast', { name: 'default', value: 'default', isDefault: true }, 'critical'] })
    .prop('closeDelay', { examples: [{ value: 0, isDefault: true }, { value: 500}, { value: 1000}] })
    .prop('openDelay', { examples: [{ value: 0, isDefault: true }, { value: 500}, { value: 1000}] })
    .implements([iEditable])
    .prop('value', { examples: [true, false], description: "controls visibility in 'manual' trigger mode" })
    .withContexts(DefaultContext);

export default tooltipDoc;
