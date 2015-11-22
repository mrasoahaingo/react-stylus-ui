import React from 'react';

import Button from './Button'
import Icon from './Icon'

export default class ButtonIcon extends React.Component {
    render () {
        return (
            <Button {...this.props}>
                <Icon icon={this.props.icon} inverted={true}/>
            </Button>
        )
    }
}
