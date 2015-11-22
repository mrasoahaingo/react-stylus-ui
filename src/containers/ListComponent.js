import React from 'react'
import _ from 'lodash'

import { Link } from '../ui/elements'
import { Component } from '../component'
import { List, ListItem } from '../ui/list'

export default class ListComponent extends React.Component {
    render () {
        const listItems = _.range(this.props.nbItems).map(key => (
            <ListItem style={this.props.itemStyle} key={key}>
                <Link label="Aggregation Test"/>
            </ListItem>
        ));
        return (
            <Component theme={this.props.theme} title={this.props.title} subTitle={this.props.subTitle}>
                <List>
                    {listItems}
                </List>
            </Component>
        )
    }
}
