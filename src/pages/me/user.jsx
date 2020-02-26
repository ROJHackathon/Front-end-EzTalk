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
    Searchbar
} from 'framework7-react';
import TranslateBox from "../../components/translateTab/translate/subComponents/translateBox";
import TranslateTool from "../../components/translateTab/translate/subComponents/translateTool";
import axios from "axios";
import TokenContext from "../../components/tokenContext";

import Cookies from 'js-cookie'

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
        };
    }

    static contextType = TokenContext;

    componentDidMount() {
        let url= "https://ez-talk-api-provider.azurewebsites.net/api/get-user/" + this.context;
        axios.get(url).then((res) => {
            this.setState({userName: res.data.name})
        })

    }

    render() {
        const styles = {
            logOut: {
                fontSize: "16px",
                height: "30px",
                width: "auto",
                /* horizontal margin */
                marginInline: "15px",
                /* top margin */
                marginTop: "50px",

            }
        };

        return(
            <Page>
                <Navbar sliding={false} large>
                    <NavTitle sliding>My Account</NavTitle>
                    <NavTitleLarge>My Account</NavTitleLarge>
                </Navbar>

                <List mediaList>
                    <ListItem
                        link="#"
                        title={this.state.userName}
                        subtitle={this.state.userName === 'admin' ? 'Administrator' : 'Normal User'}>
                        <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="44" />
                    </ListItem>
                </List>

                <BlockTitle>Contacts</BlockTitle>
                <List>
                    <ListItem title="My Friends" link="#"></ListItem>
                </List>


                <BlockTitle>Settings</BlockTitle>
                <List>
                    <ListItem title="Set Email" link="#"></ListItem>
                    <ListItem title="Set Avatar" link="#"></ListItem>
                    <ListItem title="Set Preference" link="#"></ListItem>
                </List>


                <Button fill color="red" style={styles.logOut} onClick={this.handleClick.bind(this)}>Log
                    out</Button>

            </Page>

        );
    }


    handleClick() {
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/logout";
        axios.post(url, {
            token: this.context,
        }).then((res) => {

        });

        Cookies.remove("token");
        window.location.reload();
    }



}