import React from 'react';
import ChatRoom from '../../components/chatroomTab/chatRoom/chatRoom'
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

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            officialrooms : [],
            privaterooms : [],
        }
    }

    componentDidMount() {
        let urlOfficial = "https://ez-talk-api-provider.azurewebsites.net/api-fake/official-chatroom-list"

        let urlPrivate = "https://ez-talk-api-provider.azurewebsites.net/api-fake/chatroom-list"

        axios.get(urlOfficial).then((res) => {
            this.setState({
                officialrooms: res.data,
            })
        })

        axios.get(urlPrivate).then((res) => {
            this.setState({
                privaterooms: res.data,
            })
        })
        
    }

    render() {
        //console.log(this.state.officialrooms);
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
                <ChatRoom officialrooms={this.state.officialrooms} privaterooms={this.state.privaterooms}/>

                <Fab position="right-bottom" slot="fixed" color="blue">
                    <Icon f7="plus"></Icon>
                </Fab>

            </Page>
        )
    }
}