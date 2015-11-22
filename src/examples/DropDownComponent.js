import React  from 'react'

import { Accordion, DropDown, SearchField } from '../ui/complexes'
import { Link, Text } from '../ui/elements'
import { List, ListItem } from '../ui/list'

export default class DropDownComponent extends React.Component {
    render () {
        const simpleList = (<List listStyle="Simple">
            {_.range(5).map(key => (
                <ListItem key={key}>
                    <Link labelClassName="UI_DropDown__LinkLabel" label="Aggregation Test"/>
                </ListItem>
            ))}
        </List>);
        const listItems = _.range(10).map(value => (
            <ListItem value={value} key={value}>
                <Accordion title="Option">
                    {simpleList}
                </Accordion>
            </ListItem>
        ));
        return (
            <div className="DropDownList">
                <DropDown label="Dropdown" className="UI_Field__Field" icon="SelectArrows">
                    <div>
                        <SearchField/>
                        <List listStyle="Alternated">
                            {listItems}
                        </List>
                    </div>
                </DropDown>
                <DropDown label={<Text label="Portfolio EUR+FIN"  icon="Star" iconPos="Left"/>} className="UI_Header__TitleDropDown" icon="DropDown">
                    <div>
                        <SearchField/>
                        <List listStyle="Alternated">
                            {listItems}
                        </List>
                    </div>
                </DropDown>
                <DropDown label={<Text label="Portfolio EUR+FIN"/>} className="UI_Header__TitleDropDown" icon="DropDown">
                    <div>
                        <SearchField/>
                        <List listStyle="Alternated">
                            {listItems}
                        </List>
                    </div>
                </DropDown>
            </div>
        )
    }
}
