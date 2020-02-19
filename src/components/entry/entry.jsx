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
    BlockFooter,
    Button,
} from 'framework7-react';

class Entry extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        const style={
            backgroundColor: "#282c34",
        };


        return(
            <Page style={style}>
                <div slot="fixed">Fixed element</div>
                <p>Page content goes here</p>
                <ListButton text={"To Main"} href={"/home/"}/>
            </Page>
        );
    }


}

export default Entry;