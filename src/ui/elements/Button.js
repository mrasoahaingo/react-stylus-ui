import React  from 'react'
import classNames  from 'classNames'

class Button extends React.Component {
    render () {
        const buttonClassName = classNames(
            'UI_Button',
            'UI_Button--' + this.props.type,
            'UI_Button--' + this.props.size
        );
        return (
            <button className={buttonClassName} disabled={this.props.disabled}>
                {this.props.children}
                <span className="UI_Button__Label">{this.props.label}</span>
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    size: 'Normal'
}

export default Button
