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
                <Button raised round fill className="sign-up-btn" onClick ={this.signUp.bind(this)}>Sign Up</Button>
            </div>
        )
    };

    signIn() {
        // test
        // const self = this;
        // const app = self.$f7;
        // app.dialog.alert(`Username: ${this.props.username}<br>Password: ${self.props.password}`, () => {
        //     app.loginScreen.close();
        // });
        
        let url = "https://ez-talk-api-provider.azurewebsites.net/api-fake/login"
        axios.post(url, {
                userName: this.props.username,
                password: this.props.password,
            }).then((res) => {
                console.log(res)
                let message = res.data.message
                let token = res.data.token
                if(message === "Login success"){
                    this.setState({isSuccess: true})
                    //console.log(this.state.isSuccess);
                    // app.loginScreen.close();
                    this.props.handleIsSuccess(this.state.isSuccess);
                    this.props.handleToken(token);
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

    signUp() {
        let url = "https://ez-talk-api-provider.azurewebsites.net/sign-up"

        axios.post(url, {
            userName: this.props.username,
            password: this.props.password,
        }).then((res) => {
            if(res.data.id == null){
                this.$f7.dialog.alert("Sign Up Fail: User name is used by others ");
            }else{
                this.$f7.dialog.alert("Sign Up Success: Your user name is " + this.props.username);
            }
        })

    }

}


export default LoginButtonArea;


