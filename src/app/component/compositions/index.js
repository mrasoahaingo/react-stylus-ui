import React from 'react';
import _ from 'underscore';
import randomId from '../../utils/index.js';

import {
    Component,
    ComponentSection
    } from '../index.js';

import {
    Button,
    ButtonIcon,
    CheckField,
    Field,
    Icon,
    InputField,
    Link,
    SelectField,
    Text,
    Switcher,
    } from '../../ui/elements/index.js' ;

import {
    Accordion,
    DropDown,
    SearchField,
    SelectField2
    } from '../../ui/complexes/index.js';

import {
    List,
    ListItem
    } from '../../ui/list/index.js';

import {
    GroupedComponent,
    ListComponent
    } from '../containers/index.js';

import {
    FieldRow,
    Form,
    GroupedCheckField
    } from '../../ui/layout/index.js';

export var AdminFormSection = React.createClass({
    render: function () {
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
});

export var AdminFormConfiguration = React.createClass({
    render: function () {
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
});

export var ColorPaletteComponent = React.createClass({
    render: function () {
        var colorPlaceholders = _.range(100).map(key => <div key={key} className="ColorPalette"/>);
        return (
            <Component title="Palette" theme={this.props.theme}>
                {colorPlaceholders}
            </Component>
        )
    }
});

export var ConfigurationComponent = React.createClass({
    getHeaderAction: function () {
        return (
            <div className="UI_Component__Action">
                <Button label="Add Configuration" type="Primary"/>
            </div>
        )
    },
    render: function () {
        return (
            <Component title={this.props.title} subTitle={this.props.subTitle}
                       headerAction={this.getHeaderAction()}>
                {this.props.children}
            </Component>
        )
    }
});

export var DropDownComponents = React.createClass({
    render: function () {
        var simpleList = (<List listStyle="Simple">
            {_.range(5).map(key => (
                <ListItem key={key}>
                    <Link label="Aggregation Test"/>
                </ListItem>
            ))}
        </List>);
        var listItems = _.range(10).map(value => (
            <ListItem value={value} key={value}>
                <Accordion title="Option">
                    {simpleList}
                </Accordion>
            </ListItem>
        ));
        return (
            <div className="DropDownList">
                <DropDown label="Dropdown" className="UI_Field__Field" icon="SelectArrows">
                    <div>
                        <SearchField/>
                        <List listStyle="Alternated">
                            {listItems}
                        </List>
                    </div>
                </DropDown>
                <DropDown label={<Text label="Portfolio EUR+FIN"  icon="Star" iconPos="Left"/>} className="UI_Header__TitleDropDown" icon="DropDown">
                    <div>
                        <SearchField/>
                        <List listStyle="Alternated">
                            {listItems}
                        </List>
                    </div>
                </DropDown>
                <DropDown label={<Text label="Portfolio EUR+FIN"/>} className="UI_Header__TitleDropDown" icon="DropDown">
                    <div>
                        <SearchField/>
                        <List listStyle="Alternated">
                            {listItems}
                        </List>
                    </div>
                </DropDown>
            </div>
        )
    }
});

export var FormElements = React.createClass({
    render: function () {
        var id = randomId();
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
                <GroupedCheckField labels={['Radio', 'Radio', 'Radio']} type="radio" style="Radio"
                                   name={'grouped_radio1_' + id}/>
                <GroupedCheckField labels={['Radio style Check', 'Radio style Check', 'Radio style Check']}
                                   type="radio" style="Checkbox"
                                   name={'grouped_radio2_' + id}/>
                <GroupedCheckField labels={['Checkbox', 'Checkbox', 'Checkbox']} name={'grouped_check2_' + id}/>
                <GroupedCheckField
                    labels={['Checkbox style Radio', 'Checkbox style Radio', 'Checkbox style Radio']}
                    type="checkbox" style="Radio"
                    name={'grouped_check1_' + id}/>
                <FieldRow>
                    <Switcher left="Analysis" right="Admin"/>
                </FieldRow>
            </Form>
        )
    }
});

export var SimulationPanel = React.createClass({
    render: function () {
        var id = randomId();
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
});

