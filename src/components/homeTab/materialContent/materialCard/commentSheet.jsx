import React from 'react';
import {
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
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    AccordionContent,
    Icon,
    Sheet,
    PageContent,
    ListInput,
} from 'framework7-react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


class CommentSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        };
    }

    render() {

        console.log(this.state.comment);
        return (
            <Sheet
                className=".comment-sheet"
                opened={this.props.state}
                onSheetClosed={this.props.handleCloseComment}
                style={{ height: 'auto' }}
                swipeToClose
                backdrop
            >
                <PageContent>
                    <BlockTitle large>Commenting</BlockTitle>

                    <Block>
                        <List inlineLabels noHairlinesMd>
                            <ListInput
                                label="Comment"
                                type="textarea"
                                resizable
                                placeholder="commenting ..."
                                onChange={e => (this.setState({comment: e.target.value}))}
                            >
                                <Icon ios="f7:bubble_left_bubble_right_fill" slot="media" />
                            </ListInput>
                        </List>

                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                                <Button fill raised round>Submit</Button>
                            </Col>
                        </Row>
                    </Block>
                </PageContent>
            </Sheet >
        )
    }

    handle

}

export default CommentSheet;