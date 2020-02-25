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

export default class SetPreference extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            loadingVisible: false,
            validEmail: false,
            emailAddress: '',
        };

        this.toggleBackButton = this.toggleBackButton.bind(this);

    }

    render(){
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
            preferenceHeading: {
                fontSize: headingTextSize,
                color: colors.white,
                fontWeight: '300',
            },
            preferenceSubheading: {
                color: colors.white,
                fontWeight: '600',
                fontSize: 15,
                marginTop: 10,
                marginBottom: 60,
            },
            notificationWrapper: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            },
        };

        const { loadingVisible, formValid, validEmail } = this.state;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const showNotification = !formValid;

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
                        <Text style={styles.preferenceHeading}>
                            Set Preference
                        </Text>
                        <Text style={styles.preferenceSubheading}>
                            Set your mother language and the
                            language you want to learn for your feed recommendation
                        </Text>



                    </ScrollView>


                </View>

            </Page>

        );

    }

    toggleBackButton(){
        const router = this.$f7router;
        router.back()
    }



}