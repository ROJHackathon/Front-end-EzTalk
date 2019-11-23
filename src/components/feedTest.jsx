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

    //first feed when init the app 
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
                        <ListItem
                            key={index}
                            title={material.title}
                            subtitle={material.description}
                        >
                            <img slot="media" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" width="44" />
                        </ListItem>
                    ))}
                </List>
            </Page>
        )
    };

    loadMore(done) {
        const self = this;
        setTimeout(() => {
            const { materials } = self.state;
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


export default FeedTest;