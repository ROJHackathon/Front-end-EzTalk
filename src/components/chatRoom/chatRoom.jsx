import React, { Component } from 'react'
import Tag from './subComponents/tag'
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
    Toggle
} from 'framework7-react';

class ChatRoom extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Tag officialrooms={this.props.officialrooms} privaterooms={this.props.privaterooms}/>
            </div>   
        )
    };
}



export default ChatRoom