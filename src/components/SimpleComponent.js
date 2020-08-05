import React, {Component} from 'react'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
    mood: "happy" }
  }

  handleClick = () => {
    const mood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({mood})
  }

  render() {
    return (
      <div
        mood={this.state.mood}
        onClick={this.handleClick} >
      </div>
    )
  }
}

export default SimpleComponent