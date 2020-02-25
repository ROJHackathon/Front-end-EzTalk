import React from 'react';
import TranslateTool from './subComponents/translateTool'
import TranslateBox from './subComponents/translateBox'
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
    Searchbar
} from 'framework7-react';


class Translate extends React.Component {
    constructor() {
        super();

        this.state = {
            isDisplay:false,
            result: ""
        }

        this.enableBox = this.enableBox.bind(this)
        this.disableBox = this.disableBox.bind(this)
        //this.changeResult = this.changeResult.bind(this)
    }

    enableBox(e){
        this.setState(
            {isDisplay:true,
            }
        )
    }

    disableBox(){
        this.setState(
            {isDisplay:false, result:""}
        )
    }


    render() {
        return (
            <Page>

                <Navbar sliding={false} large>
                    <NavTitle sliding>Translate</NavTitle>
                    {/* <NavRight>
                        <Link iconIos="f7:person_crop_circle" iconAurora="f7:person_crop_circle" iconMd="material:menu" panelOpen="right" />
                    </NavRight> */}
                    <NavTitleLarge>Translate</NavTitleLarge>
                    <Subnavbar inner={false}>
                        <Searchbar
                            searchContainer=".search-list"  // where does the search happen
                            searchIn=".item-title"   // what is the query
                            placeholder="Translate Your Sentence"
                            value={this.state.result}
                            clearButton={true}
                            onSearchbarEnable={this.enableBox}
                            onSearchbarDisable={this.disableBox}
                            onInput={(e)=> {this.setState({result:e.target.value})}}
                        />
                    </Subnavbar>
                </Navbar>
                <TranslateBox isDisplay={this.state.isDisplay} result={this.state.result}/>
                <TranslateTool/>
            </Page>
        );
    }
}

export default Translate