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
          <Page className="side-panel">
            <Avatar></Avatar>
            <ToolBar></ToolBar>
            <Button fill color="red" className="log-out">Log out</Button>
          </Page>
        </View>
      </Panel>
    )
  };
}

export default UserPanel;