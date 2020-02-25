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

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return(
            <Page>
                <Navbar sliding={false} large>
                    <NavTitle sliding>My Account</NavTitle>
                    <NavTitleLarge>My Account</NavTitleLarge>
                </Navbar>

            </Page>

        );
    }


}