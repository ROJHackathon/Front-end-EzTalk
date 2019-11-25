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

class Preference extends Component {
    constructor(props) {
        super(props)
        this.state = {
            motherValue: "English",
            targetvalue: "Chinese"

        }
        this.handleChangeMother = this.handleChangeMother.bind(this)

    }

    handleChangeMother(e) {
        this.setState(
            { motherValue: e.target.value }
        )

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
                        <select name="motherlanguage" defaultValue="English" onChange={this.handleChangeMother}>
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
                        <select name="targetLanguage" defaultValue="Chinese" onChange={this.handleChangeMother}>
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