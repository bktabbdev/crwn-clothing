import "./App.css";

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
