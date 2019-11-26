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
      // loginScreenOpened: true,

      //avtive tab
      tabActive:"view-home"
    }

    this.tabShowHomeHandler = this.tabShowHomeHandler.bind(this)
    this.tabShowTranslateHandler = this.tabShowTranslateHandler.bind(this)
    this.tabShowChatHandler = this.tabShowChatHandler.bind(this)
  }

  tabShowHomeHandler(e){
    this.setState(
      {
        tabActive:"view-home"
      }
    )
  }

  tabShowTranslateHandler(e){
    this.setState(
      {
        tabActive:"view-translate"
      }
    )
  }
  
  tabShowChatHandler(e){
    this.setState(
      {
        tabActive:"view-chatroom"
      }
    )
  }
  render() {
    return (
      <App params={ this.state.f7params } themeDark>

        {/* Login screen */}
        <Login></Login>

        {/* Right panel with reveal effect -- for user side panel*/}
        <UserPanel tabActive={this.state.tabActive}></UserPanel>

        {/* Views/Tabs container */}
        <Views tabs className="safe-areas" >
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-translate" iconIos="f7:search" iconAurora="f7:search" iconMd="material:view_list" text="Translate" />
            <Link tabLink="#view-chatroom" iconIos="f7:chat_bubble_2_fill" iconAurora="f7:chat_bubble_2_fill" iconMd="material:settings" text="Chatroom" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/home/" onTabShow={this.tabShowHomeHandler}/>

          {/* Catalog View */}
          <View id="view-translate" name="translate" tab url="/translate/" onTabShow={this.tabShowTranslateHandler}/>

          {/* Settings View */}
          <View id="view-chatroom" name="chatroom" tab url="/chatroom/" onTabShow={this.tabShowChatHandler}/>

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
}