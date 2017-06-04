import React from 'react';

interface PlayerPreviewProps {
  avatar: string,
  username: string
}

export class PlayerPreview extends React.PureComponent<PlayerPreviewProps, undefined> {

  render() {

    return (
      <div>
        <div className='column'>
          <img
            className='avatar'
            src={this.props.avatar}
            alt={'Avatar for ' + this.props.username}
          />
          <h2 className='username'>@{this.props.username}</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}
