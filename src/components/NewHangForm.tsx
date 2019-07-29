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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const newState = { ...this.state };
    const tagName = event.target.tagName;
    newState[tagName] = newValue;
    this.setState(newState);
  };

  handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.handleCreateHang(this.state);
  };

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
