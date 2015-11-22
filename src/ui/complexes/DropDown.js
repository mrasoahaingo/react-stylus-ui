import React  from 'react'
import classNames  from 'classNames'
import { autobind } from 'core-decorators'
import reactMixin from 'react-mixin'
import listensToClickOutside from 'react-onclickoutside/decorator';

import { Icon } from '../elements'

@listensToClickOutside()
class DropDown extends React.Component {
    state = {
        opened: false
    }
    handleClickOutside = (event) => {
        this.setState({
            opened: false
        });
    }
    @autobind
    handleToggle () {
        this.setState({
            opened: !this.state.opened
        });
    }
    render () {
        const dropDownClassName = classNames(
            'UI_DropDown', {
                'UI_DropDown--Opened': this.state.opened
            }
        );
        const labelClassName = classNames(
            'UI_DropDown__Label',
            this.props.className
        );
        return (
            <div className={dropDownClassName}>
                <label className={labelClassName} onClick={this.handleToggle} title={this.props.label}>
                    <Icon icon={this.props.icon} pos={this.props.iconPos}
                        className="UI_DropDown__Icon"/>
                    {this.props.label}
                </label>
                <div className="UI_DropDown__Content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

DropDown.defaultProps = {
    iconPos: 'FloatRight'
}

export default DropDown;
