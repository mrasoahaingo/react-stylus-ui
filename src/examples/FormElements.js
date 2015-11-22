import React  from 'react'
import  _ from 'lodash'

import { SelectField2 } from '../ui/complexes'
import { ButtonIcon, CheckField, InputField, SelectField, Switcher } from '../ui/elements'
import { FieldRow, Form, GroupedCheckField } from '../ui/layout'

export default class FormElements extends React.Component {
    render () {
        const id = _.random(0, 9999);
        return (
            <Form>
                <FieldRow grouped={true} align="Left">
                    <ButtonIcon label="Primary" type="Primary" size="Small" icon="Edit"/>
                    <ButtonIcon label="Secondary" type="Secondary" size="Small" icon="Edit"/>
                    <ButtonIcon label="Disabled" type="Disabled" size="Small" icon="Edit" disabled={true}/>
                </FieldRow>
                <FieldRow grouped={true} align="Left">
                    <ButtonIcon label="Primary" type="Primary" icon="Edit"/>
                    <ButtonIcon label="Secondary" type="Secondary" icon="Edit"/>
                    <ButtonIcon label="Disabled" type="Disabled" icon="Edit" disabled={true}/>
                </FieldRow>
                <FieldRow grouped={true} align="Left">
                    <ButtonIcon label="Primary" type="Primary" size="Large" icon="Edit"/>
                    <ButtonIcon label="Secondary" type="Secondary" size="Large" icon="Edit"/>
                    <ButtonIcon label="Disabled" type="Disabled" size="Large" icon="Edit" disabled={true}/>
                </FieldRow>
                <FieldRow columned={true}>
                    <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                    <SelectField2 label="Select dropdown" options={[1, 2 ,3]}/>
                    <InputField label="Input field"/>
                </FieldRow>
                <FieldRow columned={true}>
                    <CheckField label="Checkbox style Radio" style="Radio" name={'single_radio_' + id}/>
                    <CheckField label="Checkbox style Check" name={'single_check_' + id}/>
                </FieldRow>
                <GroupedCheckField labels={['Radio', 'Radio', 'Radio']}
                    groupType="radio"
                    groupStyle="Radio"
                    groupName={'grouped_radio1_' + id}/>
                <GroupedCheckField labels={['Radio style Check', 'Radio style Check', 'Radio style Check']}
                    groupType="radio"
                    groupStyle="Checkbox"
                    groupName={'grouped_radio2_' + id}/>
                <GroupedCheckField labels={['Checkbox', 'Checkbox', 'Checkbox']} name={'grouped_check2_' + id}/>
                <GroupedCheckField labels={['Checkbox style Radio', 'Checkbox style Radio', 'Checkbox style Radio']}
                    groupType="checkbox"
                    groupStyle="Radio"
                    groupName={'grouped_check1_' + id}/>
                <FieldRow>
                    <Switcher left="Analysis" right="Admin"/>
                </FieldRow>
            </Form>
        )
    }
}
