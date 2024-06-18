import { Component } from "react";
import articleImg from "../../assets/images/article.jpg";
import "./styles.css";

export class Article extends Component {
  render() {
    return (
      <article>
        <figure>
          <img src={articleImg} alt="Article cover." />
        </figure>
        <div className="article-data">
          <h2>{this.props.title}</h2>
          <span>{this.props.provider}</span>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}
