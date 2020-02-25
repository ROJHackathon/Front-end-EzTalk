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
    Link,
    Message,
    Messages,
    Messagebar,
    MessagesTitle,
    MessageArea,
    MessagebarAttachment,
    MessagebarAttachments,
    MessagebarSheet,
    MessagebarSheetImage,
    MessagebarSheetItem,
    Actions,
    ActionsGroup,
    ActionsButton,
    ActionsLabel
} from 'framework7-react';
import axios from "axios";
import TokenContext from "../../components/tokenContext";


class MessagePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roomName: "",
            author: {},
            attachments: [],
            typingMessage: null,
            messagesData: [],
        }

    }

    static contextType = TokenContext;

    refreshMessageData() {
        let roomId = this.$f7route.params.id;
        let messageListurl = "https://ez-talk-api-provider.azurewebsites.net/api/chatroom/" + roomId + "/" + "get-messages";
        axios.get(messageListurl).then((res) => {
            this.setState({
                messagesData: res.data,
            })
        })

    }

    testRef() {
        let u = { id: 9, name: "yangtao", password: null, avatarUrl: "http://placeimg.com/80/80/people/39", email: null, language: null, preference: null }
        this.setState((prevState) => ({
            messagesData: prevState.messagesData.concat([{ content: "test", author: u }])
        }))
    }

    componentDidMount() {
        const self = this;
        self.$f7ready(() => {
            self.messagebar = self.messagebarComponent.f7Messagebar;
            self.messages = self.messagesComponent.f7Messages;
        });

        let roomId = this.$f7route.params.id
        let specificRoomurl = "https://ez-talk-api-provider.azurewebsites.net/api/chatroom/" + roomId;
        axios.get(specificRoomurl).then((res) => {
            this.setState({
                roomName: res.data.name,
            })
        });

        let messageListurl = "https://ez-talk-api-provider.azurewebsites.net/api/chatroom/" + roomId + "/" + "get-messages";
        axios.get(messageListurl).then((res) => {
            this.setState({
                messagesData: res.data,
            })
        });


        let userurl = "https://ez-talk-api-provider.azurewebsites.net/api/get-user/" + this.context;
        axios.get(userurl).then((res) => {
            this.setState({
                author: res.data
            })
        });

        this.interval = setInterval(this.refreshMessageData.bind(this), 800)
    }



    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        return (
            <Page noToolbar>
                <Navbar title={this.state.roomName} backLink="Back" backLinkForce />

                <Messagebar
                    placeholder="Message"
                    ref={(el) => { this.messagebarComponent = el }}
                    style={{ marginBottom: "0px" }}
                >

                    <Link
                        iconIos="f7:arrow_up_fill"
                        iconAurora="f7:arrow_up_fill"
                        iconMd="material:send"
                        slot="inner-end"
                        onClick={this.sendMessage.bind(this)}
                    />
                </Messagebar>



                <Messages ref={(el) => { this.messagesComponent = el }}>
                    <MessagesTitle><b>Sunday, Feb 9,</b> 12:58</MessagesTitle>

                    {this.state.messagesData.map((message, index) => {
                        //console.log(message)

                        return <Message
                            key={index}
                            type={this.state.author.id === message.author.id ? "sent" : "received"}
                            name={message.author.name}
                            avatar={message.author.avatarUrl === null ? 'http://placeimg.com/80/80/people/35' : message.author.avatarUrl}
                            first={this.isFirstMessage(message, index)}
                            last={this.isLastMessage(message, index)}
                            tail={this.isTailMessage(message, index)}
                            // first={true}
                            // last={true}
                            // tail={true}
                            onClick={this.state.author.id !== message.author.id ? () => this.refs.actionsOneGroup.open() : () => { }}
                            className="button-to-popover"

                        >
                            {message.content && (
                                <span slot="text" dangerouslySetInnerHTML={{ __html: message.content }} />
                            )}
                        </Message>
                    })}

                </Messages>

                <Actions ref="actionsOneGroup">
                    <ActionsGroup>
                        <ActionsLabel>Do you want to add her/him to be your friends?</ActionsLabel>
                        <ActionsButton bold onClick={() => {console.log("hahaha")}}>Add</ActionsButton>
                        <ActionsButton color="red">Cancel</ActionsButton>
                    </ActionsGroup>
                </Actions>






            </Page>
        )
    }





    isFirstMessage(message, index) {
        const self = this;
        const previousMessage = self.state.messagesData[index - 1];
        if (message.isTitle) return false;
        if ((!previousMessage || previousMessage.author.id !== message.author.id) && this.state.author.id !== message.author.id) return true;
        return false;
    }

    isLastMessage(message, index) {
        const self = this;
        const nextMessage = self.state.messagesData[index + 1];
        if (message.isTitle) return false;
        if (!nextMessage || nextMessage.author.id !== message.author.id) return true;
        return false;
    }
    isTailMessage(message, index) {
        return this.isLastMessage(message, index);
    }




    sendMessage() {
        const self = this;
        const text = self.messagebar.getValue().replace(/\n/g, '<br>').trim();


        const messagesToSend = [];
        if (text.trim().length) {
            messagesToSend.push({
                content: text,
                author: this.state.author
            });
        }
        if (messagesToSend.length === 0) {
            return;
        }


        self.setState((prevState) => ({
            messagesData: prevState.messagesData.concat(messagesToSend)
        }));

        // post
        let roomId = this.$f7route.params.id;
        let url = "https://ez-talk-api-provider.azurewebsites.net/api/chatroom/" + roomId + "/say";
        axios.post(url, {
            content: text,
            token: this.context
        }).then((res) => { console.log(text) });

        //console.log(this.state.messagesData)
        self.messagebar.clear();

        //Focus area
        if (text.length) self.messagebar.focus();


    }

    componentWillUnmount() {
        if (this.actionsToPopover) {
            this.actionsToPopover.destroy();
        }
    }


}
export default MessagePage