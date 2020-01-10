import React, {Component} from 'react'
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
    Toggle,
    Card,
    Row,
    Col,


} from 'framework7-react';
import axios from "axios";

class PopularTopic extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contents: []
        }
    }

    componentDidMount() {
        let url = "https://ez-talk-api-provider.azurewebsites.net/api-fake/top-word"
        axios.get(url).then(
            (res) => {
                this.setState({
                    contents: res.data
                }
                )
            }
        )


    }


    render() {
        return (
            <Block>
                <BlockTitle>Top 10</BlockTitle>
                {this.state.contents.map(
                    (content, index) => {
                        return  <Row key={index}>
                                    <Col/>
                                    <Col>
                                        {content}
                                    </Col>
                                    <Col/>
                                </Row>

                    }
                )}

            </Block>
        )
    };


}

export default PopularTopic