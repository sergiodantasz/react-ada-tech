import { Component } from "react";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";

export class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <figure className="navbar-brand">
            <img src={logoImg} alt="React's logo." />
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
