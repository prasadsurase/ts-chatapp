import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Channel extends Component {
  render() {
    return (
      <li key={this.props.channel.index}>
        {this.props.channel.name}
      </li>
    );
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired
}

export default Channel;
