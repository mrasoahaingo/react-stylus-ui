import React  from 'react'
import ReactDOM  from 'react-dom'
import './styl/app.styl'

import { Component } from './component'
import { GroupedComponent, ListComponent } from './containers'
import { AdminFormSection, ColorPaletteComponent, DropDownComponent, FormElements, SimulationPanel } from './examples'

class CheatSheetSection extends React.Component {
    render () {
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
}

class CheatSheet extends React.Component {
    render () {
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
                        <DropDownComponent/>
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
}

ReactDOM.render(<CheatSheet />, document.getElementById('root'));
