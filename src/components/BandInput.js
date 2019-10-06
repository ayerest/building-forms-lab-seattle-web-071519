// Add BandInput component
import React, { Component } from 'react'
 

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
  }
  handleOnChange = (event) => {
    let newName = event.target.value
    this.setState({
      name: newName
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })

  }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="name" onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
