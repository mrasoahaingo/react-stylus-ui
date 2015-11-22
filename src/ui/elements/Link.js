import React from 'react';
import classNames from 'classNames';

import Icon from './Icon';

class Link extends React.Component {
    render () {
        const linkClassName = classNames(
            'UI_Link',
            this.props.className
        );
        const labelClassName = classNames(
            'UI_Link__Label',
            this.props.labelClassName
        );
        const label = <span className={labelClassName}>{this.props.label}</span>;
        const icon = <Icon icon={this.props.icon} pos={this.props.iconPos}/>;

        let children = null;
        if (!this.props.icon) {
            children = label
        } else if (this.props.iconPos === 'Right') {
            children = React.addons.createFragment({ label, icon });
        } else {
            children = React.addons.createFragment({ icon, label });
        }

        return (
            <a href={this.props.url} className={linkClassName}>
                {children}
            </a>
        )
    }
}

Link.defaultProps = {
    url: '#'
}

export default Link
