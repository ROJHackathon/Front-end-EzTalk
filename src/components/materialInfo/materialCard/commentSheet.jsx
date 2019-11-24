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
import { throws } from 'assert';


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
                opened = {this.props.state}
                onSheetClosed={this.props.handleCloseComment}
                style={{ height: 'auto'}}
                swipeToClose
                backdrop
            >
                <PageContent>
                    <BlockTitle large>Hello!</BlockTitle>
                    <Block>
                        <p>Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae adipisci vel voluptatum, autem libero minus dignissimos repellat.</p>
                        <p>Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?</p>
                    </Block>
                </PageContent>
            </Sheet>
        )
    }

}

export default CommentSheet;