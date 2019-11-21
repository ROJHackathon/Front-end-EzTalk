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

import Avatar from './userPanel/avatar.jsx';
import ToolBar from './userPanel/toolbar.jsx';


class UserPanel extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <Panel right reveal themeDark>
        <View>
          <Page>
            <Avatar></Avatar>
            <ToolBar></ToolBar>
          </Page>
        </View>
      </Panel>
    )
  };
}

export default UserPanel;