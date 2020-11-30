import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    }
  }

  setChannel(name) {
    let channels = this.state.channels;
    channels.push({ id: channels.length + 1, name });
    this.setState({channels});
  }

  addChannel(activeChannel) {
    this.setState({ activeChannel })
  }

  render() {
    return (
      <div>
        <ChannelSection 
          channels={this.state.channels}
          setChannel={this.setChannel.bind(this)}
          addChannel={this.setChannel.bind(this)}
        />
      </div>
    );
  }
}

App.propTypes = {}

export default App;
