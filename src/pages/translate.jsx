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
            <Link iconIos="f7:person_crop_circle" iconAurora="f7:person_crop_circle" iconMd="material:menu" panelOpen="right" />
          </NavRight>
          <NavTitleLarge>Translate</NavTitleLarge>
          <Subnavbar inner={false}>
            <Searchbar
              searchContainer=".search-list"  // where does the search happen
              searchIn=".item-title"   // what is the query
              placeholder="Translate Your Sentence"
              clearButton={true}
            ></Searchbar>
          </Subnavbar>
        </Navbar>

      </Page>
    );
  }
}