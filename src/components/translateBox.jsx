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
    Button,
    Icon,
    Toggle
} from 'framework7-react';

// class TranslateBox extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
//     render() {

//         return (
//             <Block strong mediumInset>
//                 <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
//             </Block>
//         )
//     }
// }

function TranslateBox(props) {

    if (!props.isDisplay) {
        return null
    }

    if (!props.result) {
        return (
            <div className="card">
                <div className="card-content card-content-padding" align = "center">No Result</div>
            </div>
        )


    }
    
    return (
        <div className="card">
            <div className="card-content card-content-padding" align = "center">{props.result}</div>
        </div>
    )

}



export default TranslateBox