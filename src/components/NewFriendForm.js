import React from 'react'
import PropTypes from 'prop-types'

class NewFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      frequency:"",
      lastSeen:"",
      likesDislikes:""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateFriend(this.state);
    this.setState({ name:"", frequency:"", lastSeen:"", likesDislikes:""})
  };

  render () {
    return(
      <form className="form-inline">
        <label className="sr-only" for="name">Friend's Name</label>
        <input onChange={this.handleChange} type="text" className="form-control" name="name" placeholder="Friend's Name" value={this.state.name} />

        <label className="sr-only" for="frequency">Desired Frequency</label>
        <input onChange={this.handleChange} type="number" className="form-control" name="frequency" placeholder="Desired Frequency" value={this.state.frequency} />

        <label className="sr-only" for="lastSeen">Last Seen</label>
        <input onChange={this.handleChange} type="date" className="form-control" name="lastSeen"></input>

        <label className="sr-only" for="likesDislikes">Likes/Dislikes</label>
        <input onChange={this.handleChange} type="text" className="form-control" name="likesDislikes" value={this.state.likesDislikes} placeholder="Friend's Likes/Dislikes"></input>

        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default NewFriendForm;
