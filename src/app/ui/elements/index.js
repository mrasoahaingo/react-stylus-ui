import React from 'react';
import classNames from 'classNames';
import randomId from '../../utils/index.js';
import createFragment from 'react-addons-create-fragment';

export var Button = React.createClass({
    render: function () {
        var buttonClassName = classNames(
            'UI_Button',
            'UI_Button--' + (this.props.type),
            'UI_Button--' + (this.props.size || 'Normal')
        );
        return (
            <button className={buttonClassName}
                    disabled={!!this.props.disabled}>
                {this.props.children}
                <span className="UI_Button__Label">{this.props.label}</span>
            </button>
        )
    }
});

export var ButtonIcon = React.createClass({
    render: function () {
        return (
            <Button label={this.props.label} size={this.props.size} type={this.props.type}
                    disabled={this.props.disabled}>
                <Icon icon={this.props.icon} inverted={true}/>
            </Button>
        )
    }
});

export var CheckField = React.createClass({
    contextTypes: {
        groupName: React.PropTypes.string,
        groupType: React.PropTypes.string,
        groupStyle: React.PropTypes.string
    },
    childContextTypes: {
        style: React.PropTypes.string
    },
    getChildContext: function () {
        return {
            style: this.context.groupStyle || this.props.style || 'Checkbox'
        }
    },
    render: function () {
        var id = randomId();
        var name = this.context.groupName || this.props.name || 'name';
        var type = this.context.groupType || this.props.type || 'checkbox';
        return (
            <Field>
                <input id={id} className="UI_Field__Field" type={type} name={name}/>
                <label htmlFor={id} className="UI_Field__Label">{this.props.label}</label>
            </Field>
        )
    }
});

export var Field = React.createClass({
    contextTypes: {
        theme: React.PropTypes.string,
        style: React.PropTypes.string,
        inline: React.PropTypes.bool
    },
    render: function () {
        var fieldClassName = classNames(
            'UI_Field',
            'UI_Field--' + (this.context.style || 'Input'), {
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
});

export var Icon = React.createClass({
    render: function () {
        var iconClassNames = classNames(
            this.props.className,
            'Icon',
            'Icon--' + this.props.icon,
            'Icon--' + (this.props.pos || 'Left'), {
                'Icon--InvertedColor': this.props.inverted
            }
        );
        var iconSVG = '<use xlink:href="icons/sprite.svg#' + this.props.icon + '"></use>';
        return (
            <i className={iconClassNames}>
                <svg dangerouslySetInnerHTML={{__html: iconSVG }}/>
            </i>
        )
    }

});

export var InputField = React.createClass({
    childContextTypes: {
        style: React.PropTypes.string,
        inline: React.PropTypes.bool
    },
    getChildContext: function () {
        return {
            style: 'Input',
            inline: this.props.inline
        }
    },
    render: function () {
        return (
            <Field>
                <label className="UI_Field__Label">{this.props.label}</label>
                <input className="UI_Field__Field" type={this.props.type || 'text'} placeholder={this.props.placeholder}/>
            </Field>
        )
    }
});

export var Link = React.createClass({
    render: function () {
        var children = null;
        if (!this.props.icon) {
            children = <span className="UI_Link__Label">{this.props.label}</span>
        } else if (this.props.iconPos === 'Right') {
            children = React.addons.createFragment({
                label: <span className="UI_Link__Label">{this.props.label}</span>,
                icon: <Icon icon={this.props.icon} pos={this.props.iconPos}/>
            });
        } else {
            children = React.addons.createFragment({
                icon: <Icon icon={this.props.icon} pos={this.props.iconPos}/>,
                label: <span className="UI_Link__Label">{this.props.label}</span>
            });
        }
        var linkClassName = classNames(
            'UI_Link',
            this.props.className
        );
        return (
            <a href="" className={linkClassName}>
                {children}
            </a>
        )
    }
});

export var SelectField = React.createClass({
    childContextTypes: {
        style: React.PropTypes.string,
        inline: React.PropTypes.bool
    },
    getChildContext: function () {
        return {
            style: 'Select',
            inline: this.props.inline
        }
    },
    render: function () {
        var optionList = this.props.options.map(value => <option value={value} key={value}>Option</option>);
        return (
            <Field>
                <label className="UI_Field__Label">{this.props.label}</label>
                <select className="UI_Field__Field">
                    <option></option>
                    {optionList}
                </select>
            </Field>
        )
    }
});

export var Switcher = React.createClass({
    childContextTypes: {
        type: React.PropTypes.string
    },
    getChildContext: function () {
        return {
            type: 'Switch'
        }
    },
    render: function () {
        var id = randomId();
        return (
            <Field>
                <div className="UI_Switch">
                    <label className="UI_Switch__Label">{this.props.left}</label>
                    <input id={id} type="checkbox"/>
                    <label htmlFor={id} className="UI_Switch__Switcher"></label>
                    <label className="UI_Switch__Label">{this.props.right}</label>
                </div>
            </Field>
        )
    }
});

export var Text = React.createClass({
    render: function () {
        var children = null;
        if (!this.props.icon) {
            children = <span className="UI_Text__Label">{this.props.label}</span>
        } else if (this.props.iconPos === 'Right') {
            children = createFragment({
                label: <span className="UI_Text__Label">{this.props.label}</span>,
                icon: <Icon icon={this.props.icon} pos={this.props.iconPos}/>
            });
        } else {
            children = createFragment({
                icon: <Icon icon={this.props.icon} pos={this.props.iconPos}/>,
                label: <span className="UI_Text__Label">{this.props.label}</span>
            });
        }
        var textClassName = classNames(
            'UI_Text',
            this.props.className
        );
        return (
            <span className={textClassName}>
                {children}
            </span>
        )
    }
});
