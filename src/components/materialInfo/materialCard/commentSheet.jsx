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
} from 'framework7-react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


class CommentSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
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
                        <TextField
                            id="comment-input"
                            label="Your Comment"
                            variant="outlined"
                            multiline
                            rowsMax="5"
                        />
                    </Block>
                </PageContent>
            </Sheet >
        )
    }

}

export default CommentSheet;