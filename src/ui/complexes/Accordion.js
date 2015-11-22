import React  from 'react'
import classNames  from 'classNames'
import { autobind } from 'core-decorators';

import { Icon } from '../elements'

export default class Accordion extends React.Component {
    state = {
        open: false
    }
    @autobind
    toggle () {
        this.setState({
            open: !this.state.open
        })
    }
    render () {
        const accordionClassName = classNames(
            "UI_Accordion", {
                "UI_Accordion--Opened": this.state.open
            }
        );
        return (
            <div className={accordionClassName}>
                <div className="UI_Accordion__Header UI_Header" onClick={this.toggle}>
                    <Icon icon="ArrowDown" inverted={true}/>
                    <span className="UI_Header__TitleUpper">{this.props.title}</span>
                </div>
                <div className="UI_Accordion__Content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
