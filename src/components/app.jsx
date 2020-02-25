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
    BlockFooter
} from 'framework7-react';

import Cookies from 'js-cookie';


//Self-defined component
import UserPanel from './user/userPanel/userPanel';
import Login from './login/login.jsx';
import Main from './main.jsx';
import Entry from './entry/Entry.jsx';


import routes from '../js/routes';

// Context 
import TokenContext from './tokenContext.jsx'

export default class extends React.Component {
    constructor() {
        super();

        this.state = {
            // Framework7 Parameters
            f7params: {
                name: 'EzTalk', // App name
                theme: 'ios', // Automatic theme detection
                // App routes
                routes: routes,
                // Register service worker
                serviceWorker: {
                    path: '/service-worker.js',
                },
            },

            // User data
            token: 0,
            //avtive tab
            tabActive: "view-home"
        };

        this.tabShowHomeHandler = this.tabShowHomeHandler.bind(this)
        this.tabShowTranslateHandler = this.tabShowTranslateHandler.bind(this)
        this.tabShowChatHandler = this.tabShowChatHandler.bind(this)
        this.authToken = this.authToken.bind(this)
    }

    tabShowHomeHandler(e) {
        this.setState(
            {
                tabActive: "view-home"
            }
        )
    }

    tabShowTranslateHandler(e) {
        this.setState(
            {
                tabActive: "view-translate"
            }
        )
    }

    tabShowChatHandler(e) {
        this.setState(
            {
                tabActive: "view-chatroom"
            }
        )
    }


    render() {
        //console.log(this.state.token);
        let token = Cookies.get("token");
        return (
                <App params={this.state.f7params} themeDark>

                    {/* Login screen */}
                    {/*<Login handleLogin={this.handleLogin.bind(this)}/>*/}

                    {/*<View url={"/"}/>*/}
                    {this.authToken(token)}

                    {/* Views/Tabs container */}
                    {/*<Main token={this.state.token}/>*/}

                </App>
        )
    }


    componentDidMount() {
        this.$f7ready((f7) => {
            // Call F7 APIs here
        });
    }

    handleLogin(val) {
        this.setState({token: val})
    }

    authToken(token) {
        if(token !== undefined ){
            return <Main/>
        } else{
            return <View url={'/'}/>
        }

    }



}