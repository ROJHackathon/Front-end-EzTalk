import React, { Component } from 'react'
import tagOfficial from './tagOfficial'
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
import TagOfficial from './tagOfficial';
import TagPrivate from './tagPrivate'

class Tag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: "1",
        }
        this.handleItemClick = this.handleItemClick.bind(this)

    }
    handleItemClick(e) {
        this.setState({ activeItem: e.target.id })
        console.log(e.target)
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

                {this.state.activeItem === "1" ? <TagOfficial/> : <TagPrivate/>}




            </div>
        )
    };

}
export default Tag