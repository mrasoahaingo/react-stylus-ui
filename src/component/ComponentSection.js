import React  from 'react'
import classNames  from 'classNames'
import _ from 'lodash'

import ComponentHeader from "./ComponentHeader";
import { GroupedCheckField } from "../ui/layout";

export default class ComponentSection extends React.Component {
    static contextTypes = {
        theme: React.PropTypes.string
    }
    getHeaderAction () {
        const id = _.random(0, 9999);
        return (
            <GroupedCheckField className="UI_Component__Action"
                labels={['Checkbox style Radio', 'Checkbox style Radio', 'Checkbox style Radio']}
                groupType="checkbox"
                groupStyle="Radio"
                groupName={'grouped_check1_' + id}/>
        )
    }
    render () {
        const headerClassName = classNames(
            'UI_Section__Header', {
                'UI_Section__Header--Dark': this.context.theme === 'Dark'
            }
        );
        return (
            <section className="UI_Component__Section UI_Section">
                <ComponentHeader className={headerClassName} title={this.props.title}
                    headerAction={this.getHeaderAction()}/>
                <div className="UI_Section__Content">
                    {this.props.children}
                </div>
            </section>
        )
    }
}
