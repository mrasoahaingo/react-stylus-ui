import React from 'react';
import classNames from 'classNames';
import _ from 'underscore';
import randomId from '../utils/index.js';

import {
    GroupedCheckField
    } from '../ui/layout/index.js';

export var Component = React.createClass({
    childContextTypes: {
        theme: React.PropTypes.string
    },
    getChildContext: function () {
        return {
            theme: this.props.theme || 'Light'
        };
    },
    render: function () {
        var isDarkTheme = this.props.theme === 'Dark';
        var componentClassName = classNames(
            'UI_Component ', {
                'UI_Component--Dark': isDarkTheme
            }
        );
        return (
            <section className={componentClassName}>
                <ComponentHeader title={this.props.title} subTitle={this.props.subTitle}
                                 headerAction={this.props.headerAction}/>

                <div className="UI_Component__Content">
                    {this.props.children}
                </div>
            </section>
        )
    }
});

export var ComponentHeader = React.createClass({
    contextTypes: {
        theme: React.PropTypes.string
    },
    render: function () {
        var isDarkTheme = this.context.theme === 'Dark';
        var headerClassName = classNames(
            this.props.className,
            'UI_Header',
            'UI_Component__Header', {
                'UI_Component__Header--Simple': isDarkTheme,
                'UI_Component__Header--Underlined': !isDarkTheme,
                'hidden': _.isUndefined(this.props.title) && _.isUndefined(this.props.subTitle)
            }
        );
        var titleClassName = classNames(
            'UI_Header__Title', {'hidden': _.isUndefined(this.props.title)}
        );
        var subTitleClassName = classNames(
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
});

export var ComponentSection = React.createClass({
    contextTypes: {
        theme: React.PropTypes.string
    },
    getHeaderAction: function () {
        var id = randomId();
        return (
            <GroupedCheckField className="UI_Component__Action"
                               labels={['Checkbox style Radio', 'Checkbox style Radio', 'Checkbox style Radio']}
                               type="checkbox"
                               style="Radio"
                               name={'grouped_check1_' + id}/>
        )
    },
    render: function () {
        var headerClassName = classNames(
            'UI_Section__Header', {'UI_Section__Header--Dark': this.context.theme === 'Dark'}
        );
        return (
            <section className="UI_Component__Section UI_Section">
                <ComponentHeader className={headerClassName} title={this.props.title}
                                 headerAction={this.getHeaderAction()}/>

                <div className="UI_Section__Content">
                    {this.props.children}
                </div>
            </section>
        )
    }
});
