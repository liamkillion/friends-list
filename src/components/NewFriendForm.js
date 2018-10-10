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
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCreateFriend(this.state);
  };

  render () {
    return(
      <form className="form-inline" action="/action_page.php">
        <label className="sr-only" for="name">Friend's Name</label>
        <input onChange={this.handleChange} type="text" className="form-control" name="name" placeholder="Friend's Name"></input>

        <label className="sr-only" for="frequency">Desired Frequency</label>
        <input onChange={this.handleChange} type="number" className="form-control" name="frequency" placeholder="Desired Frequency"></input>

        <label className="sr-only" for="lastSeen">Last Seen</label>
        <input onChange={this.handleChange} type="date" className="form-control" name="lastSeen" placeholder="Last Seen"></input>

        <label className="sr-only" for="likesDislikes">Likes/Dislikes</label>
        <input onChange={this.handleChange} type="text" className="form-control" name="likesDislikes" placeholder="Friend's Likes/Dislikes"></input>

        <button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default NewFriendForm;
