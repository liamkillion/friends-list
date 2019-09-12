import * as React from "react";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import PastHangsList from "./components/PastHangsList";
import FutureHangsList from "./components/FutureHangsList";
import NewFriendForm from "./components/NewFriendForm";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
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
      this.setState({ hangs: response["data"] });
    });
  }

  handleCreateFriend: handleCreateFunction = friend => {
    return services.friends.createNewFriend(friend).then(response => {
      let friendsResponse = response;
      this.setState({ friends: friendsResponse["data"] });
    });
  };

  handleCreateHang: handleCreateFunction = hang => {
    return services.hangs.createNewHang(hang).then(response => {
      let hangsResponse = response;
      this.setState({ hangs: hangsResponse["data"] });
    });
  };

  public render() {
    return (
      <Switch>
        <div className="app container">
          <Header
          // userName={this.state.userName}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <div>
                <SignUpForm />
              </div>
            )}
          />
          <Route
            exact
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
      </Switch>
    );
  }
}

export default App;
// pop out calendar
// make pretty
// auth/oauth
// new routes
// user m/c
// user model has friends, email, id, token, hopefully no password, 2FA,
// rewrite calls to backend
// https://github.com/thoughtbot/clearance
// https://github.com/plataformatec/devise
// https://guides.railsgirls.com/devise
// https://github.com/doorkeeper-gem/doorkeeper
// https://github.com/omniauth/omniauth
// https://github.com/mbleigh/omniauth-jwt
// https://jwt.io/introduction/
// https://reacttraining.com/react-router/core/api/Route
