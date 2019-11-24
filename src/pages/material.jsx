import React from 'react';
import { Page, Navbar, Block, Link } from 'framework7-react';
import axios from 'axios';

import MarterialCard from '../components/materialInfo/materialCard.jsx';
import MaterialComment from '../components/materialInfo/materialComment.jsx';

export default class Material extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            material: {},
            comments: [
                {
                    "id": null,
                    "content": "Comment 1",
                    "user": {
                        "id": null,
                        "name": "fake user 1"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 2",
                    "user": {
                        "id": null,
                        "name": "fake user 2"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 3",
                    "user": {
                        "id": null,
                        "name": "fake user 3"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 4",
                    "user": {
                        "id": null,
                        "name": "fake user 4"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 5",
                    "user": {
                        "id": null,
                        "name": "fake user 5"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 6",
                    "user": {
                        "id": null,
                        "name": "fake user 6"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 7",
                    "user": {
                        "id": null,
                        "name": "fake user 7"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 8",
                    "user": {
                        "id": null,
                        "name": "fake user 8"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 9",
                    "user": {
                        "id": null,
                        "name": "fake user 9"
                    }
                },
                {
                    "id": null,
                    "content": "Comment 10",
                    "user": {
                        "id": null,
                        "name": "fake user 10"
                    }
                }
            ],
            allowInfinite: true,
            showPreloader: true,
        }
    }

    componentDidMount() {
        let url = ' http://108.61.221.218:39802/api-fake/' + this.$f7route.url; // get the info of one material
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
                onInfinite={this.loadMore.bind(this)}
            >
                <Navbar title={this.state.material.title} backLink="Back" />
                <MarterialCard id={this.$f7route.params.id}></MarterialCard>
                {/* <Block strong>
                    <ul>
                        <li><b>Url:</b> {this.$f7route.url}</li>
                        <li><b>Path:</b> {this.$f7route.path}</li>
                        <li><b>Hash:</b> {this.$f7route.hash}</li>
                        <li><b>Params:</b>
                            <ul>
                                {Object.keys(this.$f7route.params).map(key => (
                                    <li key={key}><b>{key}:</b> {this.$f7route.params[key]}</li>
                                ))}
                            </ul>
                        </li>
                        <li><b>Query:</b>
                            <ul>
                                {Object.keys(this.$f7route.query).map(key => (
                                    <li key={key}><b>{key}:</b> {this.$f7route.query[key]}</li>
                                ))}
                            </ul>
                        </li>
                        <li><b>Route:</b> {this.$f7route.route.path}</li>
                    </ul>
                </Block>
                <Block strong>
                    <Link onClick={() => this.$f7router.back()}>Go back via Router API</Link>
                </Block> */}

                <MaterialComment comments={this.state.comments}></MaterialComment>
            </Page>

        );
    }

    loadMore() {
        const self = this;
        if (!self.state.allowInfinite) return;
        self.setState({ allowInfinite: false });

        setTimeout(() => {
            const comments = self.state.comments;
            if (comments.length >= 200) {
                self.setState({ showPreloader: false });
                return;
            }

            const commentsLength = comments.length;

            for (let i = 1; i <= 20; i += 1) {
                comments.push(commentsLength + i);
            }

            self.setState({
                comments,
                allowInfinite: true,
            });
        }, 1000);
    }
}