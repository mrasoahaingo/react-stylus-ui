import React  from 'react'
import classNames  from 'classNames'

import { Button, Icon, InputField } from '../elements'
import { FieldRow, Form } from '../layout'

export default class SearchField extends React.Component {
    render () {
        const icon = <Icon icon="Search" inverted={true} className="UI_Search__IconLabel"/>;
        return (
            <Form className="UI_Search">
                <Button label="Go" className="UI_Search__Button"/>
                <FieldRow>
                    <InputField className="UI_Search__Field" placeholder={this.props.placeholder} label={icon}/>
                </FieldRow>
            </Form>
        )
    }
}
