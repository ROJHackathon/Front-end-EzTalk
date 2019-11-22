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
        return (
            <LoginScreen className="login-screen"
                opened={this.state.loginScreenOpened}
                onLoginScreenClosed=
                {() => { this.setState({ loginScreenOpened: false }) }}>
                <Page loginScreen className="login-page">
                <LoginTitle></LoginTitle>
                    {/* <List form className="login-form">
                        <ListInput
                            label="Username"
                            type="text"
                            placeholder="Your username"
                            value={this.state.username}
                            onInput={(e) => {
                                this.setState({ username: e.target.value });
                            }}
                        />
                        <ListInput
                            label="Password"
                            type="password"
                            placeholder="Your password"
                            value={this.state.password}
                            onInput={(e) => {
                                this.setState({ password: e.target.value });
                            }}
                        />
                    </List> */}
                    <LoginInputArea></LoginInputArea>

                    {/* <List>
                    <Button onClick={this.signIn.bind(this)} className="login-btn">
                        Sign In
                    </Button>
                    <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                    </List> */}


                    <LoginButtonArea></LoginButtonArea>
                </Page>


            </LoginScreen>
        )
    };

}

export default Login;