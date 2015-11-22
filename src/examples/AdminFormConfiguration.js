import React from 'react'
import { SelectField, Icon } from '../ui/elements'
import { FieldRow } from '../ui/layout'

export default class AdminFormConfiguration extends React.Component {
    render () {
        return (
            <section className="Configuration">
                <header className="Configuration__Header UI_Header">
                    <div className="Configuration__Title UI_Header__TitleColumn">Master Configuration</div>
                    <div className="Configuration__IconEditable"><Icon icon="Edit"/></div>
                </header>
                <FieldRow className="Configuration__Parameters">
                    <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                    <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                    <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                    <SelectField label="Select dropdown" options={[1, 2 ,3]}/>
                </FieldRow>
            </section>
        )
    }
}
