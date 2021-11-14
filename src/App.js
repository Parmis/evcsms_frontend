import react from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Stations from "./pages/Stations";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Stations} />
      </Switch>
    </Router>
  );
}

export default App;
