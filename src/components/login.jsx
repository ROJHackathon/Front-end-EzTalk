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
                    <LoginScreenTitle>Framework7</LoginScreenTitle>
                    <List form>
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
                    </List>
                    <List>
                        <Button onClick={this.signIn.bind(this)} className="login-btn">
                            Sign In
                        </Button>
                        <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                    </List>

                </Page>
            </LoginScreen>
        )
    };

    signIn() {
        const self = this;
        const app = self.$f7;

        app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
            app.loginScreen.close();
        });
    }


}

export default Login;