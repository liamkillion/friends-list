import * as React from "react";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import PastHangsList from "./components/PastHangsList";
import FutureHangsList from "./components/FutureHangsList";
import NewFriendForm from "./components/NewFriendForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Friend, handleCreateFunction, Hang } from "./interfaces";
import { services } from "./services";
import "./App.css";

interface IProps {}
interface IState {
  friends: Friend[];
  hangs: Hang[];
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { friends: [], hangs: [] };
  }

  // could be refactored to be 1 request
  componentDidMount() {
    services.friends.getFriends().then(response => {
      this.setState({ friends: response["data"] });
    });
    services.hangs.getHangs().then(response => {
      this.setState({ hangs: response });
    });
  }

  // let handleCreateFriend:handleCreateFunction;
  handleCreateFriend: handleCreateFunction = friend => {
    return services.friends.createNewFriend(friend).then(response => {
      let friendsResponse = response;
      this.setState({ friends: friendsResponse });
    });
  };

  handleCreateHang: handleCreateFunction = hang => {
    return services.hangs.createNewHang(hang).then(response => {
      let hangsResponse = response;
      this.setState({ hangs: hangsResponse });
    });
  };

  public render() {
    return (
      <Router>
        <div className="app container">
          <Header
          // userName={this.state.userName}
          />
          <Route
            path="/"
            render={() => (
              <div>
                <FriendsList
                  friends={this.state.friends}
                  hangs={this.state.hangs}
                  handleCreateHang={this.handleCreateHang}
                />
                <NewFriendForm handleCreateFriend={this.handleCreateFriend} />
              </div>
            )}
          />
          <Route
            path="/hangs"
            render={() => (
              <div>
                <PastHangsList
                  friends={this.state.friends}
                  hangs={this.state.hangs}
                  handleCreateHang={this.handleCreateHang}
                />
                <FutureHangsList
                  friends={this.state.friends}
                  hangs={this.state.hangs}
                  handleCreateHang={this.handleCreateHang}
                />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
