import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Profile from "./profile";
import Users from "./users";

const Menu = () => {
    return (
        <div className="menu-container">
            <div class="section group">
                <div class="col span_1_of_2">
                    {/*This is column 1 */}
                </div>
                <div class="col span_1_of_2">
                    {/* This is column 2 */}
                </div>
            </div>
            <Router>
                <nav className="menu">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/profile'}>Profile</Link></li>
                        <li><Link to={'/users'}>Users</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={'/about'}>
                        <About />
                    </Route>
                    <Route path={'/profile'}>
                        <Profile />
                    </Route>
                    <Route path={'/users'}>
                        <Users />
                    </Route>
                    <Route path={'/'}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Menu