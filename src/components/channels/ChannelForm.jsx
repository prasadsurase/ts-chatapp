import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.channelRef = React.createRef();
  }

  onSubmit(e) {
    e.preventDefault();
    let name = this.channelRef.current.value
    this.props.addChannel(name);
    this.channelRef.current.value = ""
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type='text' ref={this.channelRef} />
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm;
