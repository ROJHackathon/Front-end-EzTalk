import React from 'react';

class Avatar extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="avatar">
        <div className="portrait"></div>
        <div className="user-name">Carwyn Denton</div>
      </div>
    )
  };

}

export default Avatar;