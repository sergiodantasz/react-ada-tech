import articleImg from "../../assets/images/article.jpg";
import "./styles.css";

export function Article({ title, provider, description }) {
  return (
    <article>
      <figure>
        <img src={articleImg} alt="Article cover." />
      </figure>
      <div className="article-data">
        <h2>{title}</h2>
        <span>{provider}</span>
        <p>{description}</p>
      </div>
    </article>
  );
}
