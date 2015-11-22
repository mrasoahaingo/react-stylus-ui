import React  from 'react'
import classNames  from 'classNames'

import { Field } from '../layout'

class InputField extends React.Component {
    static childContextTypes = {
        style: React.PropTypes.string,
        inline: React.PropTypes.bool
    }
    getChildContext () {
        return {
            style: 'Input',
            inline: this.props.inline
        }
    }
    render () {
        return (
            <Field>
                <label className="UI_Field__Label">{this.props.label}</label>
                <input className="UI_Field__Field" type={this.props.type} placeholder={this.props.placeholder}/>
            </Field>
        )
    }
}

InputField.defaultProps = {
    type: 'text'
}

export default InputField
