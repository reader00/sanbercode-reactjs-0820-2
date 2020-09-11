import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormBuah from "../Tugas-9/tugas9";
import TableBuah from "../Tugas-10/tugas10";
import Timer from "../Tugas-11/timer";
import TableBuahBaru from "../Tugas-12/tugas12";
import TableBaruBuah from "../Tugas-13/tugas13";
import Buah from "../Tugas-14/Buah";
import Theme from "./Theme";

export const WebContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("white");

  const handleActive = (event) => {
    //  event.preventDefault();
    var elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
      el.className = el.className.replace(/\bactive\b/, "");
    });
    event.target.classList.add("active");
  };

  return (
    <WebContext.Provider value={[setTheme]}>
      <Router>
        <div>
          <nav>
            <ul className={theme}>
              <li>
                <Link to="/" className="active" onClick={handleActive}>
                  Tugas 9
                </Link>
              </li>
              <li>
                <Link to="/tugas10" className="" onClick={handleActive}>
                  Tugas 10
                </Link>
              </li>
              <li>
                <Link to="/tugas11" className="" onClick={handleActive}>
                  Tugas 11
                </Link>
              </li>
              <li>
                <Link to="/tugas12" className="" onClick={handleActive}>
                  Tugas 12
                </Link>
              </li>
              <li>
                <Link to="/tugas13" className="" onClick={handleActive}>
                  Tugas 13
                </Link>
              </li>
              <li>
                <Link to="/tugas14" className="" onClick={handleActive}>
                  Tugas 14
                </Link>
              </li>
              <li>
                <Link to="/tugas15" className="" onClick={handleActive}>
                  Tugas 15
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={FormBuah} />
            <Route path="/tugas10" component={TableBuah} />
            <Route path="/tugas11" component={Timer} />
            <Route path="/tugas12" component={TableBuahBaru} />
            <Route path="/tugas13" component={TableBaruBuah} />
            <Route path="/tugas14" component={Buah} />
            <Route path="/tugas15" component={Theme} />
          </Switch>
        </div>
      </Router>
    </WebContext.Provider>
  );
}
