import React from 'react'
import PropTypes from 'prop-types'

class NewHangForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      date:"",
      activity:""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateHang(this.props.friend, this.state);
  };

  render () {
    return(
      <form className="form-inline">
        <label className="sr-only" for="date">Activity Date</label>
        <input onChange={this.handleChange} type="date" className="form-control" name="date"></input>

        <label className="sr-only" for="activity">A short description of the activity</label>
        <input onChange={this.handleChange} type="textarea" className="form-control" name="activity" placeholder="A short description of the activity "></input>

        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </form>
    )

  }
}

export default NewHangForm;
