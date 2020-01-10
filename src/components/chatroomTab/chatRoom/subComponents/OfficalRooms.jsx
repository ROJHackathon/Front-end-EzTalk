import React, {Component} from 'react'
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

class OfficialRooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            officialRooms: [],
        }
    }

    componentDidMount() {
        let urlOfficial = "https://ez-talk-api-provider.azurewebsites.net/api-fake/official-chatroom-list"
        axios.get(urlOfficial).then((res) => {
            this.setState({
                officialRooms: res.data,
            })
        })
    }

    render() {
        return (
                <List mediaList className="search-list-official-room">
                    {this.state.officialRooms.map((room, i) =>
                        <ListItem
                            key={i}
                            title={room.name}
                            link={"/message/" + room.id + "/"}
                            subtitle={room.language}
                            after="17:00"
                            text="New message"
                        />
                    )
                    }
                </List>
        )
    };

}

export default OfficialRooms