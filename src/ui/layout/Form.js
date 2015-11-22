import React from 'react';
import classNames from 'classNames';

export default class Form extends React.Component {
    render () {
        const formClassName = classNames(
            'UI_Form',
            this.props.className
        );
        return (
            <form className={formClassName}>
                {this.props.children}
            </form>
        )
    }
}
