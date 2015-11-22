import React  from 'react'
import classNames  from 'classNames'
import { autobind } from 'core-decorators';

import { Field } from '../layout'
import { List, ListItem } from '../list'
import DropDown from './DropDown'

export default class SelectField2 extends React.Component {
    state = {
        label: '',
        selectedIndex: 0
    }
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
    @autobind
    onSelected (id) {
        this.setState({
            label: 'Option ' + id,
            selectedIndex: id
        })
    }
    render () {
        return (
            <Field>
                <label className="UI_Field__Label">{this.props.label}</label>
                <DropDown label={this.state.label} className="UI_Field__Field" icon="SelectArrows">
                    <List listStyle="Alternated">
                        {this.props.options.map(value => (
                            <ListItem key={value} handleClick={this.onSelected.bind(this, value)}>
                                Option {value}
                            </ListItem>
                        ))}
                    </List>
                </DropDown>
            </Field>
        )
    }
}
