// import React from 'react'
import * as React from 'react'
import handleCreateFunction from "../interfaces.ts"

interface Props {handleCreateFriend:handleCreateFunction}
interface State {name:string, desiredFrequency:number,lastDateSeen:string, notes:string}


// class NewFriendForm extends React.Component {
export class NewFriendForm extends React.Component<Props,State> {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      desiredFrequency:"",
      lastDateSeen:"",
      notes:""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let state = this.state
    state.desiredFrequency = parseInt(state.desiredFrequency)
    this.props.handleCreateFriend(this.state);
    this.setState({ name:"", desiredFrequency:"", lastDateSeen:"", notes:""})
  };

  render () {
    return(
      <div>
        <h5>Add a new friend</h5>
          <form className="form-inline">
            <label className="sr-only" for="name">Friend's Name</label>
            <input onChange={this.handleChange} type="text" className="form-control" name="name" placeholder="Friend's Name" value={this.state.name} />

            <label className="sr-only" for="desiredFrequency">Desired Frequency</label>
            <input onChange={this.handleChange} type="number" className="form-control" name="desiredFrequency" placeholder="Desired Frequency" value={this.state.desiredFrequency} />

            <label className="sr-only" for="lastDateSeen">Last Seen</label>
            <input onChange={this.handleChange} type="date" className="form-control" name="lastDateSeen"></input>

            <label className="sr-only" for="notes">Likes/Dislikes</label>
            <input onChange={this.handleChange} type="text" className="form-control" name="notes" value={this.state.notes} placeholder="Friend's Likes/Dislikes"></input>

            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </form>
      </div>
    )
  }
}
//
// export default NewFriendForm;
