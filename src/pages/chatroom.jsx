import React from 'react';
import Core from '../components/chatroom/core'
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
    Searchbar
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
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
                            searchContainer=".search-list"  // where does the search happen
                            searchIn=".item-title"   // what is the query
                            placeholder="Search Chatroom"
                            clearButton={true}
                        ></Searchbar>
                    </Subnavbar>
                </Navbar>
                <Core/>






            </Page>
        )
    }
}