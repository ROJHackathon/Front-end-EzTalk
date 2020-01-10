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

class SearchChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            privateRooms: [],
            officialRooms: [],
        }
    }

    componentDidMount() {
        let urlPrivate = "https://ez-talk-api-provider.azurewebsites.net/api-fake/chatroom-list";

        axios.get(urlPrivate).then((res) => {
            this.setState({
                privateRooms: res.data,
            })
        })

        let urlOfficial = "https://ez-talk-api-provider.azurewebsites.net/api-fake/official-chatroom-list"
        axios.get(urlOfficial).then((res) => {
            this.setState({
                officialRooms: res.data,
            })
        })

    }

    render() {
        const searchStr = this.props.searchStr;
        const allList = this.state.privateRooms.concat(this.state.officialRooms);

        const filteredList = allList.filter(room => {
            return room.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
        });

        return (
            <List mediaList>
                {filteredList.map((room, i) =>
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

export default SearchChat