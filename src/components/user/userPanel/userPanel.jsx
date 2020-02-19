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
  Button
} from 'framework7-react';

import Cookies from 'js-cookie';

import Avatar from './subComponents/avatar.jsx';
import ToolBar from './subComponents/toolbar.jsx';

import axios from 'axios';
import TokenContext from "../../tokenContext";


class UserPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  static contextType = TokenContext;

  render() {
    return (
      <Panel right reveal themeDark>
        <View>
          <Page className="side-panel">
            <Avatar token={this.props.token}/>
            <ToolBar tabAvtive={this.props.tabActive}/>
            <Button fill color="red" className="log-out-btn" onClick={this.handleClick.bind(this)}>Log out</Button>
            {/*<Button fill color={"green"} className={"log-out-btn"} onClick={this.handleSetCookies.bind(this)}>Set Cookies</Button>*/}
            <Button fill color={"green"} className={"log-out-btn"} onClick={this.handleGetCookies.bind(this)}>Get Cookies</Button>
          </Page>
        </View>
      </Panel>
    )
  };

  handleClick() {
    let url ="https://ez-talk-api-provider.azurewebsites.net/api/logout";
    axios.post(url, {
        token : this.context,
    }).then((res) => {});

    window.location.reload();
  }

  handleSetCookies(){
    let url="https://ez-talk-api-provider.azurewebsites.net/api/hi";  // cookie url
    axios.get(url).then(res => {
    })

  }

  handleGetCookies(){
    console.log(Cookies.get());
  }


}

export default UserPanel;