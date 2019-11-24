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
    Icon
} from 'framework7-react';
import axios from 'axios';

class MaterialComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <List>
                {this.props.comments.map((comment, index) => (
                    <ListItem title={`Comment ${comment}`} key={index}></ListItem>
                ))}
            </List>
        )
    };



}

export default MaterialComment;