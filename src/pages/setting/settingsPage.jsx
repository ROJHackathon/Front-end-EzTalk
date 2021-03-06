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


class Setting extends React.Component {

  constructor() {
    super()
    this.state = {


    }

  }


  render() {
    return (
      <Page name="settings">
        <Navbar sliding={false} backLink="Back" large >
          < NavTitle sliding>Settings</NavTitle>
          <NavTitleLarge>Settings</NavTitleLarge>
        </Navbar>

        <BlockTitle>Simple Settings</BlockTitle>
        <List>
          <ListItem title="Preference" href="/settings/preference"></ListItem>
          <ListItem title="Account" href="/settings/accountSetting"></ListItem>
        </List>



        <BlockTitle>Tool</BlockTitle>
        <List>
          <ListItem title="Login Page" link="/test-login-page/"></ListItem>
          <ListItem title="Tool1" link="#"></ListItem>
        </List>

        <BlockTitle>Test</BlockTitle>
        <List>
          <ListItem title="setting1" link="#"></ListItem>
          <ListItem title="setting2" link="#"></ListItem>
        </List>

        <BlockTitle>Test</BlockTitle>
        <List>
          <ListItem title="setting1" link="#"></ListItem>
          <ListItem title="setting2" link="#"></ListItem>
        </List>

        <BlockTitle>Test</BlockTitle>
        <List>
          <ListItem title="setting1" link="#"></ListItem>
          <ListItem title="setting2" link="#"></ListItem>
        </List>

        <BlockTitle>Test</BlockTitle>
        <List>
          <ListItem title="setting1" link="#"></ListItem>
          <ListItem title="setting2" link="#"></ListItem>
        </List>

        <BlockTitle>Test</BlockTitle>
        <List>
          <ListItem title="setting1" link="#"></ListItem>
          <ListItem title="setting2" link="#"></ListItem>
        </List>

        

        

      </Page>

    )



  }









}
export default Setting





// export default () => (
//   <Page name="settings">
//     <Navbar sliding={false} backLink="Back" large >
//       < NavTitle sliding>Settings</NavTitle>
//       <NavTitleLarge>Settings</NavTitleLarge>
//     </Navbar>

//     <Preference/>



//     <BlockTitle>Account</BlockTitle>
//     <List>
//       <ListItem title="Link 1" link="#"></ListItem>
//     </List>



//     <BlockTitle>Form Example</BlockTitle>
//     <List noHairlinesMd>
//       <ListInput
//         label="Name"
//         type="text"
//         placeholder="Your name"
//       ></ListInput>

//       <ListInput
//         label="E-mail"
//         type="email"
//         placeholder="E-mail"
//       ></ListInput>

//       <ListInput
//         label="URL"
//         type="url"
//         placeholder="URL"
//       ></ListInput>

//       <ListInput
//         label="Password"
//         type="password"
//         placeholder="Password"
//       ></ListInput>

//       <ListInput
//         label="Phone"
//         type="tel"
//         placeholder="Phone"
//       ></ListInput>

//       <ListInput
//         label="Gender"
//         type="select"
//       >
//         <option>Male</option>
//         <option>Female</option>
//       </ListInput>

//       <ListInput
//         label="Birth date"
//         type="date"
//         placeholder="Birth day"
//         defaultValue="2014-04-30"
//       ></ListInput>

//       <ListItem
//         title="Toggle"
//       >
//         <Toggle slot="after" />
//       </ListItem>

//       <ListInput
//         label="Range"
//         input={false}
//       >
//         <Range slot="input" value={50} min={0} max={100} step={1} />
//       </ListInput>

//       <ListInput
//         type="textarea"
//         label="Textarea"
//         placeholder="Bio"
//       ></ListInput>
//       <ListInput
//         type="textarea"
//         label="Resizable"
//         placeholder="Bio"
//         resizable
//       ></ListInput>
//     </List>

//     <BlockTitle>Buttons</BlockTitle>
//     <Block strong>
//       <Row tag="p">
//         <Button className="col">Button</Button>
//         <Button className="col" fill>Fill</Button>
//       </Row>
//       <Row tag="p">
//         <Button className="col" raised>Raised</Button>
//         <Button className="col" raised fill>Raised Fill</Button>
//       </Row>
//       <Row tag="p">
//         <Button className="col" round>Round</Button>
//         <Button className="col" round fill>Round Fill</Button>
//       </Row>
//       <Row tag="p">
//         <Button className="col" outline>Outline</Button>
//         <Button className="col" round outline>Outline Round</Button>
//       </Row>
//       <Row tag="p">
//         <Button className="col" small outline>Small</Button>
//         <Button className="col" small round outline>Small Round</Button>
//       </Row>
//       <Row tag="p">
//         <Button className="col" small fill>Small</Button>
//         <Button className="col" small round fill>Small Round</Button>
//       </Row>
//       <Row tag="p">
//         <Button className="col" large raised>Large</Button>
//         <Button className="col" large fill raised>Large Fill</Button>
//       </Row>
//       <Row tag="p">
//         <Button className="col" large fill raised color="red">Large Red</Button>
//         <Button className="col" large fill raised color="green">Large Green</Button>
//       </Row>
//     </Block>

//     <BlockTitle>Checkbox group</BlockTitle>
//     <List>
//       <ListItem
//         checkbox
//         name="my-checkbox"
//         value="Books"
//         title="Books"
//       ></ListItem>
//       <ListItem
//         checkbox
//         name="my-checkbox"
//         value="Movies"
//         title="Movies"
//       ></ListItem>
//       <ListItem
//         checkbox
//         name="my-checkbox"
//         value="Food"
//         title="Food"
//       ></ListItem>
//     </List>

//     <BlockTitle>Radio buttons group</BlockTitle>
//     <List>
//       <ListItem
//         radio
//         name="radio"
//         value="Books"
//         title="Books"
//       ></ListItem>
//       <ListItem
//         radio
//         name="radio"
//         value="Movies"
//         title="Movies"
//       ></ListItem>
//       <ListItem
//         radio
//         name="radio"
//         value="Food"
//         title="Food"
//       ></ListItem>
//     </List>
//   </Page>
// );