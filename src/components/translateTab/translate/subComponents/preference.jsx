import React, { Component } from 'react'
import {
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter,
    Button,
    Icon,
    Toggle
} from 'framework7-react';

class Preference extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            valueTarget:"21-30",
            valueSituation:"Formal",
            valueTense:"Present"
        }

        this.handleChangeTarget = this.handleChangeTarget.bind(this)
        this.handleChangeSituation = this.handleChangeSituation.bind(this)
        this.handleChangeTense = this.handleChangeTense.bind(this)
    }
    handleChangeTarget(e){
        this.setState(
            {
                valueTarget: e.target.value
            }
        )
    }
    handleChangeSituation(e){
        this.setState(
            {
                valueSituation: e.target.value
            }
        )
    }
    handleChangeTense(e){
        this.setState(
            {
                valueTense: e.target.value
            }
        )
    }
    

    render() {
        return (
            <List mediaList inset>
                <ListItem title="Preference" groupTitle />
                <ListItem
                    title="Situation"
                    after={this.state.valueSituation}
                    smartSelect
                    smartSelectParams={{ openIn: 'sheet' }}
                >
                    <select name="situation" defaultValue="Formal" onChange={this.handleChangeSituation}>
                        <option value="Formal">Formal</option>
                        <option value="Casual">Casual</option>
                    </select>
                </ListItem>

                <ListItem
                    title="TargetAge"
                    after={this.state.valueTarget}
                    smartSelect
                    smartSelectParams={{ openIn: 'sheet' }}
                >
                    <select name="targetage" defaultValue="21-30" onChange={this.handleChangeTarget}>
                        <option value="0-10">0-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21-30">21-30</option>
                        <option value="31-40">31-40</option>
                        <option value="41-50">41-50</option>
                        <option value="50+">50+</option>
                    </select>
                </ListItem>

                <ListItem
                    title="Tense"
                    after={this.state.valueTense}
                    smartSelect
                    smartSelectParams={{ openIn: 'sheet' }}
                >
                    <select name="tense" defaultValue="Present" onChange={this.handleChangeTense}>
                        <option value="Past">Past</option>
                        <option value="Present">Present</option>
                        <option value="Future">Future</option>
                    </select>
                </ListItem>


            </List>
        )
    };

}



export default Preference
