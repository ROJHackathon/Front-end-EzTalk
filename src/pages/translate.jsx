import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {}
  }
  render() {
    return (
      <Page name="translate">
        <Navbar sliding={false} large>
          <NavTitle sliding>Translate</NavTitle>
          <NavRight>
            <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
          </NavRight>
          <NavTitleLarge>Translate</NavTitleLarge>
        </Navbar>

      </Page>
    );
  }
}