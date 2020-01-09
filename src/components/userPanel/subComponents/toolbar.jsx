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
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            // <List inset className="tool-bar">
            //     <ListItem link="#" title="My Chatrooms">
            //         <Icon slot="media" ios="f7:person_2_square_stack"></Icon>
            //     </ListItem>
            //     <ListItem title="Settings" >
            //         <a href="/settings/" data-view="#view-home" className="panel-close">
            //             <Icon slot="media" f7="arrow_right"></Icon>
            //         </a>
            //     </ListItem>
            //     <ListItem link="#" title="Help">
            //         <Icon slot="media" ios="f7:question_circle"></Icon>
            //     </ListItem>


            // </List>

            <div className="list inset">
                <ul>
                    <li>
                        <a href="#" className="item-link item-content">
                            <div className="item-media">
                                <i className="icon f7-icons">person_2_square_stack</i>
                            </div>
                            <div className="item-inner">
                                <div className="item-title">My Chatrooms</div>
                            </div>

                        </a>
                    </li>
                    <li>
                        <a href="/settings/" data-view={"#" + this.props.tabAvtive} className="panel-close item-link item-content">
                            <div className="item-media">
                                <i className="icon f7-icons">gear</i>
                            </div>
                            <div className="item-inner">
                                <div className="item-title">Settings</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="item-link item-content">
                            <div className="item-media">
                                <i className="icon f7-icons">question_circle</i>
                            </div>
                            <div className="item-inner">
                                <div className="item-title">Help</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    };
}

export default ToolBar;