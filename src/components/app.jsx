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


import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'EzTalk', // App name
        theme: 'auto', // Automatic theme detection
        // App root data
        data: function () {
          return {
            user: {
              firstName: 'John',
              lastName: 'Doe',
            },
            // Demo products for Catalog section
            products: [
              {
                id: '1',
                title: 'Apple iPhone 8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
              },
              {
                id: '2',
                title: 'Apple iPhone 8 Plus',
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
              },
              {
                id: '3',
                title: 'Apple iPhone X',
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },
            ]
          };
        },

        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: '/service-worker.js',
        },
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } themeDark>

        {/* Right panel with reveal effect -- for user side panel*/}
        <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Right Panel"/>
              <Block>Right panel content goes here</Block>
            </Page>
          </View>
        </Panel>

        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-translate" iconIos="f7:search" iconAurora="f7:search" iconMd="material:view_list" text="Translate" />
            <Link tabLink="#view-chatroom" iconIos="f7:chat_bubble_2_fill" iconAurora="f7:chat_bubble_2_fill" iconMd="material:settings" text="Chatroom" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/home/" />

          {/* Catalog View */}
          <View id="view-translate" name="translate" tab url="/translate/" />

          {/* Settings View */}
          <View id="view-chatroom" name="chatroom" tab url="/chatroom/" />

        </Views>


        {/* Popup */}
        <Popup id="my-popup">
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
        </Popup>

        <LoginScreen id="my-login-screen">
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <List form>
                <ListInput
                  type="text"
                  name="username"
                  placeholder="Your username"
                  value={this.state.username}
                  onInput={(e) => this.setState({username: e.target.value})}
                ></ListInput>
                <ListInput
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.state.password}
                  onInput={(e) => this.setState({password: e.target.value})}
                ></ListInput>
              </List>
              <List>
                <ListButton title="Sign In" loginScreenClose onClick={() => this.alertLoginData()} />
                <BlockFooter>
                  Some text about login information.<br />Click "Sign In" to close Login Screen
                </BlockFooter>
              </List>
            </Page>
          </View>
        </LoginScreen>
      </App>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password);
  }
  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}