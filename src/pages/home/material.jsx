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
        let url = 'https://ez-talk-api-provider.azurewebsites.net/api'+ this.$f7route.url; // get the info of one material
        axios.get(url).then(res => {
            this.setState({ material: res.data })
        });
    };

    render() {
        //console.log(this.state.material);
        return (
            <Page
                infinite
                infiniteDistance={50}
                infinitePreloader={this.state.showPreloader}
                onInfinite={this.loadMoreComment.bind(this)}
            >
                <Navbar title={this.state.material.title} backLink="Back" />
                <MarterialCard id={this.$f7route.params.id}/>
                <RatingArea material={this.state.material}/>

                <MaterialComment id={this.$f7route.params.id}/>
            </Page>

        );
    }

    loadMoreComment() {
        const self = this;
        if (!self.state.allowInfinite) return;
        self.setState({ allowInfinite: false });

        setTimeout(() => {
            let url = 'https://ez-talk-api-provider.azurewebsites.net/api/material/' + this.$f7route.params.id + '/get-comments';
            axios.get(url).then(res => {
                self.setState({
                    comments : res.data,
                    allowInfinite : true
                })
            })
            
        }, 1000);
    }
}