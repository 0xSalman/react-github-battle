import React from 'react';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

interface LoadingProps {
  text?: string
  speed?: number
}

interface LoadingState {
  text: string
}

export class Loading extends React.Component<LoadingProps, LoadingState> {

  interval: number;

  constructor(props: LoadingProps) {
    super(props);
    this.state = {
      text: props.text || 'Loading'
    }
  }


  componentDidMount() {

    const stopper = this.props.text + '...';

    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text || 'Loading'
        });
      } else {
        this.setState((prevState) => {
          return {
            text: prevState.text + '.'
          };
        })
      }
    }, this.props.speed || 300);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}
