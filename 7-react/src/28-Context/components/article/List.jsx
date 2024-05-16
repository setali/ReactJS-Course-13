import React, { useState } from 'react'
import request from '../../tools/request'
import { Link } from 'react-router-dom'

export default function List () {
  const [articles, setArticles] = useState([])

  request('/api/article').then(({ data }) => setArticles(data))

  return (
    <div className='box content'>
      <h2>Article list</h2>
      <ol>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
