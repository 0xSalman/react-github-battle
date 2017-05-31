import React from 'react';

interface PlayerInputProps {
  id: string,
  label: string,
  onSubmit: Function
}

interface PlayerInputState {
  username: string
}

export class PlayerInput extends React.PureComponent<PlayerInputProps, PlayerInputState> {

  constructor(props: PlayerInputProps) {
    super(props);
    this.state = {
      username: ''
    };
  }

  handleChange = (event: any) => {
    this.setState({
      username: event.target.value
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  };

  render() {

    console.log('PlayerInput rendered');

    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
          Submit
        </button>
      </form>
    );
  }
}
