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
    CardHeader
} from 'framework7-react';
import axios from 'axios';
import { throws } from 'assert';

class MaterialCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            material: {},
        }
    }

    componentDidMount() {
        let url = ' http://108.61.221.218:58447/api-fake/material/' + this.props.id; // get the info of one material
        //console.log(url);
        axios.get(url).then(res => {
            this.setState({ material: res.data })
        });

    };

    render() {
        return (
            <Card className="feed-card">
                <CardHeader
                    className="card-header"
                    valign="bottom"
                    style={{ backgroundImage: 'url(' + this.state.material.coverUrl + ')' }}
                >{this.state.material.title}</CardHeader>
                <CardContent>
                    <p className="date">Posted on January 21, 2015</p>
                    <p>{this.state.material.description}</p>
                </CardContent>
                <CardFooter>
                    <Link>Like</Link>
                    <Link>Read more</Link>
                </CardFooter>
            </Card>
        );
    }
}

export default MaterialCard;