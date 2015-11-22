import React from 'react';
import classNames from 'classNames';
import _ from 'lodash'

import { Field } from '../layout'

export default class Switcher extends React.Component {
    static childContextTypes = {
        type: React.PropTypes.string
    }
    getChildContext () {
        return {
            type: 'Switch'
        }
    }
    render () {
        const id = _.random(0, 9999);
        return (
            <Field>
                <div className="UI_Switch">
                    <label className="UI_Switch__Label">{this.props.left}</label>
                    <input id={id} type="checkbox"/>
                    <label htmlFor={id} className="UI_Switch__Switcher"></label>
                    <label className="UI_Switch__Label">{this.props.right}</label>
                </div>
            </Field>
        )
    }
}
