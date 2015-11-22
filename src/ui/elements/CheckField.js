import React  from 'react'
import classNames  from 'classNames'
import _  from 'lodash'

import { Field } from '../layout'

class CheckField extends React.Component {
    static contextTypes = {
        groupName: React.PropTypes.string,
        groupType: React.PropTypes.string,
        groupStyle: React.PropTypes.string
    }
    static childContextTypes = {
        style: React.PropTypes.string
    }
    getChildContext () {
        return {
            style: this.context.groupStyle || this.props.style
        }
    }
    render () {
        const id = _.random(0, 9999);
        const name = this.props.name;
        const type = this.context.groupType || this.props.type;
        return (
            <Field>
                <input id={id} className="UI_Field__Field" type={type} name={name}/>
                <label htmlFor={id} className="UI_Field__Label">{this.props.label}</label>
            </Field>
        )
    }
}

CheckField.defaultProps = {
    name: '',
    type: 'checkbox',
    style: 'Checkbox'
}

export default CheckField
