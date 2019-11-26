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
            isSuccess: false,
            token: 0,
        };
    }

    componentDidUpdate(prevProps){
        
    }

    render() {
        //console.log(this.state.username);
        //console.log(this.state.isSuccess);
        //console.log(this.state.token);

        return (
            <LoginScreen className="login-screen"
                opened={!this.state.isSuccess}
                onLoginScreenClosed=
                {() => { this.props.handleLogin(this.state.token)}}
                onLoginScreenOpened=
                {() => { this.setState({isSuccess :false})}}
            >

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
                        handleIsSuccess={this.handleIsSuccess.bind(this)}
                        handleToken={this.handleToken.bind(this)}
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

    handleIsSuccess(val){
        this.setState({isSuccess: val})
    };

    handleToken(val){
        this.setState({token: val})
    }
}

export default Login;