import React from 'react'
import classNames from 'classNames'
import createFragment from 'react-addons-create-fragment'

import Icon from './Icon'

export default class Text extends React.Component {
    render () {
        var children = null;

        if (!this.props.icon) {
            children = <span className="UI_Text__Label">{this.props.label}</span>
        } else if (this.props.iconPos === 'Right') {
            children = createFragment({
                label: <span className="UI_Text__Label">{this.props.label}</span>,
                icon: <Icon icon={this.props.icon} pos={this.props.iconPos}/>
            });
        } else {
            children = createFragment({
                icon: <Icon icon={this.props.icon} pos={this.props.iconPos}/>,
                label: <span className="UI_Text__Label">{this.props.label}</span>
            });
        }

        const textClassName = classNames(
            'UI_Text',
            this.props.className
        );

        return (
            <span className={textClassName}>
                {children}
            </span>
        )
    }
}
