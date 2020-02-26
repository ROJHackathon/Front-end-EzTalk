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
import SearchChat from "../../components/chatroomTab/searchChat/SearchChat";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTag: "1",
            onSearch: false,
            searchStr: "",
        };

        this.handleActiveTag = this.handleActiveTag.bind(this)
        this.handleEnableSearch = this.handleEnableSearch.bind(this)
        this.handleDisableSearch = this.handleDisableSearch.bind(this)
    }

    render() {
        //console.log(this.state.activeTag);
        //console.log(this.state.onSearch)
        return (
            <Page name="chatroom">
                <Navbar sliding={false} large>
                    <NavTitle sliding>Chatroom</NavTitle>
                    {/* <NavRight>
                        <Link iconIos="f7:person_crop_circle" iconAurora="f7:person_crop_circle" iconMd="material:menu" panelOpen="right" />
                    </NavRight> */}
                    <NavTitleLarge>Social</NavTitleLarge>
                    <Subnavbar inner={false}>
                        <Searchbar
                            searchContainer= {this.state.activeTag === "1" ? ".search-list-official-room" : ".search-list-private-room"}  // where does the search happen
                            searchIn=".item-title"   // what is the query
                            placeholder="Search Chatroom"
                            clearButton={true}
                            onSearchbarEnable={this.handleEnableSearch}
                            onSearchbarDisable={this.handleDisableSearch}
                            onInput={(e)=> {this.setState({searchStr:e.target.value})}}
                        />
                    </Subnavbar>
                </Navbar>

                {!this.state.onSearch ?  <RoomsBase handleActiveTag={this.handleActiveTag}/> : <SearchChat searchStr={this.state.searchStr}/>}

                <Fab position="right-bottom" slot="fixed" color="blue" href="/create-chat/">
                    <Icon f7="plus"/>
                </Fab>

            </Page>
        )
    }


    handleEnableSearch() {
        this.setState(
            {
                onSearch: true
            }
        )
    }

    handleDisableSearch() {
        this.setState(
            {
                onSearch: false
            }
        )
    }


    handleActiveTag(state){
        this.setState({
            activeTag : state,
        })
    }
}