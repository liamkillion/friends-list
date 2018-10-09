import React from 'react'
import PropTypes from 'prop-types'

class NewFriendForm extends React.Component {
  render () {
    this.state={
      name:"",
      frequency:"",
      lastSeen:"",
      likesDislikes:""
    }
    
    return(
      <form className="form-inline" action="/action_page.php">
        <label className="sr-only" for="name">Friend's Name</label>
        <input type="text" className="form-control" id="name" placeholder="Friend's Name">

        <label className="sr-only" for="frequency">Desired Frequency</label>
        <input type="number" className="form-control" id="frequency" placeholder="Desired Frequency">

        <label className="sr-only" for="lastSeen">Last Seen</label>
        <input type="date" className="form-control" id="lastSeen" placeholder="Last Seen">

        <label className="sr-only" for="likesDislikes">Likes/Dislikes</label>
        <input type="text" className="form-control" id="likesDislikes" placeholder="Friend's Likes/Dislikes">

        <button type="submit" className="btn btn-primary" onClick=(console.log)>Submit</button>
      </form>
    )
  }
}

export default NewFriendForm;
