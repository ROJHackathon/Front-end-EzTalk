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

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={false} large>
      <NavTitle sliding>Home</NavTitle>
      <NavRight>
        <Link iconIos="f7:person_crop_circle" iconAurora="f7:person_crop_circle" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Home</NavTitleLarge>
    </Navbar>

    {/* Page content */}

  </Page>
);