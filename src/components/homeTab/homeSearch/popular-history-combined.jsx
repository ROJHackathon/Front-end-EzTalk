import React, { Component } from 'react'
import SearchHistory from './searchHistory'
import PopularTopic from './popularTopic'
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

class Pophis extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
        return (
            <Page>
                <PopularTopic/>

            </Page>

        )
    };


}



export default Pophis