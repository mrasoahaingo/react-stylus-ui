import React from 'react';
import classNames from 'classNames';

class List extends React.Component {
    render () {
        const listClassName = classNames(
            'UI_List',
            'UI_List--' + this.props.listStyle
        );
        return (
            <ul className={listClassName}>
                {this.props.children}
            </ul>
        )
    }
}

List.defaultProps = {
    listStyle: 'Simple'
}

export default List
