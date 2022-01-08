import "./App.scss";
import Home from "./components/home/Home";
import About from "./screens/About";
import FAQ from "./screens/FAQ/FAQ";
import Tracklist from "./screens/tracklist/Tracklist";
import Terms from "./screens/Terms";
import Privacy from "./screens/Privacy";
import Invite from "./screens/Invite";
import Contact from "./screens/Contact";
import Signupsuccess from "./screens/Signupsuccess";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Signupsuccess />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
