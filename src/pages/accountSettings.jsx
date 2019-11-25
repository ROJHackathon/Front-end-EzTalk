import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block,
  Subnavbar,
  Searchbar,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link
} from 'framework7-react';


class accountSettings extends React.Component {

  constructor() {
    super()
    this.state = {
        
    }

  }


  render() {
    return (
      <Page name="preferenceSettings">
          <Navbar  title="Account" backLink="Back" sliding={false} />        
      </Page>

    )



  }

}
export default accountSettings