import { Component } from "react";
import { Article } from "../Article/Article";
import "./styles.css";

export class ArticleList extends Component {
  render() {
    return (
      <section className="articles">
        <Article
          title="Artigo 1"
          provider="NASA"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ratione quisquam magnam vitae minus facere nulla repellendus obcaecati voluptatem illo. Veritatis deserunt fugiat nemo neque atque labore aspernatur maxime nisi!"
        />
        <Article
          title="Artigo 2"
          provider="Vasco"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique minima cupiditate voluptatum quia iste porro debitis qui exercitationem? Tempore alias assumenda magni, laborum dolor et nemo sit voluptate fuga praesentium!"
        />
        <Article
          title="Artigo 3"
          provider="Apple"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum natus ex recusandae quas nihil quibusdam itaque, dolorem asperiores sequi, distinctio ipsam sint officiis ipsa praesentium magni a cumque aliquam! Eligendi!"
        />
        <Article
          title="Artigo 4"
          provider="Microsoft"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe fugit praesentium rerum? Accusamus sunt, ea explicabo ullam quis modi. Quis aperiam libero exercitationem optio veniam minus deserunt soluta necessitatibus."
        />
      </section>
    );
  }
}
