import React  from 'react'

export default class GroupedComponent extends React.Component {
    render () {
        return (
            <section className="UI_ComponentGroup">
                {this.props.children}
            </section>
        )
    }
}
