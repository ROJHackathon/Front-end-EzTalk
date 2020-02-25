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

        };
    }

    static contextType = TokenContext;


    render() {
        return(
            <Page>
                <Navbar sliding={false} large>
                    <NavTitle sliding>My Account</NavTitle>
                    <NavTitleLarge>My Account</NavTitleLarge>
                </Navbar>

                <Button fill color="red" className="log-out-btn" onClick={this.handleClick.bind(this)}>Log
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