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

export default class CreateChatPage extends React.Component {

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

                <BlockTitle large>Chat Room Info</BlockTitle>
                <Block>
                    <p> This page will only a create private chat room, which cannot be accessed without permission.
                        Public chat room cannot be created by the administrator.
                    </p>
                </Block>

                    <List noHairlinesMd inset>
                        <ListInput
                            label="Name"
                            floatingLabel
                            type="text"
                            placeholder="Chat Room Name"
                            clearButton
                            info="Make a nice name for your chat room"
                            required
                            validate
                        >
                        </ListInput>

                        <ListInput
                            label="Language"
                            type="select"
                            defaultValue="English"
                            placeholder="Please choose..."
                        >
                            <option value="Arabic">Arabic</option>
                            <option value="Chinese">Chinese</option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                            <option value="Spanish">Spanish</option>
                        </ListInput>

                        <ListInput
                            label="Description"
                            floatingLabel
                            type="textarea"
                            resizable
                            placeholder="Bio"
                        >
                        </ListInput>
                    </List>

                <Button raised fill round className="create-chat-btn">Create</Button>

            </Page>
        );
    };
}