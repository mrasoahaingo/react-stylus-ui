import React from 'react';
import _ from 'underscore';
import {Component, ComponentHeader} from '../index.js';

import {
    Link
    } from '../../ui/elements/index.js';

import {
    List,
    ListItem
    } from '../../ui/list/index.js';

export var GroupedComponent = React.createClass({
    render: function () {
        return (
            <section className="UI_ComponentGroup">
                {this.props.children}
            </section>
        )
    }
});

export var ListComponent = React.createClass({
    render: function () {
        var listItems = _.range(this.props.nbItems).map(key => (
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
});
