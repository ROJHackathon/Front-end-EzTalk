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
            name: "",
            language:"English",
            description: "",
        }
    }

    componentDidMount() {
    };

    render() {
        //console.log(this.state);
        return (
            <Page>
                <Navbar title="Create Your Chat Room" backLink="Back" />

                <BlockTitle large>Chat Room Info</BlockTitle>
                <Block>
                    <p> This page will only a create private chat room, which cannot be accessed without permission.
                        Public chat room can only be created by the administrator.
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
                            onChange ={this.handleNameChange.bind(this)}
                        >
                        </ListInput>

                        <ListInput
                            label="Language"
                            type="select"
                            defaultValue="English"
                            placeholder="Please choose..."
                            onChange ={this.handleLanguageChange.bind(this)}
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
                            onChange ={this.handleDescriptionChange.bind(this)}
                        >
                        </ListInput>
                    </List>

                <Button raised fill round className="create-chat-btn" onClick={this.handleCreateClick.bind(this)}>Create</Button>

            </Page>
        );
    };

    handleNameChange(e){
        this.setState({
            name: e.target.value,
        })
    }

    handleLanguageChange(e){
        this.setState({
            language: e.target.value,
        })

    }

    handleDescriptionChange(e){
        this.setState({
            description: e.target.value,
        })
    }

    handleCreateClick(){
        if(this.state.name === "") {
            this.$f7.dialog.alert("Please Input a Chat Room Name");
        }else{
            let url = "https://ez-talk-api-provider.azurewebsites.net/api/create-chatroom";

            axios.post(url,{
                name: this.state.name,
                language: this.state.language,
                description: this.state.description,
                type: "public"
            }).then((res) => {console.log("created!")});

            this.$f7router.back();
        }
    }
}