import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel';

class ChannelList extends Component {
  renderChannels(channels) {
    let renderedChannels = [];
    channels.forEach(chan => {
      renderedChannels.push(<Channel channel={chan} setChannel={this.props.setChannel.bind(this)} /> );
    });
    return renderedChannels;
  }

  render() {
    return (
      <ul>
       { this.renderChannels(this.props.channels) }
      </ul>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
}

export default ChannelList;
