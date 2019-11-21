import React from 'react';
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
    Icon
} from 'framework7-react';

class ToolBar extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <List inset className="tool-bar">
                <ListItem link="#" title="My Chatrooms">
                    <Icon slot="media" ios="f7:person_2_square_stack"></Icon>
                </ListItem>
                <ListItem link="#" title="Settings">
                    <Icon slot="media" ios="f7:gear"></Icon>
                </ListItem>
                <ListItem link="#" title="Help">
                    <Icon slot="media" ios="f7:question_circle"></Icon>
                </ListItem>
            </List>
        )
    };
}

export default ToolBar;