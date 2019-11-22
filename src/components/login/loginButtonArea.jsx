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
        };
    }

    render() {
        return (
            <div className="login-btn-area">
                <Button raised round fill className="login-btn">Login</Button>
                <div className="or">OR</div>
                <Button raise round fill className="sign-up-btn">Sign Up</Button>
            </div>
        )
    };

}


export default LoginButtonArea;


