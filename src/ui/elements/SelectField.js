import React from 'react';
import classNames from 'classNames';

import { Field } from '../layout'

export default class SelectField extends React.Component {
    static childContextTypes = {
        style: React.PropTypes.string,
        inline: React.PropTypes.bool
    }
    getChildContext () {
        return {
            style: 'Select',
            inline: this.props.inline
        }
    }
    render () {
        var optionList = this.props.options.map(value => <option value={value} key={value}>Option</option>);
        return (
            <Field>
                <label className="UI_Field__Label">{this.props.label}</label>
                <select className="UI_Field__Field">
                    <option></option>
                    {optionList}
                </select>
            </Field>
        )
    }
}
