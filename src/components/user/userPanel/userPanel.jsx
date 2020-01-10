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
            <Avatar token={this.props.token}></Avatar>
            <ToolBar tabAvtive={this.props.tabActive}></ToolBar>
            <Button fill color="red" className="log-out-btn" onClick={this.handleClick.bind(this)}>Log out</Button>
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
}

export default UserPanel;