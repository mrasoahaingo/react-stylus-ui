import React from 'react';
import classNames from 'classNames';

export default class FieldRow extends React.Component {
    render () {
        const isGrouped = this.props.grouped;
        const isColumned = this.props.columned;
        const groupClassName = classNames(
            this.props.className,
            'UI_FieldRow', {
                'UI_FieldRow--Grouped': isGrouped,
                'UI_FieldRow--Columned': isColumned,
                'UI_FieldRow--AlignLeft': isGrouped && this.props.align === 'Left',
                'UI_FieldRow--AlignRight': isGrouped && this.props.align === 'Right'
            }
        );
        return (
            <fieldset className={groupClassName}>
                {this.props.children}
            </fieldset>
        )
    }
}
