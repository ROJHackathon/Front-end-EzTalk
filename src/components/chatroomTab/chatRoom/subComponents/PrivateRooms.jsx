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
    Segmented
} from 'framework7-react';
import axios from "axios";

class PrivateRooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            privateRooms: [],
        }
    }

    componentDidMount() {
        let urlPrivate = "https://ez-talk-api-provider.azurewebsites.net/api-fake/chatroom-list";

        axios.get(urlPrivate).then((res) => {
            this.setState({
                privateRooms: res.data,
            })
        })

    }

    render() {
        return (
            <List mediaList>
                {this.state.privateRooms.map((room, i) =>
                    <ListItem
                        title={room.name}
                        link = {"/message/" + room.id + "/"}
                        subtitle={room.language}
                        after="17:00"
                        text="New message"
                    />)
                }
            </List>
        )
    };

}
export default PrivateRooms