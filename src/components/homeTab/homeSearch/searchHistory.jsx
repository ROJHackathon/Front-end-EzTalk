import React, { Component } from 'react'
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
    Toggle,
    Card
} from 'framework7-react';

class SearchHistory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    render() {
        
        return (
            <List>
                {localStorage.getItem("h5") !== null && <ListItem>{localStorage.getItem("h5")}</ListItem>}
                {localStorage.getItem("h4") !== null && <ListItem>{localStorage.getItem("h4")}</ListItem>}
                {localStorage.getItem("h3") !== null && <ListItem>{localStorage.getItem("h3")}</ListItem>}
                {localStorage.getItem("h2") !== null && <ListItem>{localStorage.getItem("h2")}</ListItem>}
                {localStorage.getItem("h1") !== null && <ListItem>{localStorage.getItem("h1")}</ListItem>}
            </List>
        )
    };


}



export default SearchHistory