import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Detail from "./Detail";
import Photogallery from "./Photogallery";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" children={<Photogallery />} />
        <Switch>
          <Route path="/Details" children={<Detail />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
