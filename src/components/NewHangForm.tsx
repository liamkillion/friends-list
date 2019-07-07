// import React from 'react'
import * as React from "react";
// import PropTypes from 'prop-types'
import { Friend, handleCreateFunction } from "../interfaces";

interface IProps {
  handleCreateHang: handleCreateFunction;
  friend: Friend;
}
interface IState {
  friend_id: number;
  date: string;
  activity: string;
  didHang: boolean;
  [x: string]: string | number | boolean;
}

export default class NewHangForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      friend_id: this.props.friend.id,
      date: "",
      activity: "",
      didHang: false
    };
  }

  // https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
  // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
  // https://stackoverflow.com/questions/33846813/typescript-how-to-check-tagname-in-eventtarget
  // https://stackoverflow.com/questions/42081549/typescript-react-event-types?noredirect=1&lq=1
  // https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
  handleChange(event: React.FormEvent<HTMLInputElement>): void {
    let element = event.target as HTMLInputElement;
    const newState: IState = { ...this.state };
    newState[element.tagName] = element.value;
    this.setState(newState);
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.props.handleCreateHang(this.state);
  }

  render = () => {
    return (
      <form className="form-inline">
        <label className="sr-only" htmlFor="date">
          Activity Date
        </label>
        <input
          onChange={this.handleChange}
          type="date"
          className="form-control"
          name="date"
        />

        <label className="sr-only" htmlFor="activity">
          A short description of the activity
        </label>
        <input
          onChange={this.handleChange}
          type="textarea"
          className="form-control"
          name="activity"
          placeholder="A short description of the activity "
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  };
}
// spectacle
// export default NewHangForm;
