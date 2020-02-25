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
import FeedSkeleton from '../homeFeed/feedSkeleton'

class SearchResult extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            materials: [],
            isClicked: false,
            effect: "blink",
            isClear:this.props.isClear
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleHistoryA = this.handleHistoryA.bind(this)
        this.handleHistoryB = this.handleHistoryB.bind(this)
        this.handleHistoryC = this.handleHistoryC.bind(this)
        this.handleHistoryD = this.handleHistoryD.bind(this)
        this.handleHistoryE = this.handleHistoryE.bind(this)
    }

    static contextType = TokenContext;


    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.state.isClicked) {
    //         let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
    //         axios.post(url, {
    //             token: this.context,
    //             text: this.props.searchInput,
    //         }).then((res) => {
    //             //console.log(this.props.searchInput);
    //             this.setState({
    //                 materials: res.data,
    //             });

    //         })
    //     }


    // }

    handleClick() {
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
        axios.post(url, {
            token: this.context,
            text: this.props.searchInput,
        }).then((res) => {
            //console.log(this.props.searchInput);
            this.setState({
                materials: res.data,
            });

        })
        this.setState({ isClicked: true })

        if (localStorage.getItem('h5') === null) {
            localStorage.setItem('h5', this.props.searchInput)
            return
        } else if (localStorage.getItem('h4') === null) {
            localStorage.setItem('h4', this.props.searchInput)
            return
        } else if (localStorage.getItem('h3') === null) {
            localStorage.setItem('h3', this.props.searchInput)
            return
        } else if (localStorage.getItem('h2') === null) {
            localStorage.setItem('h2', this.props.searchInput)
            return
        } else if (localStorage.getItem('h1') === null) {
            localStorage.setItem('h1', this.props.searchInput)
            return
        } else {
            localStorage.setItem('h1', localStorage.getItem('h2'))
            localStorage.setItem('h2', localStorage.getItem('h3'))
            localStorage.setItem('h3', localStorage.getItem('h4'))
            localStorage.setItem('h4', localStorage.getItem('h5'))
            localStorage.setItem('h5', this.props.searchInput)
        }
    }

    handleHistoryA(){
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
        axios.post(url, {
            token: this.context,
            text: localStorage.getItem("h5"),
        }).then((res) => {
            //console.log(this.props.searchInput);
            this.setState({
                materials: res.data,
            });

        })
        this.setState({isClicked:true})
        console.log(123)
    }

    handleHistoryB(){
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
        axios.post(url, {
            token: this.context,
            text: localStorage.getItem("h4"),
        }).then((res) => {
            //console.log(this.props.searchInput);
            this.setState({
                materials: res.data,
            });

        })
        this.setState({isClicked:true})
        console.log(123)
    }

    handleHistoryC(){
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
        axios.post(url, {
            token: this.context,
            text: localStorage.getItem("h3"),
        }).then((res) => {
            //console.log(this.props.searchInput);
            this.setState({
                materials: res.data,
            });

        })
        this.setState({isClicked:true})
        console.log(123)
    }

    handleHistoryD(){
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
        axios.post(url, {
            token: this.context,
            text: localStorage.getItem("h2"),
        }).then((res) => {
            //console.log(this.props.searchInput);
            this.setState({
                materials: res.data,
            });

        })
        this.setState({isClicked:true})
        console.log(123)
    }

    handleHistoryE(){
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/search-material";
        axios.post(url, {
            token: this.context,
            text: localStorage.getItem("h1"),
        }).then((res) => {
            //console.log(this.props.searchInput);
            this.setState({
                materials: res.data,
            });

        })
        this.setState({isClicked:true})
        console.log(123)
    }

    




    render() {
        if (this.state.materials.length === 0) {
            return (
                <div>
                    {!this.state.isClicked && !this.state.isClear && <Button onClick={this.handleClick}>Search</Button>}
                    {!this.state.isClicked && !this.state.isClear && <BlockTitle>Search History</BlockTitle>}
                    {!this.state.isClicked && !this.state.isClear && <List>
                        {localStorage.getItem("h5") !== null && <ListButton onClick={this.handleHistoryA}>{localStorage.getItem("h5")}</ListButton>}
                        {localStorage.getItem("h4") !== null && <ListButton onClick={this.handleHistoryB}>{localStorage.getItem("h4")}</ListButton>}
                        {localStorage.getItem("h3") !== null && <ListButton onClick={this.handleHistoryC}>{localStorage.getItem("h3")}</ListButton>}
                        {localStorage.getItem("h2") !== null && <ListButton onClick={this.handleHistoryD}>{localStorage.getItem("h2")}</ListButton>}
                        {localStorage.getItem("h1") !== null && <ListButton onClick={this.handleHistoryE}>{localStorage.getItem("h1")}</ListButton>}
                    </List>}
                    {this.state.isClicked && <List mediaList className="skeleton-text">
                        {[1, 2, 3].map(n => (
                            <Card
                                key={n}
                                className={`skeleton-text skeleton-effect-${this.state.effect}`}
                                title="Card Header"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
                                footer="Card Footer"
                            ></Card>
                        ))}
                    </List>}
                </div>

            )
        } else {
            return (
                <List mediaList >
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
                                <p className="description" style={{ textOverflow: "ellipsis" }}>
                                    {this.trimStr(material.description)}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <div className="like-num">{material.love} Likes</div>
                                {material.mimetype.includes("video") ? <Link iconF7="ellipsis" href={"/video/" + material.id + "/"} /> : <Link iconF7="ellipsis" href={"/material/" + material.id + "/"} />}
                            </CardFooter>
                        </Card>
                    ))}
                </List>
            )
        }
    };

    trimStr(str) {
        if (str == null) {
            return "No Description";
        } else if (str.length > 150) {
            return str.substring(0, 150) + "...";
        } else {
            return str;
        }
    }




}



export default SearchResult