// import React from 'react'
import * as React from 'react'
// import PropTypes from 'prop-types'
import {Friend, handleCreateFunction} from "../interfaces"

interface Props {handleCreateHang:handleCreateFunction, friend:Friend}
interface State {friend_id:number, date:string, activity:string, didHang:boolean}

export default class NewHangForm extends React.Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state={
      friend_id:this.props.friend.id,
      date:"",
      activity:"",
      didHang: false
    }
  }
  // https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
  // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
  // https://stackoverflow.com/questions/33846813/typescript-how-to-check-tagname-in-eventtarget
  handleChange(event:KeyboardEvent):void {
    let element = event.target as HTMLInputElement
    const newState = {};
    let newState: object;
    newState[element.tagName] = element.value;
    this.setState(newState);
  }

  handleSubmit(e:MouseEvent):void {
    event.preventDefault();
    this.props.handleCreateHang(this.state);
  };

  render = () => {
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

// export default NewHangForm;
