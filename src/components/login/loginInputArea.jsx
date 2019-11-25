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

class LoginInputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <List form className="login-form">
                <ListInput
                    label="Username"
                    type="text"
                    placeholder="Your username"
                    value={this.state.username}
                    onInput={(e) => {
                        this.setState({username: e.target.value})
                        this.props.handleUserNameInput(e.target.value)
                    }}
                />
                <ListInput
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onInput={(e) => {
                        this.setState({password: e.target.value})
                        this.props.handlePasswordInput(e.target.value)
                    }}
                />
            </List>
        );
    }
}


export default LoginInputArea;