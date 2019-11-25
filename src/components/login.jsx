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
    Button
} from 'framework7-react';

import LoginButtonArea from './login/loginButtonArea.jsx';
import LoginInputArea from './login/loginInputArea.jsx';
import LoginTitle from './login/loginTitle.jsx';
import { throws } from 'assert';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginScreenOpened: true,
        };
    }

    render() {
        //console.log(this.state.username);
        return (
            <LoginScreen className="login-screen"
                opened={this.state.loginScreenOpened}
                onLoginScreenClosed=
                {() => { this.setState({ loginScreenOpened: false }) }}>
                <Page loginScreen className="login-page">
                <LoginTitle></LoginTitle>
                    <LoginInputArea 
                        handleUserNameInput={this.handleUserNameInput.bind(this)}
                        handlePasswordInput={this.handlePasswordInput.bind(this)}
                    >
                    </LoginInputArea>

                    <LoginButtonArea 
                        username={this.state.username} 
                        password={this.state.password}
                    >
                    </LoginButtonArea>
                </Page>
            </LoginScreen>
        )
    };


    handleUserNameInput(val) {
        this.setState({username: val})
    };

    handlePasswordInput(val) {
        this.setState({password: val})
    };

    alertLoginData() {
        this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password);
      }



}

export default Login;