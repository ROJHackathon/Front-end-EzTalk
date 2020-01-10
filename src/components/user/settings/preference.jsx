import React, { Component } from 'react'
import {
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter,
    Button,
    Icon,
    Toggle,
    Segmented
} from 'framework7-react';
import axios from 'axios';
import TokenContext from "../../tokenContext";

class Preference extends Component {
    constructor(props) {
        super(props)
        this.state = {
            motherValue: "Chinese",
            targetValue: "English"

        }

    }

    static contextType = TokenContext;


    handleChangeMother(e) {
        this.setState(
            { motherValue: e.target.value }
        )

    }

    handleChangeTarget(e) {
        let url = "https://ez-talk-api-provider.azurewebsites.net/api-fake/set-preference"
        this.setState({
            targetValue:e.target.value,
        })

        // post the target value as preference to do feed
        axios.post(url,
            {targetLanguage:e.target.value,
                toke:this.context
            }).then(()=>{console.log("target")});

    }

    componentDidMount() {
        let userurl = "https://ez-talk-api-provider.azurewebsites.net/api-fake/get-user/" + this.context;
        axios.get(userurl).then((res) => {
            if (res.data.targetLanguage!== null) {
                this.setState({
                    targetValue:res.data.targetLanguage
                })
            }else if(res.data.language !== null){
                this.setState({
                    motherValue:res.data.language
                })

            }

        })

    }



    render() {
        return (
            <div>
                <BlockTitle>Preference</BlockTitle>
                <List>
                    <ListItem
                        title="Mother Language"
                        after={this.state.motherValue}
                        smartSelect
                        smartSelectParams={{ openIn: 'sheet' }}
                    >
                        <select name="motherlanguage" defaultValue={this.state.motherValue} onChange={this.handleChangeMother.bind(this)}>
                            <option value="English">English</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Dutch">Dutch</option>
                        </select>
                    </ListItem>

                    <ListItem
                        title="Target Language"
                        after={this.state.targetValue}
                        smartSelect
                        smartSelectParams={{ openIn: 'sheet' }}
                    >
                        <select name="targetLanguage" defaultValue={this.state.targetValue} onChange={this.handleChangeTarget.bind(this)}>
                            <option value="English">English</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Dutch">Dutch</option>
                        </select>
                    </ListItem>

                    <List>
                        <ListItem title="Delete Search History"></ListItem>
                    </List>



                </List>

            </div>



        )
    };

}
export default Preference