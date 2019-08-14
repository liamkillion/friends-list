import * as React from "react";
import Calendar from "react-calendar";
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

  handleChange(e: React.FormEvent<HTMLInputElement>): void {
    let element = e.target as HTMLInputElement;
    const newState: IState = { ...this.state };
    newState[element.tagName] = element.value;
    this.setState(newState);
  }

  handleDateChange(date: Date | Date[]): void {
    if (date instanceof Array) {
      date = date[0];
    }
    this.setState({ lastDateSeen: date.toISOString() });
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
        <Calendar onChange={this.handleDateChange} className="form-control" />
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
