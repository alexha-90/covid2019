import React, { useState, useEffect } from "react";
import get from "lodash/get";

import { NEWS_API } from "../../api/endpoints";
import { easternTimeZoneFormatter } from "../../util";
import "./style.scss";
//============================================================================//

function displayContent(newsArticles) {
  return (
    <ul>
      {newsArticles.map(article => {
        // necessary hack 1) Resp. includes [+123 chars..." for some reason
        // necessary hack 2) Resp.content can be null sometimes
        let content = get(article, "content", "");
        if (content) content = content.split("[+")[0];

        // convert from UTC to nicely formatted US (EST)
        let displayPublishDate = "";
        const apiPublishDate = get(article, "publishedAt", "");
        if (apiPublishDate) {
          displayPublishDate = easternTimeZoneFormatter(apiPublishDate);
        }
        return (
          <li key={article.url + "-" + article.publishedAt}>
            <div className="headline">
              <a href={article.url}>{get(article, "title", "")}</a>
              <span>{displayPublishDate}</span>
            </div>
            <div className="image-and-content">
              <img src={get(article, "urlToImage", "")} alt={get(article, "source.name", "")} />
              <p>{content}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const News = () => {
  useEffect(() => {
    fetch(NEWS_API)
      .then((response) => {
        // lazy catch but will work for this context
        if (response.status !== 200) {
          throw new Error(response.statusText)
        }
        return response.json();
      })
      .then(data => {
        setData(data.articles);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <section className="news-container centered-content">
        <h1 className="header">Latest News</h1>
        Failed to retrieve data. Please try again later.
      </section>
    )
  }
  return (
    <section className="news-container centered-content">
      <h1 className="header">News</h1>
      {(data.length === 0) ? "Loading..." : displayContent(data)}
      <div className="attribution">Powered by News API</div>
    </section>
  )
};


export default News;
