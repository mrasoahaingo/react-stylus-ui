import React from 'react'
import classNames  from 'classNames'
import _ from 'lodash'

import { CheckField } from '../elements'
import FieldRow from './FieldRow'

class GroupedCheckField extends React.Component {
    static childContextTypes = {
        groupName: React.PropTypes.string,
        groupType: React.PropTypes.string,
        groupStyle: React.PropTypes.string
    }
    getChildContext () {
        return {
            groupName: this.props.groupName,
            groupType: this.props.groupType,
            groupStyle: this.props.groupStyle
        };
    }
    render () {
        const checkList = this.props.labels.map((label, key) => <CheckField label={label} key={key}/>);
        return (
            <FieldRow grouped={true} align="Left" className={this.props.className}>
                {checkList}
            </FieldRow>
        )
    }
}

GroupedCheckField.defaultProps = {
    groupName: 'group' + _.random(0, 9999),
    groupType: 'checkbox',
    groupStyle: 'Checkbox'
}

export default GroupedCheckField
