import React from 'react';

import axios from 'axios/index';

class Avatar extends React.Component {
  constructor() {
    super();

    this.state = {
      username: ""
    }

  }


  componentDidUpdate(propsPrev){
    let url = "https://ez-talk-api-provider.azurewebsites.net/api/get-user/" + this.props.token;
    if(this.props.token != propsPrev.token){
      //console.log("token change")
      axios.get(url).then((res) => {
        //console.log(res.data.name)
        this.setState({username: res.data.name})
      })
    }
  }

  render() {
    return (
      <div className="avatar">
        <div className="portrait"></div>
      <div className="user-name">{this.state.username}</div>
      </div>
    )
  };

}

export default Avatar;