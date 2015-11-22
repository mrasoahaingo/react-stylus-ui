import React  from 'react'

import { Component } from '../component'
import { GroupedComponent, ListComponent } from '../containers'
import { CheckField, SelectField } from '../ui/elements'
import { Field, FieldRow, Form } from '../ui/layout'
import AdminFormConfiguration from './AdminFormConfiguration.js'
import ConfigurationComponent from './ConfigurationComponent.js'

export default class AdminFormSection extends React.Component {
    render () {
        return (
            <Form>
                <Component theme="Dark">
                    <dl className="UI_Form__Header">
                        <dt>Code:</dt>
                        <dd>PTF00000001</dd>
                        <dt>Name:</dt>
                        <dd>Portfolio Test 1</dd>
                    </dl>
                </Component>
                <Component title="Characteristics">
                    <FieldRow columned={true}>
                        <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                    </FieldRow>
                    <FieldRow columned={true}>
                        <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                        <Field>
                            <div className="UI_Field__Label">Checkbox Label</div>
                            <CheckField label="On / Off"/>
                        </Field>
                    </FieldRow>
                </Component>
                <ConfigurationComponent title="Configuration" subTitle="Minimum of three configurations set-up">
                    <AdminFormConfiguration/>
                    <AdminFormConfiguration/>
                    <AdminFormConfiguration/>
                </ConfigurationComponent>
                <GroupedComponent>
                    <ListComponent title="Aggregation" subTitle="Click on the name to see details" nbItems={6}/>
                    <Component title="Permission Sets Assets"/>
                </GroupedComponent>
            </Form>
        )
    }
}
