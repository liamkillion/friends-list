import React from 'react'
import PropTypes from 'prop-types'

class NewHangForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      activityDate:"",
      activity:"",
      friendName:this.props.friend.name
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateHang(this.state);
  };

  render () {
    return(
      <form className="form-inline">
        <label className="sr-only" for="activityDate">Activity Date</label>
        <input onChange={this.handleChange} type="date" className="form-control" name="activityDate"></input>

        <label className="sr-only" for="Activity">A short description of the activity</label>
        <input onChange={this.handleChange} type="textarea" className="form-control" name="Activity" placeholder="A short description of the activity "></input>

        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </form>
    )

  }
}

export default NewHangForm;
