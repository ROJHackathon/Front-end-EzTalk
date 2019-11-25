import React from 'react';
import TranslateTool from '../components/translateTool'
import translateBox from '../components/translateBox'
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
import TranslateBox from '../components/translateBox';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      isDisplay:false,
      result: "Hello World!"
    }

    this.enableBox = this.enableBox.bind(this)
    this.disableBox = this.disableBox.bind(this)
  }

  enableBox(){
    this.setState(
      {isDisplay:true}
    )
  }

  disableBox(){
    this.setState(
      {isDisplay:false}
    )
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
              onSearchbarEnable={this.enableBox}
              onSearchbarDisable={this.disableBox}
            ></Searchbar>
          </Subnavbar>
        </Navbar>
        <TranslateBox isDisplay={this.state.isDisplay} result={this.state.result}/>

        
        <TranslateTool/>


      </Page>
    );
  }
}