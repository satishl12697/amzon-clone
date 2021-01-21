import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //  Piece of code which runs based on a given condition
  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // any clean up operation go in here...
      unsubscribe();
    };
  }, []);

  console.log("THE USER IS >>> ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* this is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// we need react router for linking to pages
// that is from http://localhost:3000/ to http://localhost:3000/checkout and so on

export default App;
