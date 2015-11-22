import React  from 'react'
import { Component } from '../component'
import { Button } from '../ui/elements'

export default class ConfigurationComponent extends React.Component {
    getHeaderAction () {
        return (
            <div className="UI_Component__Action">
                <Button label="Add Configuration" type="Primary"/>
            </div>
        )
    }
    render () {
        return (
            <Component title={this.props.title} subTitle={this.props.subTitle}
                headerAction={this.getHeaderAction()}>
                {this.props.children}
            </Component>
        )
    }
}
