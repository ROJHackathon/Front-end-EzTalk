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

class PopularTopic extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content:"content here"
        }
    }


    render() {
        return (
            <Card
                title="Top 10"
                content={this.state.content}
            ></Card>
        )
    };


}

export default PopularTopic