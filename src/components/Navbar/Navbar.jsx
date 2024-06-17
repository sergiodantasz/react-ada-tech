import { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <figure className="navbar-brand">
            <img src={logo} alt="React's logo." />
            <h1>React News</h1>
          </figure>
          <ul className="navbar-options">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
