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

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            materials: [],
            cover: "https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg",
        }
    }

    componentDidMount() {
        let url = 'http://108.61.221.218:58447/api-fake/user/' + 10 + '/request-feed'; // 10 is the user id
        axios.get(url).then(res => {
            console.log(res);
            this.setState({ materials: res.data });
        });
    }

    render() {
        return (
            <Page ptr onPtrRefresh={this.loadMore.bind(this)}>
                <List mediaList>
                    {this.state.materials.map((material, index) => (
                        <Card className="feed-card"
                                key = {index}>
                            <CardHeader className = "card-header"
                                className="no-border"
                                valign="bottom"
                                style= {{backgroundImage: "url(" + this.state.cover + ")"} }
                            >{material.title}</CardHeader>
                            <CardContent>
                                <p className="date">Posted on January 21, 2019</p>
                                <p>{material.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Link>Like</Link>
                                <Link>Read more</Link>
                            </CardFooter>
                        </Card>
                    ))}
                </List>
            </Page>
        );
    }

    loadMore(done) {
        const self = this;
        setTimeout(() => {
            const { materials, cover } = self.state;
            let url = 'http://108.61.221.218:58447/api-fake/user/' + 10 + '/request-feed';
            axios.get(url).then(res => {
                //console.log(res);
                let newList = materials.concat(res.data);
                self.setState({materials: newList});
                console.log(newList);
            });

            done();
        }, 1000)
    }

}

export default Feed;