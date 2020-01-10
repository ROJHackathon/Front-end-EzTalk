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
    MessagebarSheetItem
} from 'framework7-react';
import axios from "axios";
import TokenContext from "../../components/tokenContext";


class MessagePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roomName:"",
            user:{},
            attachments: [],
            typingMessage: null,
            messagesData: [],
        }

    }

    static contextType = TokenContext;

    componentDidMount() {
        const self = this;
        self.$f7ready(() => {
            self.messagebar = self.messagebarComponent.f7Messagebar;
            self.messages = self.messagesComponent.f7Messages;
        });

        let roomId = this.$f7route.params.id
        let specificRoomurl = "https://ez-talk-api-provider.azurewebsites.net/api-fake/chatroom/" + roomId + "/";
        axios.get(specificRoomurl).then((res) => {
            this.setState({
                roomName: res.data.name,
            })
        })

        let messageListurl = "https://ez-talk-api-provider.azurewebsites.net/api-fake/chatroom/" + roomId + "/" + "get-messages" + "/"
        axios.get(messageListurl).then((res) => {
            this.setState({
                messagesData: res.data,
            })
        })


        let userurl = "https://ez-talk-api-provider.azurewebsites.net/api-fake/get-user?token=" + this.context;
        axios.get(userurl).then((res) => {
            this.setState({
                user: res.data
            })
        })
    }



    render() {
        return (
          <Page noToolbar>
            <Navbar title={this.state.roomName} backLink="Back"/>
    
            <Messagebar
              placeholder="Message"
              ref={(el) => {this.messagebarComponent = el}}
              style = {{marginBottom :"0px"}}
            >

              <Link
                iconIos="f7:arrow_up_fill"
                iconAurora="f7:arrow_up_fill"
                iconMd="material:send"
                slot="inner-end"
                onClick={this.sendMessage.bind(this)}
              />
            </Messagebar>


    
            <Messages ref={(el) => {this.messagesComponent = el}}>
              <MessagesTitle><b>Sunday, Feb 9,</b> 12:58</MessagesTitle>
    
              {this.state.messagesData.map((message, index) => {

                  return <Message
                      key={index}
                      type={this.state.user.id === message.user.id ? "sent" : "received"}
                      name={message.user.name}
                      avatar={message.user.avatarUrl === null ? 'http://placeimg.com/80/80/people/35' : message.user.avatarUrl}
                      first={this.isFirstMessage(message, index)}
                      last={this.isLastMessage(message, index)}
                      tail={this.isTailMessage(message, index)}
                      last={true}
                  >
                      {message.content && (
                          <span slot="text" dangerouslySetInnerHTML={{__html: message.content}}/>
                      )}
                  </Message>
              })}

            </Messages>
          </Page>
        )
      }





    isFirstMessage(message, index) {
        const self = this;
        const previousMessage = self.state.messagesData[index - 1];
        if (message.isTitle) return false;
        if ((!previousMessage || previousMessage.user.id !== message.user.id) && this.state.user.id !== message.user.id) return true;
        return false;
    }

    isLastMessage(message, index) {
        const self = this;
        const nextMessage = self.state.messagesData[index + 1];
        if (message.isTitle) return false;
        if (!nextMessage || nextMessage.user.id !== message.user.id) return true;
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
              content : text,
              user : this.state.user
          });
        }
        if (messagesToSend.length === 0) {
          return;
        }


        self.setState((prevState) => ({
              messagesData: prevState.messagesData.concat(messagesToSend)
        }))

          console.log(this.state.messagesData)
        self.messagebar.clear();

        //Focus area
        if (text.length) self.messagebar.focus();
    

      }
    

}
export default MessagePage