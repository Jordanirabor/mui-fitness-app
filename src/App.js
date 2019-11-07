import React, { Component } from 'react'
import { Paper, Typography, TextField } from '@material-ui/core'

export default class App extends Component {
  state = { exercises: [], title: '' }


  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })


  render() {
    const { title } = this.state
    return (
      <Paper>
        <Typography variant='h2' align='center' gutterBottom>
          Exercises
       </Typography>
        <form>
          <TextField name='title' label='Exercise' value={title} onChange={this.handleChange} margin='normal' />
        </form>
      </Paper>

    )
  }


}