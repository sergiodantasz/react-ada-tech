import { Component } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ArticleList } from "./components/ArticleList/ArticleList";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ArticleList />
      </>
    );
  }
}
