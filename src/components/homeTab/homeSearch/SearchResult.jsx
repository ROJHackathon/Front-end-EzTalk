import React, { Component } from 'react'
import Pophis from './popular-history-combined'
import {
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter,
    Button,
    Icon,
    Toggle, Card, CardHeader, CardContent, CardFooter
} from 'framework7-react';
import axios from "axios";
import TokenContext from "../../tokenContext";

class SearchResult extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            materials: [],
        }
    }

    static contextType = TokenContext;


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.searchInput !== prevProps.searchInput){
            let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
            axios.post(url, {
                token: this.context,
                text: this.props.searchInput,
            }).then((res) => {
                //console.log(this.props.searchInput);
                this.setState({
                    materials : res.data,
                });
                //console.log(res.data)
            })
        }
    }

    render() {
        return (
            <List mediaList>
                {this.state.materials.map((material, index) => (
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
                            <Link iconF7="ellipsis" href={"/material/" + material.id + "/"} />
                        </CardFooter>
                    </Card>
                ))}
            </List>
        )
    };

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



export default SearchResult