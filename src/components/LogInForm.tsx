import * as React from "react";

import { handleCreateFunction } from "../interfaces";

interface IProps {
  handleCreateUser: handleCreateFunction;
}
interface IState {
  email: string;
  password: string;
}

export default class LogInForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e: React.FormEvent<HTMLInputElement>): void {
    let element = e.target as HTMLInputElement;
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
          Email Address
        </label>
        <input
          onChange={this.handleChange}
          type="textarea"
          className="form-control"
          name="email"
          placeholder="francis.YM@fbi.gov"
        />
        <label className="sr-only" htmlFor="activity">
          Password
        </label>
        <input
          onChange={this.handleChange}
          type="textarea"
          className="form-control"
          name="activity"
          placeholder="P@$$\/\/0rd"
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Log In
        </button>
      </form>
    );
  };
}
