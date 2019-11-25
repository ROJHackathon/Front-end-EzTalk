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
import CommentSheet from './materialCard/commentSheet.jsx'

class MaterialCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            material: {},
            isLiked: false,
            isCommentOpen: false,
        };

        // bind
        this.handleClickLike = this.handleClickLike.bind(this);
    }

    componentDidMount() {
        let url = ' http://108.61.221.218:39802/api-fake/material/' + this.props.id; // get the info of one material
        //console.log(url);
        axios.get(url).then(res => {
            this.setState({ material: res.data })
        });

    };

    render() {
        let button;
        if (this.state.isLiked) {
            button = <Icon ios="f7:heart_fill"></Icon>
        } else {
            button = <Icon ios="f7:heart"></Icon>
        }

        return (

            <Card className="feed-card">
                <CardHeader
                    className="card-header"
                    valign="bottom"
                    style={{ backgroundImage: 'url(' + this.state.material.coverUrl + ')' }}
                >{this.state.material.title}</CardHeader>
                <CardContent>
                    <p className="date">Posted on January 21, 2019</p>
                    <p>{this.state.material.description}</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={this.handleClickLike}>
                        {button}
                    </Button>
                    <Button onClick={() => (this.setState({ isCommentOpen: true }))}>
                        <Icon ios="f7:captions_bubble_fill"></Icon>
                    </Button>
                    <Link iconF7="link"></Link>
                </CardFooter>
                <CommentSheet state={this.state.isCommentOpen} handleCloseComment={this.handleCloseComment.bind(this)}></CommentSheet>
            </Card>

        );
    }

    handleClickLike() {
        if (this.state.isLiked == false) {
            this.setState({ isLiked: true });
            // console.log(this.state.isLiked);
        } else {
            this.setState({ isLiked: false });
            // console.log(this.state.isLiked);
        }
    }

    handleCloseComment() {
        this.setState({ isCommentOpen: false });
        console.log(this.state.isCommentOpen)
    }
}

export default MaterialCard;