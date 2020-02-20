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

import TokenContext from '../../tokenContext.jsx'

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            materials: [],
        }
    }

    static contextType = TokenContext;


    render() {
        let isVideo = true

        return (
            <Page >
                <List mediaList>
                    {this.props.materials.map((material, index) => (
                        <Card className="feed-card" 
                            key={index}>
                            <CardHeader className="card-header"
                                valign="bottom"
                                style={{ backgroundImage: "url(" + material.coverUrl + ")" }}
                            >{material.title}</CardHeader>
                            <CardContent 
                                className="card-content"
                            >
                                <p className="date">Posted on January 21, 2019</p>
                                <p className="description" style={{textOverflow:"ellipsis"}}>
                                    {this.trimStr(material.description)}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <div className="like-num">{material.love} Likes</div>
                               {isVideo ? <Link iconF7="ellipsis" href={"/video/" + material.id + "/"} /> :  <Link iconF7="ellipsis" href={"/material/" + material.id + "/"} />}
                            </CardFooter>
                        </Card>
                    ))}
                </List>
            </Page>
        );
    }

    trimStr(str){
        if(str == null){
            return "No Description";
        }else if(str.length > 150){
            return str.substring(0, 150) + "...";
        }else{
            return str;
        }
    }
}


export default Feed;