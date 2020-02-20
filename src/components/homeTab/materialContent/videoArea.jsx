import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../../../css/player.css'
import screenfull from 'screenfull'
import { findDOMNode } from 'react-dom'

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
  Input,
  Range
} from 'framework7-react';
import axios from 'axios';

export default class Player extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

  }


  



  render() {

    let playIcon = <Icon f7="play" color="white" />
    let pauseIcon = <Icon f7="pause" color="white" />
    
    return (

      <div className='player-wrapper'>
        <ReactPlayer
          ref={this.ref}
          url={this.props.material.url}
          // url='https://media.upv.es/resources/imported/polimedia/92c708a3-2e1c-284e-bdcf-66b1f783ca54/polimedia/polimedia_muxed.mp4'
          className='react-player'
          width='100%'
          height='100%'
          controls={true}
        />

      </div>
    )
  }
}