import React, { Component } from 'react'

class SharedNote extends Component {
  constructor(props) {
    super(props);
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    const webSocket = new WebSocket("ws://localhost:5432/ws/honeys/28ddef3bc13ff0688e077e1f9433e8fba014ca8026a002550a4adbdda4798294");
    const that = this
    webSocket.onopen = () => {
      that.props.updateText();
    }
    webSocket.onmessage = () => {
      that.props.updateText();
    }
  }

  render() {
    const { text } = this.props
    return (
      <div>
        { text }
      </div>
    )
  }
}

export default SharedNote
