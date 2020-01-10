import React from 'react';
import { Page, Navbar, Block, Link } from 'framework7-react';
import axios from 'axios';

import MarterialCard from '../../components/homeTab/materialContent/materialCard.jsx';
import MaterialComment from '../../components/homeTab/materialContent/materialComment.jsx';
import RatingArea from '../../components/homeTab/materialContent/ratingArea.jsx';

export default class Material extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            material: {},
            comments: [],
            allowInfinite: true,
            showPreloader: true,
        }
    }

    componentDidMount() {
        let url = 'https://ez-talk-api-provider.azurewebsites.net/api-fake/' + this.$f7route.url; // get the info of one material
        //console.log(url);
        axios.get(url).then(res => {
            this.setState({ material: res.data })
        });
    };

    render() {
        return (
            <Page
                infinite
                infiniteDistance={50}
                infinitePreloader={this.state.showPreloader}
                onInfinite={this.loadMoreComment.bind(this)}
            >
                <Navbar title={this.state.material.title} backLink="Back" />
                <MarterialCard id={this.$f7route.params.id}></MarterialCard>
                <RatingArea></RatingArea>

                <MaterialComment id={this.$f7route.params.id}></MaterialComment>
            </Page>

        );
    }

    loadMoreComment() {
        const self = this;
        if (!self.state.allowInfinite) return;
        self.setState({ allowInfinite: false });

        setTimeout(() => {
            let url = 'http://108.61.221.218:39802/api-fake/material/' + this.$f7route.params.id + '/get-comment';
            axios.get(url).then(res => {
                self.setState({
                    comments : res.data,
                    allowInfinite : true
                })
            })
            
        }, 1000);
    }
}