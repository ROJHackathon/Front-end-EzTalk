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
        let url = 'http://108.61.221.218:39802/api-fake/material/' + this.props.id + '/get-comment';
        axios.get(url).then(res => {
            this.setState({
                comments : res.data,
            })
            //console.log(res)
        })
    }

    render() {
        return (
            <List mediaList className="comment-list">
                <ListItem title="Comments" groupTitle></ListItem>
                {this.state.comments.map((comment, index) => (
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