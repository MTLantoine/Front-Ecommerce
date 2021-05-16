import "./App.css";

import HeaderComponent from "./components/header/HeaderComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CorpsComponent from "./components/main/Corps/CorpsComponent";
import NotFoundComponent from "./components/NotFoundComponent/NotFoundComponent";
import ProductPageComponent from "./components/main/ProductPageComponent/ProductPageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={CorpsComponent} />
            <Route
              exact
              path="/product-page/:id"
              component={ProductPageComponent}
            />
            <Route component={NotFoundComponent} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
