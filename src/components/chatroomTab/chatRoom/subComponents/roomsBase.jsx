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
import OfficialRooms from "./OfficalRooms";
import PrivateRooms from "./PrivateRooms";

class RoomsBase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: "1",
            
        }
        this.handleItemClick = this.handleItemClick.bind(this)

    }
    handleItemClick(e) {
        this.setState({ activeItem: e.target.id })
    }
    render() {
        return (
            <div>
                <Segmented strong tag="p">
                    <button id="1" className={"1" === this.state.activeItem ? "button button-active" : "button"}
                        onClick={this.handleItemClick}>Official</button>
                    <button id="2" className={"2" === this.state.activeItem ? "button button-active" : "button"}
                        onClick={this.handleItemClick}>Private</button>
                </Segmented>



                <List mediaList>
                    {
                    this.state.activeItem === "1" ? 
                    <OfficialRooms/>:
                    <PrivateRooms/>
                    }
                </List>
            </div>
        )
    };

}
export default RoomsBase