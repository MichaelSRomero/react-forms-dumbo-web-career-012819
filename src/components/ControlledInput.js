import React from 'react'

export default class ControlledInput extends React.Component {

  state = {
    firstName: "",
    lastName: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
      </form>
    )
  }
}
