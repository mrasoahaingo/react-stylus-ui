import React  from 'react'
import classNames  from 'classNames'

class Field extends React.Component {
    static contextTypes = {
        theme: React.PropTypes.string,
        style: React.PropTypes.string,
        inline: React.PropTypes.bool
    }
    render () {
        const fieldClassName = classNames(
            'UI_Field',
            'UI_Field--' + (this.context.style || this.props.style), {
                'UI_Field--Light': this.context.theme === 'Dark',
                'UI_Field--Inline': this.context.inline
            }
        );
        return (
            <div className={fieldClassName}>
                {this.props.children}
            </div>
        )
    }
}

Field.defaultProps = {
    style: 'Input'
}

export default Field
