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
        }
    }

    componentDidMount() {
        let url = 'http://108.61.221.218:39802/api-fake/user/' + 10 + '/request-feed'; // 10 is the user id
        axios.get(url).then(res => {
            //console.log(res);
            this.setState({ materials: res.data });
        });
    }

    render() {
        return (
            <Page ptr onPtrRefresh={this.loadMore.bind(this)}>
                <List mediaList>
                    {this.state.materials.map((material, index) => (
                        <Card className="feed-card"
                            key={index}>
                            <CardHeader className="card-header"
                                className="no-border"
                                valign="bottom"
                                style={{ backgroundImage: "url(" + material.coverUrl + ")" }}
                            >{material.title}</CardHeader>
                            <CardContent>
                                <p className="date">Posted on January 21, 2019</p>
                                <p>{material.description}</p>
                            </CardContent>
                            <CardFooter>
                                <div className="like-num">{material.like} Likes</div>
                                <Link iconF7="ellipsis" href={"/material/" + material.id + "/"} ></Link>
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
            let url = 'http://108.61.221.218:39802/api-fake/user/' + 10 + '/request-feed';
            axios.get(url).then(res => {
                //console.log(res);
                let prevList = materials;
                let newList = res.data;
                newList = newList.concat(prevList);
                self.setState({ materials: newList });
                //console.log(newList);
            });

            done();
        }, 1000)
    }

}

export default Feed;