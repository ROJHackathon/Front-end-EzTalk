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


    componentDidMount() {
        //console.log(this.context);
        if(this.context == 0){
            let url = 'https://ez-talk-api-provider.azurewebsites.net/api-fake/request-feed?page=1&token=' + this.context; // 10 is the user id
            axios.get(url).then(res => {
                //console.log(res.data);
                this.setState({
                    materials: res.data,
                });
            });
        }else{
            this.setState({
                material:this.props.material,
            })
        }
    }

    render() {
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
                                <p style={{textOverflow:"ellipsis"}}>
                                    {material.description}
                                </p>
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



}

export default Feed;