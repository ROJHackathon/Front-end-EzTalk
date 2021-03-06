import React, {Component} from 'react'
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
import OfficialRooms from "./subComponents/OfficalRooms";
import PrivateRooms from "./subComponents/PrivateRooms";

class RoomsBase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: "1",
        }
        this.handleItemClick = this.handleItemClick.bind(this)

    }

    handleItemClick(e) {
        this.setState({activeItem: e.target.id});
        this.props.handleActiveTag(e.target.id);
    }

    render() {
        return (
            <div>
                <Segmented strong tag="p">
                    <button id="1" className={"1" === this.state.activeItem ? "button button-active" : "button"}
                            onClick={this.handleItemClick}>Study Group
                    </button>
                    <button id="2" className={"2" === this.state.activeItem ? "button button-active" : "button"}
                            onClick={this.handleItemClick}>Chats
                    </button>
                </Segmented>

                {
                    this.state.activeItem === "1" ?
                        <OfficialRooms/> :
                        <PrivateRooms/>
                }
            </div>
        )
    };

}

export default RoomsBase