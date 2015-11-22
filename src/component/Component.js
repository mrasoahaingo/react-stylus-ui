import React  from 'react'
import classNames  from 'classNames'

import ComponentHeader from './ComponentHeader'

class Component extends React.Component {
    static childContextTypes = {
        theme: React.PropTypes.string
    }
    getChildContext () {
        return {
            theme: this.props.theme
        }
    }
    render () {
        const componentClassName = classNames(
            'UI_Component ', {
                'UI_Component--Dark': this.props.theme === 'Dark'
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
}

Component.defaultProps = {
    theme: 'Light'
}

export default Component
