import React, {Component} from "react";
export default class DisplayNumber extends Component {
    render() {//내부 바뀌면 다시 render
      return (
        <div>
          <h1>Display Number</h1>
          <input type="text" value={this.props.number} readOnly></input>
        </div>
      )
    }
  }