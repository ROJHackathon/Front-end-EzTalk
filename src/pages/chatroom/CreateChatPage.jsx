import React from 'react';
import { Page, Navbar, Block, Link } from 'framework7-react';
import axios from 'axios';

export default class Material extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    };

    render() {
        return (
            <Page>
                <Navbar title="Create Your Chat Room" backLink="Back" />
            </Page>
        );
    };
}