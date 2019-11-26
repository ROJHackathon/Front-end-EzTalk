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
            history:"Your search history"
        }
    }


    render() {
        return (
            <Card
                title="Search History"
                content={this.state.history}
            ></Card>
        )
    };


}



export default SearchHistory