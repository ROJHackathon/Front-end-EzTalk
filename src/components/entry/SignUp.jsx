import React from 'react';
import {
    App,
    Panel,
    Views,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    NavLeft,
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
} from 'framework7-react';

import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native-web';

import {Icon} from 'framework7-react';

import colors from '../../css/colour.js';
import transparentHeaderStyle from '../../css/headerStyle.js'

import NavBarButton from './NavBarButton.jsx';
import InputField from './InputField.jsx';
import NextArrowButton from './NextArrowButton.jsx'
import Loader from './Loader.jsx'
import Notification from './Notification.jsx'


export default class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            formValid: true,
            validName: false,
            userName: '',
            validEmail: false,
            emailAddress: '',
            password: '',
            repeatPassword: '',
            validPassword: false,
            samePassword: false,
            loadingVisible: false,
        };

        this.toggleBackButton = this.toggleBackButton.bind(this);

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);



    }


    render() {
        let headingTextSize = 30;
        const styles = {
            wrapper: {
                display: 'flex',
                flex: 1,
            },
            headerWrapper:{
                marginTop: 20,
            },
            scrollViewWrapper: {
                marginTop: 70,
                flex: 1,
                padding: 0,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
            scrollView: {
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 20,
                flex: 1,
            },
            signUpHeader: {
                fontSize: headingTextSize,
                color: colors.white,
                fontWeight: '300',
                marginBottom: 40,
            },
            forgotWrapper:{
                marginTop: 5,
            },
            notificationWrapper: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            },
        };

        const {
            formValid, loadingVisible, validEmail, validPassword, samePassword, validName
        } = this.state;
        const showNotification = !formValid;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const notificationMarginTop = showNotification ? 10 : 0;


        return(
            <Page style={{backgroundColor: background, display: 'inline'}}>
                <View style={styles.headerWrapper}>
                    <NavBarButton
                        handleButtonPress={this.toggleBackButton}
                        location="left"
                        icon={<Icon f7="chevron_left" color={"white"} size={"30px"} />}
                    />
                </View>

                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.signUpHeader}>
                            Sign Up
                        </Text>

                        <InputField
                            labelText="USER NAME"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="text"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleUserNameChange}
                            showCheckmark={validName}
                            placeholder={"Your username"}
                            autoFocus
                        />

                        <InputField
                            labelText="EMAIL"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            placeholder={"Your email"}
                            autoFocus
                        />

                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                            placeholder={"Your password"}
                        />

                        <InputField
                            labelText="REPEAT PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleRepeatPasswordChange}
                            showCheckmark={samePassword}
                            placeholder={"Repeat your password"}
                        />



                    </ScrollView>

                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />

                </View>

            </Page>
        );
    }


    toggleBackButton(){
        const router = this.$f7router;
        router.back()
    }

    toggleNextButtonState() {
        const { validEmail, validPassword, samePassword, validName } = this.state;
        if (validEmail && validPassword && samePassword && validName) {
            return false;
        }
        return true;
    }

    handleUserNameChange(name){
        const {validName} = this.state;

        this.setState({userName: name});

        if(!validName){
            if(name.length > 4) {
                this.setState({validName: true})
            }
        } else if(name <= 4){
            this.setState({validName: false})
        }
    }

    handleEmailChange(email) {
        // eslint-disable-next-line
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        this.setState({ emailAddress: email });

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
            }
        } else if (!emailCheckRegex.test(email)) {
            this.setState({ validEmail: false });
        }
    }

    handlePasswordChange(password){
        const { validPassword } = this.state;

        this.setState({ password: password});

        if (!validPassword) {
            if (password.length > 4) {
                // Password has to be at least 4 characters long
                this.setState({ validPassword: true });
            }
        } else if (password <= 4) {
            this.setState({ validPassword: false });
        }
    }

    handleRepeatPasswordChange(repeatPassword){
        const { validPassword, password } = this.state;

        this.setState({repeatPassword: repeatPassword});

        if(validPassword){
            if(repeatPassword === password){
                this.setState({samePassword: true})
            }else {
                this.setState({samePassword: false})
            }
        } else {
            this.setState({samePassword: false})
        }
    }

    handleNextButton(){
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        router.navigate("/set-preference/");
    }

}



