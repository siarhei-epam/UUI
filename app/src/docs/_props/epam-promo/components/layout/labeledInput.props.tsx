import * as React from 'react';
import { LabeledInput, TextInput, Checkbox } from '@epam/promo';
import { DocBuilder } from '@epam/uui-docs';
import { LabeledInputProps } from '@epam/uui-components';
import { ResizableContext, DefaultContext, FormContext, sizeDoc, isInvalidDoc, iHasLabelDoc } from '../../docs';
import { LabeledInputMods } from '@epam/uui';

const labeledInputDoc = new DocBuilder<LabeledInputProps & LabeledInputMods>({ name: 'LabeledInput', component: LabeledInput })
    .implements([isInvalidDoc, iHasLabelDoc, sizeDoc])
    .prop('labelPosition', { examples: [{ value: 'top', isDefault: true }, 'left'] })
    .prop('children', { examples: [
            { name: "TextInput 48", value: <TextInput value='text' size='48' onValueChange={ null } />, isDefault: true },
            { name: "TextInput 36", value: <TextInput value='text' onValueChange={ null }/>, isDefault: true },
            { name: "TextInput 30", value: <TextInput value='text' size='30' onValueChange={ null }/> },
            { name: "TextInput 24", value: <TextInput value='text' size='24' onValueChange={ null }/> },
            { name: "Checkbox", value: <Checkbox value={ true } onValueChange={ null }/> },
        ] })
    .prop('info', { examples: [{ value: 'This tooltip can be helpful' }] })
    .prop('isRequired', { examples: [true] })
    .prop('isOptional', { examples: [true] })
    .prop('validationMessage', { examples: [{ value: 'This field is mandatory', isDefault: true}]})
    .withContexts(DefaultContext, ResizableContext, FormContext);

export default labeledInputDoc;
