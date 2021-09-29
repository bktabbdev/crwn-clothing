import "./App.css";

import HomePage from "./pages/homepage/HomePage.component";
import { Switch, Route } from "react-router";

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
