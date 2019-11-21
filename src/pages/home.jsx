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
  Button,
  Subnavbar,
  Searchbar
} from 'framework7-react';

export default class extends React.Component {

  render() {
    return (
      <Page name="home">
        {/* Top Navbar */}
        <Navbar sliding={false} large>
          <NavTitle sliding>Home</NavTitle>
          <NavRight>
            <Link iconIos="f7:person_crop_circle" iconAurora="f7:person_crop_circle" iconMd="material:menu" panelOpen="right" />
          </NavRight>
          <NavTitleLarge>Home</NavTitleLarge>
          <Subnavbar inner={false}>
            <Searchbar
              searchContainer=".search-list"  // where does the search happen
              searchIn=".item-title"   // what is the query
              placeholder="Search Materials"
              clearButton={true}
            ></Searchbar>
          </Subnavbar>
        </Navbar>

        {/* Page content */}

      </Page>
    )
  };
}