import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

class ChannelSection extends Component {
  render() {
    return (
      <div>
        <ChannelList channels={this.props.channels} setChannel={this.props.setChannel.bind(this)} />
        <ChannelForm addChannel={this.props.addChannel.bind(this)} />
      </div>
    );
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired
}

export default ChannelSection;
