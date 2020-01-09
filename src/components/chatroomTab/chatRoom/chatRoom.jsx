import React, { Component } from 'react'
import RoomsBase from './subComponents/roomsBase'
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
                <RoomsBase officialrooms={this.props.officialrooms} privaterooms={this.props.privaterooms}/>
            </div>   
        )
    };
}



export default ChatRoom