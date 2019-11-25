import React from 'react';
import Preference from './preference'
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
    Toggle
} from 'framework7-react';

class TranslateTool extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isSmart:true
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(){
        this.setState(
            prevState => {
                return{
                    isSmart: !prevState.isSmart
                }
            }
        )
        
    }

    render(){

        return(
            
            <List>
                <ListItem title="Dictionary" link="#">
                    
                    <Icon slot="media" f7="book"></Icon>
                    
                </ListItem>
                    
                <ListItem title="Image Translate" link="#">
                    <Icon slot="media" f7="camera"></Icon>
                </ListItem>

                <ListItem>
                    <span>Enable Smart Translate</span>
                    <Toggle defaultChecked color="blue" onChange={this.changeHandler}/>
                    <Icon slot="media" f7="lightbulb"></Icon>
                </ListItem>

                {this.state.isSmart ? <Preference/> : null}

            </List>
        )
    }
}



export default TranslateTool
