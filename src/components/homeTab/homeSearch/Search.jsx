import React, { Component } from 'react'
import Pophis from './popular-history-combined'
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
    Toggle
} from 'framework7-react';
import SearchResult from "./SearchResult";
import axios from "axios";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        //console.log(this.props.searchInput);
        return (
            <Page>
                
                <SearchResult searchInput={this.props.searchInput} isClear={this.props.isClear}/>

            </Page>

        )
    };


}



export default Search