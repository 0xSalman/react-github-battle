import React from 'react';

interface PlayerPreviewProps {
  id: string,
  avatar: string,
  username: string,
  onReset: Function
}

export class PlayerPreview extends React.PureComponent<PlayerPreviewProps, undefined> {

  onReset = () => {
    this.props.onReset(this.props.id);
  };

  render() {

    console.log('PlayerPreview rendered');

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
        <button
          className='reset'
          onClick={this.onReset}>
          Reset
        </button>
      </div>
    );
  }
}
