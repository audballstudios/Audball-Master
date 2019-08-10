import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './routes/Home/Home';


const routes = [
  {
    path: "/tacos",
    component: Home
  }
];

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <Route
            path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </div>
    </Router>
  );
}

export default App;
