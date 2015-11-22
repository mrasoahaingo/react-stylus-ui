import classNames  from 'classNames'
import React  from 'react'
import _  from 'lodash'

export default class ComponentHeader extends React.Component {
    static contextTypes = {
        theme: React.PropTypes.string
    }
    render () {
        const isDarkTheme = this.context.theme === 'Dark';
        const headerClassName = classNames(
            'UI_Header',
            'UI_Component__Header', {
                'UI_Component__Header--Simple': isDarkTheme,
                'UI_Component__Header--Underlined': !isDarkTheme,
                'hidden': _.isUndefined(this.props.title) && _.isUndefined(this.props.subTitle)
            },
            this.props.className
        );
        const titleClassName = classNames(
            'UI_Header__Title', {'hidden': _.isUndefined(this.props.title)}
        );
        const subTitleClassName = classNames(
            'UI_Header__SubTitle', {'hidden': _.isUndefined(this.props.subTitle)}
        );
        return (
            <header className={headerClassName}>
                {this.props.headerAction}
                <div className={titleClassName}>{this.props.title}</div>
                <div className={subTitleClassName}>{this.props.subTitle}</div>
            </header>
        )
    }
}
