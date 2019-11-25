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
import axios from 'axios';

class LoginButtonArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isSuccess: false,
        };
    }

    render() {
        // console.log(this.props.username);
        // console.log(this.props.password)
    
        return (
            <div className="login-btn-area">
                <Button outline round className="login-btn" onClick={this.signIn.bind(this)}>Login</Button>
                <div className="or">OR</div>
                <Button raised round fill className="sign-up-btn">Sign Up</Button>
            </div>
        )
    };

    signIn() {
        const self = this;
        const app = self.$f7;
        
        //test
        // app.dialog.alert(`Username: ${this.props.username}<br>Password: ${self.props.password}`, () => {
        //     app.loginScreen.close();
        // });
        
        let url = "http://108.61.221.218:39802/api-fake/login"
        axios.post(url, {
                userName: this.props.username,
                password: this.props.password,
            }).then((res) => {
                console.log(res)
                let message = res.data.message
                if(message === "Login success"){
                    this.setState({isSuccess: true})
                    //console.log(this.state.isSuccess);
                    // app.loginScreen.close();
                    this.props.handleIsSuccess(this.state.isSuccess);
                }else if(message === "User Name Does Not Exist"){
                    this.setState({isSuccess: false})
                    this.props.handleIsSuccess(this.state.isSuccess);
                    this.$f7.dialog.alert("Login Fail: User name does not exits");
                }else if(message === "Invalid Password"){
                    this.setState({isSuccess: false})
                    this.props.handleIsSuccess(this.state.isSuccess);
                    this.$f7.dialog.alert("Login Fail: Check your password");
                }else{
                    this.setState({isSuccess: false})
                    this.props.handleIsSuccess(this.state.isSuccess);
                    this.$f7.dialog.alert("Unknown Error");
                }
            });    
    }

}


export default LoginButtonArea;


