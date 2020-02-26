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

        let urlOfficial = "https://ez-talk-api-provider.azurewebsites.net/api/chatroom-list"
        axios.get(urlOfficial).then((res) => {
            this.setState({
                officialRooms: res.data,
            })
        })

        
    }

    componentDidMount() {
        
    }

    render() {
        // console.log(this.state.officialRooms)
        return (
                <List mediaList className="search-list-official-room">
                    {this.state.officialRooms.map((room, i) =>
                        <ListItem
                            key={i}
                            title={room.name}
                            link={"/message/" + room.id + "/"}
                            subtitle={room.language}
                            after={room.lastUpdated === null ? "" : room.lastUpdated.slice(5, 10) + " " + room.lastUpdated.slice(11, 16) }
                            //after={room.lastUpdated}
                            text="New message"
                        />
                    )
                    }
                </List>
        )
    };

}

export default OfficialRooms