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


import axios from 'axios';

import {Icon} from 'framework7-react';

import colors from '../../css/colour.js';
import transparentHeaderStyle from '../../css/headerStyle.js'

import NavBarButton from './NavBarButton.jsx';
import InputField from './InputField.jsx';
import NextArrowButton from './NextArrowButton.jsx'
import Loader from './Loader.jsx'
import Notification from './Notification.jsx'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formValid: true,

            validEmail: false,
            emailAddress: '',

            validName: false,
            userName: '',

            validPassword: false,
            password: '',

            loadingVisible: false,
        };


        this.toggleForgotButton = this.toggleForgotButton.bind(this);
        this.toggleBackButton = this.toggleBackButton.bind(this);

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }


    render() {
        let headingTextSize = 30;
        const styles = {
            wrapper: {
                display: 'flex',
                flex: 1,
            },
            headerWrapper: {
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
            loginHeader: {
                fontSize: headingTextSize,
                color: colors.white,
                fontWeight: '300',
                marginBottom: 40,
            },
            forgotWrapper: {
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
            formValid, loadingVisible, validEmail, validPassword, validName
        } = this.state;
        const showNotification = !formValid;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const notificationMarginTop = showNotification ? 10 : 0;


        return (
            <Page style={{backgroundColor: background, display: 'inline'}}>


                <View style={styles.headerWrapper}>
                    <NavBarButton
                        handleButtonPress={this.toggleBackButton}
                        location="left"
                        icon={<Icon f7="chevron_left" color={"white"} size={"30px"}/>}
                    />
                </View>


                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Log In
                        </Text>

                        <InputField
                            labelText="USER NAME"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{marginBottom: 30}}
                            onChangeText={this.handleUserNameChange}
                            showCheckmark={validName}
                            placeholder={"Your username"}
                            autoFocus
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{marginBottom: 30}}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                            placeholder={"Your password"}
                        />

                        <View style={styles.forgotWrapper}>
                            <NavBarButton
                                handleButtonPress={this.toggleForgotButton}
                                location="right"
                                color={colors.white}
                                text="Forgot Password"
                            />
                        </View>

                    </ScrollView>

                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />

                </View>
            </Page>
        )

    }

    toggleForgotButton() {

    }

    toggleBackButton() {
        const router = this.$f7router;
        router.back()
    }

    handleUserNameChange(name) {
        const {validName} = this.state;

        this.setState({userName: name});

        if (!validName) {
            if (name.length > 4) {
                this.setState({validName: true})
            }
        } else if (name <= 4) {
            this.setState({validName: false})
        }
    }

    handleEmailChange(email) {
        // eslint-disable-next-line
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {validEmail} = this.state;
        this.setState({emailAddress: email});

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({validEmail: true});
            }
        } else if (!emailCheckRegex.test(email)) {
            this.setState({validEmail: false});
        }
    }

    handlePasswordChange(password) {
        const {validPassword} = this.state;

        this.setState({password});

        if (!validPassword) {
            if (password.length > 4) {
                // Password has to be at least 4 characters long
                this.setState({validPassword: true});
            }
        } else if (password <= 4) {
            this.setState({validPassword: false});
        }
    }

    handleNextButton() {
        // this.setState({ loadingVisible: true });
        // const { logIn, navigation } = this.props;
        // const { navigate } = navigation;
        //
        // setTimeout(() => {
        //     const { emailAddress, password } = this.state;
        //     if (logIn(emailAddress, password)) {
        //         this.setState({ formValid: true, loadingVisible: false });
        //         navigate('TurnOnNotifications');
        //     } else {
        //         this.setState({ formValid: false, loadingVisible: false });
        //     }
        // }, 2000);

        // this.setState({formValid: false})  // test it change to read background
        // this.$f7.dialog.alert("Those credential don't look right, Please try again", ()=> {
        //     this.setState({formValid: true})
        // })

        let url = "https://ez-talk-api-provider.azurewebsites.net/api/login";

        axios.post(url, {
            userName: this.state.userName,
            password: this.state.password,
        }).then((res) => {
            // console.log(res);

            let code = res.status;
            let message = res.data.message;
            let token = res.data.token;

            if (code === 200) {
                const self = this;
                const app = self.$f7;
                const router = self.$f7router;
                router.navigate("/main/");
            }

        }).catch(error => {
            this.setState({formValid: false})  // test it change to read background
            this.$f7.dialog.alert("Those credential don't look right, Please try again", ()=> {
                this.setState({formValid: true})
            })
        });


    }

    toggleNextButtonState() {
        const {validEmail, validPassword, validName} = this.state;
        if (validName && validPassword) {
            return false;
        }
        return true;
    }

    handleCloseNotification() {
        this.setState({formValid: true});
    }


}

export default Login;