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

class TagOfficial extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }


    }

    render() {
        return (
            <List mediaList>
                <ListItem title="Official Demo" badge="Official" link="#"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis 
                    tellus ut turpis condimentum, ut dignissim lacus tincidunt. 
                    Cras dolor metus, ultrices condimentum sodales sit amet, 
                    pharetra sodales eros. Phasellus vel felis tellus. 
                    Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, 
                    pulvinar lacus.">
                </ListItem>
            </List>

        )
    };

}
export default TagOfficial