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
            items: [
                {
                    title: 'Yellow Submarine',
                    author: 'Beatles',
                    cover: 'https://cdn.framework7.io/placeholder/nature-1000x600-1.jpg',
                },
                {
                    title: 'Don\'t Stop Me Now',
                    author: 'Queen',
                    cover: 'https://cdn.framework7.io/placeholder/nature-1000x600-2.jpg',
                },
                {
                    title: 'Billie Jean',
                    author: 'Michael Jackson',
                    cover: 'https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
                },
            ],
            songs: ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'],
            authors: ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'],
        }
    }

    render() {
        return (
            <Page ptr onPtrRefresh={this.loadMore.bind(this)}>
                <Navbar title="Pull To Refresh"></Navbar>
                <List mediaList>
                    {this.state.items.map((item, index) => (
                        // <ListItem
                        //     key={index}
                        //     title={item.title}
                        //     subtitle={item.author}
                        // >
                        //     <img slot="media" src={item.cover} width="44"/>
                        // </ListItem>
                        <Card className="feed-card"
                                key = {index}>
                            <CardHeader className = "card-header"
                                className="no-border"
                                valign="bottom"
                                style= {{backgroundImage: "url(" + item.cover + ")"} }
                            >{item.title}</CardHeader>
                            <CardContent>
                                <p className="date">Posted on January 21, 2015</p>
                                <p>{item.description}</p>
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
            const { items, songs, authors } = self.state;
            const picURL = `https://cdn.framework7.io/placeholder/nature-1000x600-${(Math.floor(Math.random() * 10) + 1)}.jpg`;
            const song = songs[Math.floor(Math.random() * songs.length)];
            const author = authors[Math.floor(Math.random() * authors.length)];
            items.push({
                title: song,
                author,
                cover: picURL,
            });
            self.setState({ items });

            done();
        }, 1000);
    }

}

export default Feed;