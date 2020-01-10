import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    Subnavbar,
    Searchbar,
    Fab,
    Icon,

} from 'framework7-react';
import axios from 'axios'
import RoomsBase from "../../components/chatroomTab/chatRoom/roomsBase";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTag: "1",
        };

        this.handleActiveTag = this.handleActiveTag.bind(this)
    }

    render() {
        console.log(this.state.activeTag);
        return (
            <Page name="chatroom">
                <Navbar sliding={false} large>
                    <NavTitle sliding>Chatroom</NavTitle>
                    <NavRight>
                        <Link iconIos="f7:person_crop_circle" iconAurora="f7:person_crop_circle" iconMd="material:menu" panelOpen="right" />
                    </NavRight>
                    <NavTitleLarge>Chatroom</NavTitleLarge>
                    <Subnavbar inner={false}>
                        <Searchbar
                            searchContainer= {this.state.activeTag === "1" ? ".search-list-official-room" : ".search-list-private-room"}  // where does the search happen
                            searchItem="li"
                            searchIn=".item-title"   // what is the query
                            placeholder="Search Chatroom"
                            clearButton={true}
                        />
                    </Subnavbar>
                </Navbar>
                <RoomsBase handleActiveTag={this.handleActiveTag}/>
                <Fab position="right-bottom" slot="fixed" color="blue" href="/create-chat/">
                    <Icon f7="plus"/>
                </Fab>

            </Page>
        )
    }


    handleActiveTag(state){
        this.setState({
            activeTag : state,
        })
    }
}