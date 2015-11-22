import React  from 'react'
import _ from 'lodash'

import { Component, ComponentSection } from '../component'
import { SelectField2 } from '../ui/complexes'
import { Button, CheckField } from '../ui/elements'
import { FieldRow } from '../ui/layout'

export default class SimulationPanel extends React.Component {
    render () {
        const id = _.random(0, 9999);
        return (
            <Component theme={this.props.theme}>
                <ComponentSection title="Equity Attribution Simulation">
                    <FieldRow grouped={true} align="Left">
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                    </FieldRow>
                    <FieldRow grouped={true} align="Left">
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                    </FieldRow>
                </ComponentSection>
                <ComponentSection title="Calcul Options">
                    <FieldRow grouped={true} align="Left">
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                    </FieldRow>
                </ComponentSection>
                <ComponentSection title="Recap of Parameters">
                    <FieldRow grouped={true} align="Left">
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                        <SelectField2 inline={true} label="Select dropdown" options={[1, 2 ,3]}/>
                    </FieldRow>
                </ComponentSection>
                <FieldRow grouped={true} align="Right">
                    <CheckField label="Annualization" style="Radio" name={'single_check_' + id}/>
                    <Button label="Run Simulation" type="Primary"/>
                </FieldRow>
            </Component>
        )
    }
}
