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

import{
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native-web';

import colors from '../../css/colour.js';
import RoundButton from './RoundButton.jsx';

const ezTalkLogo = require('../../assets/logo.png');

class Entry extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        };

        this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
        this.onMoreOptionsPress = this.onMoreOptionsPress.bind(this);
        this.onFacebookPress = this.onFacebookPress.bind(this);
    }

    render() {
        let termsTextSize = 13;
        let headingTextSize = 30;

        const style={
            wrapper: {
                flex: 1,
                display: 'flex',
                backgroundColor: colors.green01,
            },

            welcomeWrapper: {
                flex: 1,
                display: 'flex',
                marginTop: 30,
                padding: 20,
            },

            logo: {
                width: 50,
                height: 50,
                marginTop: 50,
                marginBottom: 40,
            },

            welcomeText: {
                fontSize: headingTextSize,
                color: colors.white,
                fontWeight: '300',
                marginBottom: 40,
            },

            facebookButtonIcon: {
                color: colors.green01,
                position: 'relative',
                left: 20,
                zIndex: 8,
            },

            moreOptionsButton: {
                marginTop: 10,
            },

            moreOptionsButtonText: {
                color: colors.white,
                fontSize: 16,
            },

            termsAndConditions: {
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                flexDirection: 'row',
                marginTop: 30,
            },

            termsText: {
                color: colors.white,
                fontSize: termsTextSize,
                fontWeight: '600',
            },
            linkButton: {
                borderBottomWidth: 1,
                borderBottomColor: colors.white,
            },
        };


        return(
            <Page style={style.wrapper}>
                <View style={style.welcomeWrapper}>

                    {/*Title*/}
                    <Image
                        source={ezTalkLogo}
                        style={style.logo}
                    />

                    <Text style={style.welcomeText}>
                        Welcome to EzTalk.
                    </Text>

                    {/*Buttons*/}
                    <RoundButton
                        text="Sign In Your Account"
                        textColor={colors.green01}
                        background={colors.white}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundButton
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />


                    {/*Terms and more*/}
                    <TouchableHighlight
                        style={style.moreOptionsButton}
                        onPress={this.onMoreOptionsPress}
                    >
                        <Text style={style.moreOptionsButtonText}>
                            More options
                        </Text>
                    </TouchableHighlight>


                    <View style={style.termsAndConditions}>
                        <Text style={style.termsText}>
                            By tapping Continue, Create Account or More
                        </Text>
                        <Text style={style.termsText}>
                            {' options,'}
                        </Text>
                        <Text style={style.termsText}>
                            {"I agree to EzTalk's "}
                        </Text>
                        <TouchableHighlight style={style.linkButton}>
                            <Text style={style.termsText}>
                                Terms of Service
                            </Text>
                        </TouchableHighlight>
                        <Text style={style.termsText}>
                            ,
                        </Text>
                        <TouchableHighlight style={style.linkButton}>
                            <Text style={style.termsText}>
                                Payments Terms of Service
                            </Text>
                        </TouchableHighlight>
                        <Text style={style.termsText}>
                            ,
                        </Text>
                        <TouchableHighlight style={style.linkButton}>
                            <Text style={style.termsText}>
                                Privacy Policy
                            </Text>
                        </TouchableHighlight>
                        <Text style={style.termsText}>
                            , and
                        </Text>
                        <TouchableHighlight style={style.linkButton}>
                            <Text style={style.termsText}>
                                Nondiscrimination Policy
                            </Text>
                        </TouchableHighlight>
                        <Text style={style.termsText}>
                            .
                        </Text>
                    </View>


                </View>
            </Page>
        );
    }

    onFacebookPress() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        router.navigate("/sign-in/");
    }

    onCreateAccountPress() {
        alert('Create Account button pressed');
    }

    onMoreOptionsPress() {
        alert('More options button pressed');
    }

}

export default Entry;