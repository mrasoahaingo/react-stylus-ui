import classNames  from 'classNames'
import React  from 'react'

export default class ListItem extends React.Component {
    render () {
        return (
            <li className="UI_List__Item" onClick={this.props.handleClick}>{this.props.children}</li>
        )
    }
}
