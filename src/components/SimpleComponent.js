import React, { Component } from "react"

export default class SimpleComponenet extends Component {
  constructor(props) {
    super()
    this.state = {
      mood: props.mood || "happy"
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }

  handleClick = e => {
    this.toggleMood()
  }

  toggleMood = () => {
    let newMood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({mood: newMood})
  }
}