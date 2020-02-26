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
import axios from 'axios';

import Rating from '@material-ui/lab/Rating';
import TokenContext from "../../tokenContext";

class RatingArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            materials: [],
            rate: null,   // maximum should be five
        };

        this.handleChangeRate = this.handleChangeRate.bind(this);
    }

    static contextType = TokenContext;

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
                                        onChange={this.handleChangeRate}
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

    handleChangeRate(event, newValue){
        console.log(this.context);
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/material/"+ this.props.material.id +"/rate";
        axios.post(url, {
            rate: newValue,
            token: this.context,
        }).then((res) => {
            // console.log("rate!")
        });

        this.setState({rate: newValue});
    }






}

export default RatingArea;