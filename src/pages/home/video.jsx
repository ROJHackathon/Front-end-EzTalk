import React from 'react';
import Player from '../../components/homeTab/materialContent/videoArea'
import {
    Card,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    Subnavbar,
    Searchbar,
    CardContent,
    CardFooter,
    CardHeader,
    Icon,
} from 'framework7-react';
import axios from 'axios';
import TokenContext from "../../components/tokenContext";

export default class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            material: {},
            isLiked: false,
        }
        this.handleClickLike = this.handleClickLike.bind(this)
    }
    static contextType = TokenContext;

    componentDidMount() {
        // let url = 'https://ez-talk-api-provider.azurewebsites.net/api' + this.$f7route.url.replace("video", "material"); // get the info of one material
        let url = 'https://ez-talk-api-provider.azurewebsites.net/api/material/85622/'
        axios.get(url).then(res => {
            this.setState({ material: res.data })
        });
    };

    handleClickLike() {
        if (this.state.isLiked === false) {
            this.setState({ isLiked: true });
            // console.log(this.state.isLiked);
            let url = "https://ez-talk-api-provider.azurewebsites.net/api/material/" + this.state.material.id + "/love";
            axios.post(url, {
                token: this.context,
            }).then((res) => { console.log("love!") });

        } else {
            this.setState({ isLiked: false });
            // console.log(this.state.isLiked);
        }
    }


    render() {

        let button;
        if (this.state.isLiked) {
            button = <Icon ios="f7:heart_fill"></Icon>
        } else {
            button = <Icon ios="f7:heart"></Icon>
        }

        return (
            <Page
            >
                <Navbar backLink="Back" />
                <Player material={this.state.material} />
                <List>

                    <ListItem>
                        <Col><Button onClick={this.handleClickLike}>{button}</Button></Col>
                    </ListItem>

                </List>


                <Card outline color="white"
                    title={this.state.material.title}
                    //content={typeof(this.state.material[description]) === undefined ?  "no desc" : this.material.description}
                    footer={"Language:" + this.state.material.language}>
                </Card>
            </Page>

        );
    }
}