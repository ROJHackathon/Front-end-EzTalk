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

class LoginButtonArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <div className="login-btn-area">
                <Button outline round className="login-btn" onClick={this.signIn.bind(this)}>Login</Button>
                <div className="or">OR</div>
                <Button raise round fill className="sign-up-btn">Sign Up</Button>
            </div>
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


export default LoginButtonArea;


