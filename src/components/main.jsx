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
    BlockFooter
} from 'framework7-react';
import UserPanel from "./user/userPanel/userPanel";


class Main extends React.Component{
    constructor(){
        super();

        this.state={
            token: 0,
            tabActive: "view-home",
        };

        this.tabShowHomeHandler = this.tabShowHomeHandler.bind(this);
        this.tabShowTranslateHandler = this.tabShowTranslateHandler.bind(this);
        this.tabShowChatHandler = this.tabShowChatHandler.bind(this);
    }

    tabShowHomeHandler(e) {
        this.setState(
            {
                tabActive: "view-home"
            }
        )
    }

    tabShowTranslateHandler(e) {
        this.setState(
            {
                tabActive: "view-translate"
            }
        )
    }

    tabShowChatHandler(e) {
        this.setState(
            {
                tabActive: "view-chatroom"
            }
        )
    }

    render() {
        return(
            <Views tabs className="safe-areas">
                {/* Right panel with reveal effect -- for user side panel*/}
                {/*<UserPanel*/}
                {/*    token={this.props.token}*/}
                {/*    tabActive={this.state.tabActive}*/}
                {/*/>*/}

                {/* Tabbar for switching views-tabs */}
                <Toolbar tabbar labels bottom>
                    <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
                    <Link tabLink="#view-translate" iconIos="f7:search" iconAurora="f7:search" iconMd="material:view_list" text="Translate" />
                    <Link tabLink="#view-chatroom" iconIos="f7:chat_bubble_2_fill" iconAurora="f7:chat_bubble_2_fill" iconMd="material:settings" text="Chatroom" />
                    <Link tabLink="#view-user" iconIos={"f7:person_crop_circle"} text={"Me"} />
                </Toolbar>

                {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
                <View id="view-home" tab tabActive url="/home/" onTabShow={this.tabShowHomeHandler} />

                {/* Catalog View */}
                <View id="view-translate" name="translate" tab url="/translate/" onTabShow={this.tabShowTranslateHandler} />

                {/* Settings View */}
                <View id="view-chatroom" name="chatroom" tab url="/chatroom/" onTabShow={this.tabShowChatHandler} />

                {/*User View*/}
                <View id="view-user" name="user" tab url="/me/" />

            </Views>
        );
    }

}

export default Main;