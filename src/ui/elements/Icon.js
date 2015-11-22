import React  from 'react'
import classNames  from 'classNames'

class Icon extends React.Component {
    render () {
        const iconClassNames = classNames(
            'Icon',
            'Icon--' + this.props.icon,
            'Icon--' + this.props.pos, {
                'Icon--InvertedColor': this.props.inverted
            },
            this.props.className
        );
        const iconSVG = '<use xlink:href="icons/sprite.svg#' + this.props.icon + '"></use>';
        return (
            <i className={iconClassNames}>
                <svg dangerouslySetInnerHTML={{__html: iconSVG }}/>
            </i>
        )
    }

}

Icon.defaultProps = {
    pos: 'Left'
}

export default Icon
