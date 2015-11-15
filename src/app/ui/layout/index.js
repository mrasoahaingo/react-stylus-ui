import React from 'react';
import classNames from 'classNames';
import randomId from '../../utils/index.js';

import {
    CheckField
    } from '../elements/index.js';

export var FieldRow = React.createClass({
    render: function () {
        var isGrouped = this.props.grouped;
        var isColumned = this.props.columned;
        var groupClassName = classNames(
            this.props.className,
            'UI_FieldRow', {
                'UI_FieldRow--Grouped': isGrouped,
                'UI_FieldRow--Columned': isColumned,
                'UI_FieldRow--AlignLeft': isGrouped && this.props.align === 'Left',
                'UI_FieldRow--AlignRight': isGrouped && this.props.align === 'Right'
            });
        return (
            <fieldset className={groupClassName}>
                {this.props.children}
            </fieldset>
        )
    }
});

export var Form = React.createClass({
    render: function () {
        var formClassName = classNames(
            'UI_Form',
            this.props.className
        );
        return (
            <form className={formClassName}>
                {this.props.children}
            </form>
        )
    }
});

export var GroupedCheckField = React.createClass({
    childContextTypes: {
        groupName: React.PropTypes.string,
        groupType: React.PropTypes.string,
        groupStyle: React.PropTypes.string
    },
    getChildContext: function () {
        return {
            groupName: this.props.name || ('group' + randomId()),
            groupType: this.props.type || 'checkbox',
            groupStyle: this.props.style || 'Checkbox'
        };
    },
    render: function () {
        var checkList = this.props.labels.map((label, key) => <CheckField label={label} key={key}/>);
        return (
            <FieldRow grouped={true} align="Left" className={this.props.className}>
                {checkList}
            </FieldRow>
        )
    }
});

