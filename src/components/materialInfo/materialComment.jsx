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
            <List mediaList>
                {this.props.comments.map((comment, index) => (
                    <ListItem
                        key = {index}
                        title = {comment.user.name}
                        subtitle="English/Chinese"
                        text= {comment.content}
                    >
                        <img src="https://placeimg.com/80/80/people/1" style={{ width: '40px', height: '40px', borderRadius: '50%' }} slot="media" />
                    </ListItem>
                ))}
            </List>


            // <List>
            //     {this.props.comments.map((comment, index) => (
            //         <ListItem title={`Comment ${comment}`} key={index}></ListItem>
            //     ))}
            // </List>
        )
    };



}

export default MaterialComment;