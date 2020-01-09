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

//self-defined component
import Feed from '../../components/homeTab/homeFeed/feed.jsx';
import Search from '../../components/homeTab/homeSearch/Search'

//context
import TokenContext from '../../components/tokenContext.jsx'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      onSearch: false,
    }
    this.enableSearch = this.enableSearch.bind(this)
    this.disableSearch = this.disableSearch.bind(this)
  }

  static contextType = TokenContext;

  enableSearch() {
    this.setState(
      {
        onSearch:true
      }
    )
  }

  disableSearch() {
    this.setState(
      {
        onSearch:false
      }
    )

  }

  render() {
    //console.log(this.context);
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
              onSearchbarEnable={this.enableSearch}
              onSearchbarDisable={this.disableSearch}
            ></Searchbar>
          </Subnavbar>
        </Navbar>

        {!this.state.onSearch ? <Feed token={this.context}/> : <Search/>}


      </Page>
    )
  };
}