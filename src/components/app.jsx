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


//Self-defined component
import UserPanel from './user/userPanel/userPanel';
import Login from './login/login.jsx';


import routes from '../js/routes';

// Context 
import TokenContext from './tokenContext.jsx'

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'EzTalk', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: '/service-worker.js',
        },
        token: 0,

        data: function () {
          return {
            token: this.token,
          };
        },
      },

      // User data
      uid: 0, // test only
      token: 0,


      //avtive tab
      tabActive: "view-home"
    }

    this.tabShowHomeHandler = this.tabShowHomeHandler.bind(this)
    this.tabShowTranslateHandler = this.tabShowTranslateHandler.bind(this)
    this.tabShowChatHandler = this.tabShowChatHandler.bind(this)
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
    //console.log(this.state.token);
    return (
      <TokenContext.Provider value={this.state.token}>
        <App params={this.state.f7params} themeDark>

          {/* Login screen */}
          <Login handleLogin={this.handleLogin.bind(this)}></Login>

          {/* Right panel with reveal effect -- for user side panel*/}
          <UserPanel
            uid={this.state.uid}
            token={this.state.token}
            tabActive={this.state.tabActive}
          ></UserPanel>

          {/* Views/Tabs container */}
          <Views tabs className="safe-areas">
            {/* Tabbar for switching views-tabs */}
            <Toolbar tabbar labels bottom>
              <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
              <Link tabLink="#view-translate" iconIos="f7:search" iconAurora="f7:search" iconMd="material:view_list" text="Translate" />
              <Link tabLink="#view-chatroom" iconIos="f7:chat_bubble_2_fill" iconAurora="f7:chat_bubble_2_fill" iconMd="material:settings" text="Chatroom" />
            </Toolbar>

            {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
            <View id="view-home" main tab tabActive url="/home/" onTabShow={this.tabShowHomeHandler} />

            {/* Catalog View */}
            <View id="view-translate" name="translate" tab url="/translate/" onTabShow={this.tabShowTranslateHandler} />

            {/* Settings View */}
            <View id="view-chatroom" name="chatroom" tab url="/chatroom/" onTabShow={this.tabShowChatHandler} />


          </Views>
        </App>
      </TokenContext.Provider>
    )
  }
  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }

  handleLogin(val) {
    this.setState({ token: val })
    //console.log(this.state.f7params.token);
    //console.log(this.state.f7params.token);
  }

}