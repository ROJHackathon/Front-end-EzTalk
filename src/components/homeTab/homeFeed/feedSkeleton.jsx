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
    SkeletonBlock
} from 'framework7-react';


class FeedSkeleton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            effect: 'blink',
        }
    }


    render() {

        return (
            <Page >
                <List mediaList className="skeleton-text">
                    {[1, 2, 3].map(n => (
                        <Card
                        key={n}
                        className={`skeleton-text skeleton-effect-${this.state.effect}`}
                        title="Card Header"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
                        footer="Card Footer"
                      ></Card>
                    ))}
                </List>
            </Page>
        );
    }
}


export default FeedSkeleton;