import React  from 'react'
import { Component } from '../component'

export default class ColorPaletteComponent extends React.Component {
    render () {
        return (
            <Component title="Palette" theme={this.props.theme}>
                {_.range(100).map(key => <div key={key} className="ColorPalette"/>)}
            </Component>
        )
    }
}
