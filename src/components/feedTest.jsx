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

class FeedTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            materials: [],
        }
    }


    componentDidMount() {
        axios.get('http://108.61.221.218:58447/api-fake/user/10/request-feed').then(res => {
            console.log(res);
            this.setState({materials: res.data});
        });
    }

    render(){
        return(
            <List mediaList>
                {this.state.materials.map((material, index) => (
                    <ListItem
                        key = {index}
                        title = {material.title}
                        subtitle = {material.description}
                    >
                        <img slot="media" src ="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" width="44"/>
                    </ListItem>
                ))}
            </List>
        )
    };
}

export default FeedTest;