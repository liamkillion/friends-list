import * as React from "react";
import { handleCreateFunction } from "../interfaces";

interface IProps {
  handleCreateFriend: handleCreateFunction;
}
interface IState {
  name: string;
  desiredFrequency: number;
  lastDateSeen: string;
  notes: string;
  [x: string]: string | number | boolean;
}

// class NewFriendForm extends React.Component {
export default class NewFriendForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "",
      desiredFrequency: 0,
      lastDateSeen: "",
      notes: ""
    };
  }

  // https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
  // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
  // https://stackoverflow.com/questions/33846813/typescript-how-to-check-tagname-in-eventtarget
  // https://stackoverflow.com/questions/42081549/typescript-react-event-types?noredirect=1&lq=1
  // https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
  handleChange(e: React.FormEvent<HTMLInputElement>): void {
    let element = e.target as HTMLInputElement;
    const newState: State = { ...this.state };
    newState[element.tagName] = element.value;
    this.setState(newState);
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.props.handleCreateFriend(this.state);
  }

  render() {
    return (
      <div>
        <h5>Add a new friend</h5>
        <form className="form-inline">
          <label className="sr-only" htmlFor="name">
            Friend's Name
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            name="name"
            placeholder="Friend's Name"
            value={this.state.name}
          />

          <label className="sr-only" htmlFor="desiredFrequency">
            Desired Frequency
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            className="form-control"
            name="desiredFrequency"
            placeholder="Desired Frequency"
            value={this.state.desiredFrequency}
          />

          <label className="sr-only" htmlFor="lastDateSeen">
            Last Seen
          </label>
          <input
            onChange={this.handleChange}
            type="date"
            className="form-control"
            name="lastDateSeen"
          />

          <label className="sr-only" htmlFor="notes">
            Likes/Dislikes
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            name="notes"
            value={this.state.notes}
            placeholder="Friend's Likes/Dislikes"
          />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
//
// export default NewFriendForm;
