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


import colors from '../../css/colour.js';
import InputField from './InputField.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    render() {
        let headingTextSize = 30;
        const styles = {
            wrapper: {
                display: 'flex',
                flex: 1,
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
            notificationWrapper: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            },
        };

        const {
            formValid, loadingVisible, validEmail, validPassword,
        } = this.state;
        const showNotification = !formValid;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const notificationMarginTop = showNotification ? 10 : 0;

        return (
            <Page style={{backgroundColor: background, display: 'inline'}}>
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
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
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
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                            placeholder={"Your password"}
                        />

                    </ScrollView>
                </View>
            </Page>
        )

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

    handlePasswordChange(password) {
        const { validPassword } = this.state;

        this.setState({ password });

        if (!validPassword) {
            if (password.length > 4) {
                // Password has to be at least 4 characters long
                this.setState({ validPassword: true });
            }
        } else if (password <= 4) {
            this.setState({ validPassword: false });
        }
    }


}

export default Login;