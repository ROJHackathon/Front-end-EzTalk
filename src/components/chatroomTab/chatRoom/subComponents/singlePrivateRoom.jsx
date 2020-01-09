import React, { Component } from 'react'
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
    Toggle,
    Segmented
} from 'framework7-react';

class SinglePrivateRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTag: props.activeId
        }
        

    }
    render() {
        return (
            <ListItem
            title={this.props.name}
            link={"/message/" + this.props.id + "/"}
            subtitle={this.props.content}
            after="5:00"
        >

            </ListItem>
        )
    };

}
export default SinglePrivateRoom