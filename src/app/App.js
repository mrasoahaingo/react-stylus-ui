import randomId from './utils/index.js';
import React from 'react';

import {
    Component
} from './component/index.js'

import {
    GroupedComponent,
    ListComponent
} from './component/containers/index.js'

import {
    AdminFormSection,
    ColorPaletteComponent,
    DropDownComponents,
    FormElements,
    SimulationPanel
} from './component/compositions/index.js'

var CheatSheetSection = React.createClass({
    render: function () {
        var sectionTitle = this.props.sectionTitle;
        var sectionAnchor = sectionTitle.replace(/\s+/, '');
        return (
            <section className="CheatSheetSection">
                <a name={sectionAnchor}/>

                <div className="CheatSheetSection__Title"><a href={'#' + sectionAnchor}>{sectionTitle}</a></div>
                <section className="CheatSheetSection__Content">
                    {this.props.children}
                </section>
            </section>
        )
    }
});

var CheatSheet = React.createClass({
    render: function () {
        return (
            <div className="Container">
                <CheatSheetSection sectionTitle="Colors">
                    <GroupedComponent>
                        <ColorPaletteComponent/>
                        <ColorPaletteComponent theme="Dark"/>
                    </GroupedComponent>
                </CheatSheetSection>
                <CheatSheetSection sectionTitle="Form Elements">
                    <GroupedComponent>
                        <Component title="Form Elements" subTitle="As of 01/01/2000">
                            <FormElements/>
                        </Component>
                        <Component theme="Dark" title="Form Elements" subTitle="Another sub title">
                            <FormElements/>
                        </Component>
                    </GroupedComponent>
                </CheatSheetSection>
                <CheatSheetSection sectionTitle="List">
                    <GroupedComponent>
                        <ListComponent title="List" subTitle="As of 01/01/2000" nbItems={6}/>
                        <ListComponent theme="Dark" title="List" subTitle="As of 01/01/2000" nbItems={6}/>
                    </GroupedComponent>
                </CheatSheetSection>
                <CheatSheetSection sectionTitle="DropDown + Accordion">
                    <Component title="List" subTitle="As of 01/01/2000">
                        <DropDownComponents/>
                    </Component>
                </CheatSheetSection>
                <CheatSheetSection sectionTitle="Admin Components">
                    <AdminFormSection title="Admin Form"/>
                </CheatSheetSection>
                <CheatSheetSection sectionTitle="Simulation Panel">
                    <SimulationPanel theme="Dark"/>
                    <SimulationPanel/>
                </CheatSheetSection>
            </div>
        )
    }
});


export default CheatSheet;