import React from 'react';
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
    BlockFooter
} from 'framework7-react';

class Entry extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <View main url={"/test-login-page/"}/>
        );
    }


}

export default Entry;