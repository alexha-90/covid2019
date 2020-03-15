import React, { useState, useEffect } from "react";
import moment from "moment";
import get from "lodash/get";

import { NEWS_API } from "../../api/endpoints";
import "./style.scss";
//============================================================================//

function displayContent(newsArticles) {
  return (
    <ul>
      {newsArticles.map(article => {
        let displayPublishDate = "";
        const apiPublishDate = get(article, "publishedAt", "");
        if (apiPublishDate) {
          displayPublishDate = (moment(apiPublishDate).utcOffset('-0500').format('x'));
          displayPublishDate = new Date(parseInt(displayPublishDate));
          displayPublishDate = moment(displayPublishDate).format("MM/DD/YYYY h:mm A")
        }
        return (
          <li key={article.url + "-" + article.publishedAt}>
            <div className="headline">
              <a href={article.url}>{get(article, "title", "")}</a>
              <span>{displayPublishDate}</span>
            </div>
            <div className="image-and-content">
              <img src={get(article, "urlToImage", "")} alt={get(article, "source.name", "")} />
              <p>{get(article, "content", "")}</p>
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
        // lazy catch
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
