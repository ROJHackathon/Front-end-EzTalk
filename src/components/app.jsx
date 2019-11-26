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
import UserPanel from '../components/userPanel';
import Login from '../components/login.jsx';


import routes from '../js/routes';

// a context
const tokenContext = React.createContext(0);

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

    }
  }

  render() {
    //console.log(this.state.token);
    return (
      <App params={this.state.f7params} themeDark>

        {/* Login screen */}
        <Login handleLogin={this.handleLogin.bind(this)}></Login>

        {/* Right panel with reveal effect -- for user side panel*/}
        <UserPanel uid={this.state.uid} token={this.state.token}></UserPanel>

        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-translate" iconIos="f7:search" iconAurora="f7:search" iconMd="material:view_list" text="Translate" />
            <Link tabLink="#view-chatroom" iconIos="f7:chat_bubble_2_fill" iconAurora="f7:chat_bubble_2_fill" iconMd="material:settings" text="Chatroom" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/home/"/>

          {/* Catalog View */}
          <View id="view-translate" name="translate" tab url="/translate/" />

          {/* Settings View */}
          <View id="view-chatroom" name="chatroom" tab url="/chatroom/" />

        </Views>


        {/* Popup */}
        {/* <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup> */}

      </App>
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
    this.setState({f7params: {token: val}})
    //console.log(this.state.f7params.token);
  }

}