import React from 'react';
import {PlayerInput} from './PlayerInput';
import {PlayerPreview} from './PlayerPreview';
import {Link} from 'react-router-dom';

interface BattleState {
  playerOneName: string,
  playerTwoName: string,
  playerOneImage: string | null,
  playerTwoImage: string | null,
}

export class Battle extends React.Component<any, BattleState> {

  constructor(props: any) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }
  }

  handleSubmit = (id: string, username: string) => {
    this.setState(() => {
      const img = username ? `https://github.com/${username}.png?size=200` : null;
      return {...this.state, [id + 'Name']: username, [id + 'Image']: img};
    });
  };

  handleReset = (id: string) => {
    this.handleSubmit(id, '');
  };

  render() {

    const {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
          <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit}
          />}

          {playerOneImage !== null &&
          <PlayerPreview avatar={playerOneImage} username={playerOneName}>
            <button className='reset' onClick={this.handleReset.bind(null, 'playerOne')}>
              Reset
            </button>
          </PlayerPreview>}

          {!playerTwoName &&
          <PlayerInput id='playerTwo'
                       label='Player Two'
                       onSubmit={this.handleSubmit}
          />}

          {playerTwoImage !== null &&
          <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
            <button className='reset' onClick={this.handleReset.bind(null, 'playerTwo')}>
              Reset
            </button>
          </PlayerPreview>}
        </div>

        {playerOneImage && playerTwoImage &&
        <Link
          className='button'
          to={{
            pathname: this.props.match.url + '/results',
            search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
          }}>
          Battle
        </Link>}
      </div>
    );
  }
}
