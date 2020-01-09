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
import SingleOfficialRoom from './singleOfficialRoom';
import SinglePrivateRoom from './singlePrivateRoom'

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
                    this.props.officialrooms.map((room, i)=> <SingleOfficialRoom key={room.id} id={room.id} name={room.name} content={room.language} />) :
                    this.props.privaterooms.map((room, i)=> <SinglePrivateRoom key={room.id} id={room.id} name={room.name} content={room.language}/>)
                    }
                </List>
            </div>
        )
    };

}
export default RoomsBase