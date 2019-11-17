import React, { Component } from 'react';
import CreateReplyForm from '../../form/reply/create';

export default class ReplyButton extends Component {
  state = {
    btnState: false
  }

  handleBtn = () => {
    if (this.state.btnState === false) {
      this.setState({
        btnState: true
      })
    } else {
      this.setState({
        btnState: false
      })
    }
  }

  render() {
    const reply = this.state.btnState === false ? (
      <button onClick={this.handleBtn}>
        답글
      </button>
    ) : (
      <div>
        <CreateReplyForm comment_id={this.props.comment_id} post_id={this.props.post_id}/>
        <button onClick={this.handleBtn}>
          가리기
        </button>
      </div>
    )
    return (
      <div>
        {reply}
      </div>
    )
  }
}