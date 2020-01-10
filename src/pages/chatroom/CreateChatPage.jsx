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
    ListInput,
    Row,
    Col,
    Button,
    Subnavbar,
    Searchbar,
    Fab,
    Icon,

} from 'framework7-react';
import axios from 'axios';

export default class Material extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    };

    render() {
        return (
            <Page>
                <Navbar title="Create Your Chat Room" backLink="Back" />

                <List noHairlinesMd inset>
                    <ListInput
                        label="Name"
                        floatingLabel
                        type="text"
                        placeholder="Your name"
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>

                    <ListInput
                        label="Password"
                        floatingLabel
                        type="password"
                        placeholder="Your password"
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>

                    <ListInput
                        label="E-mail"
                        floatingLabel
                        type="email"
                        placeholder="Your e-mail"
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>

                    <ListInput
                        label="URL"
                        floatingLabel
                        type="url"
                        placeholder="URL"
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>

                    <ListInput
                        label="Phone"
                        floatingLabel
                        type="tel"
                        placeholder="Your phone number"
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>

                    <ListInput
                        label="Resizable"
                        floatingLabel
                        type="textarea"
                        resizable
                        placeholder="Bio"
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>
                </List>


            </Page>
        );
    };
}