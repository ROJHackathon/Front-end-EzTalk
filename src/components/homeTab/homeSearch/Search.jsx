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

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    

    render() {
        return (
            <Page>
                {this.props.searchInput.length > 0 ?<h1>he</h1> : <Pophis/>}

            </Page>
            
        )
    };


}



export default Search