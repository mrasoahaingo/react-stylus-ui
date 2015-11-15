import React from 'react';
import classNames from 'classNames';

export var List = React.createClass({
    render: function () {
        var listClassName = classNames(
            'UI_List',
            'UI_List--' + (this.props.listStyle || 'Simple')
        );
        return (
            <ul className={listClassName}>
                {this.props.children}
            </ul>
        )
    }
});

export var ListItem = React.createClass({
    render: function () {
        return (
            <li className="UI_List__Item" onClick={this.props.handleClick}>{this.props.children}</li>
        )
    }
});
