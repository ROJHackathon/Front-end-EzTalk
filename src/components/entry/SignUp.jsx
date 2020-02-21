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
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        };

        this.toggleBackButton = this.toggleBackButton.bind(this);



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
            loginHeader: {
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
            formValid, loadingVisible, validEmail, validPassword,
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

            </Page>
        );
    }


    toggleBackButton(){
        const router = this.$f7router;
        router.back()
    }
}



