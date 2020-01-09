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
import axios from "axios";

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


  loadMore(done) {
    const self = this;
    if (!this.state.onSearch){
      console.log("hello")
      setTimeout(() => {
        const { materials, page } = self.state;
        let url = 'https://ez-talk-api-provider.azurewebsites.net/api-fake/request-feed?page=' + this.state.page + '&token=' + this.context;;
        axios.get(url).then(res => {
          //console.log(res);
          let prevList = materials;
          let newList = res.data;
          newList = newList.concat(prevList);
          self.setState({
            materials: newList,
            page: page+1,
          });
          //console.log(this.state.page);
        });
        done();
      }, 1000)
    }
  }

  render() {
    //console.log(this.context);
    return (
      <Page name="home" ptr onPtrRefresh={this.loadMore.bind(this)}>
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

        {!this.state.onSearch ? <Feed/> : <Search/>}


      </Page>
    )
  };
}