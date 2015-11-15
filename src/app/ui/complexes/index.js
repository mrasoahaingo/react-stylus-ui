import React from 'react';
import classNames from 'classNames';
import randomId from '../../utils/index.js';
import HandleClickOutside from 'react-onclickoutside';

import {
    List,
    ListItem
    } from '../list/index.js';

import {
    Button,
    Field,
    Icon,
    InputField,
    Link,
    Text,
    } from '../elements/index.js' ;

import {
    FieldRow,
    Form
    } from '../layout/index.js';

export var Accordion = React.createClass({
    getInitialState: function () {
        return {open: false}
    },

    toggle: function () {
        this.setState({
            open: !this.state.open
        })
    },

    render: function () {
        var accordionClassName = classNames("UI_Accordion", {"UI_Accordion--Opened": this.state.open});
        return (
            <div className={accordionClassName}>
                <div className="UI_Accordion__Header UI_Header" onClick={this.toggle}>
                    <Icon icon="ArrowDown" inverted={true}/>
                    <span className="UI_Header__TitleUpper">{this.props.title}</span>
                </div>
                <div className="UI_Accordion__Content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export var DropDown = React.createClass({
    mixins: [
        HandleClickOutside
    ],
    getInitialState: function () {
        return {
            opened: false
        }
    },
    handleToggle: function () {
        this.setState({
            opened: !this.state.opened
        });
    },
    handleClickOutside: function () {
        this.setState({
            opened: false
        });
    },
    render: function () {
        var dropDownClassName = classNames(
            'UI_DropDown', {
                'UI_DropDown--Opened': this.state.opened
            }
        );
        var labelClassName = classNames(
            this.props.className,
            'UI_DropDown__Label'
        );
        return (
            <div className={dropDownClassName}>
                <label className={labelClassName} onClick={this.handleToggle} title={this.props.label}>
                    <Icon icon={this.props.icon} pos={this.props.iconPos || 'FloatRight'}
                          className="UI_DropDown__Icon"/>
                    {this.props.label}
                </label>

                <div className="UI_DropDown__Content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export var SearchField = React.createClass({
    render: function () {
        return (
            <Form className="UI_Search">
                <Button label="Go"/>
                <FieldRow>
                    <InputField placeholder="Search" label={<Icon icon="Search" inverted={true}/>}/>
                </FieldRow>
            </Form>
        )
    }
})

export var SelectField2 = React.createClass({
    childContextTypes: {
        style: React.PropTypes.string,
        inline: React.PropTypes.bool
    },
    getChildContext: function () {
        return {
            style: 'Select',
            inline: this.props.inline
        }
    },
    getInitialState: function () {
        return {
            label: '',
            selectedIndex: 0
        }
    },
    onSelected: function (id) {
        this.setState({
            label: 'Option ' + id,
            selectedIndex: id
        })
    },
    render: function () {
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
});
