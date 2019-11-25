import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    Subnavbar,
    Searchbar,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    AccordionContent,
    Icon
} from 'framework7-react';

import Rating from '@material-ui/lab/Rating';

class RatingArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            materials: [],
            rate: null,   // maximum should be five
        }


    }

    render() {

        return (
            <div className="rate-area">
                <List accordionList>
                    <ListItem accordionItem title="Rate This">
                        <Icon slot="media" ios="f7:rosette"></Icon>
                        <AccordionContent>
                            <Block>
                                <div className="description">How do you like this material?</div>
                                <div className="stars">
                                    <Rating
                                        name="simple-controlled"
                                        value={this.state.rate}
                                        onChange={(event,newValue) => {
                                            this.setState({rate: newValue});
                                        }}
                                    />
                                </div>
                            </Block>

                        </AccordionContent>
                    </ListItem>
                </List>
            </div>

        )
    }
    // rate: []




}

export default RatingArea;