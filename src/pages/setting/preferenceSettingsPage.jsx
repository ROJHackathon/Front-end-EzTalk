import React from 'react';
import Preference from '../../components/user/settings/preference'
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


class preferenceSettingsPage extends React.Component {

  constructor() {
    super()
    this.state = {
    }

  }


  render() {
    return (
      <Page name="preferenceSettings">
          <Navbar  title="Preference" backLink="Back" sliding={false} />
          <Preference/>
      </Page>

    )



  }

}
export default preferenceSettingsPage