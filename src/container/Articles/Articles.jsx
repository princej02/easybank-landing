import React from 'react'

import './Articles.css'
import { ARTICLES } from '../../constants/data'

export const ArticleCard = ({ articleImage, author, title, text }) => {
  return (
    <div className="article__card-container">
      <div className="article__card-container_img">
        <img src={articleImage} alt="article" />
      </div>
      <div className="article__card-container_body">
        <span className="card_body-author">By {author}</span>
        <h3 className="card_body-title"><a href={`/`}>{title}</a></h3>
        <p className="card_body-text">{text}</p>
      </div>
    </div>
  )
}

const Articles = () => {
  return (
    <section className="app__article section__padding">
      <h2 className="app__article-title">Latest Articles</h2>
      <div className="app__article-articles stack-x">
        {ARTICLES.map(article => (
          <ArticleCard 
            key={article.id}
            articleImage={article.article_img}
            author={article.author}
            title={article.title}
            text={article.text}
          />
        ))}
      </div>
    </section>
  )
}

export default Articles