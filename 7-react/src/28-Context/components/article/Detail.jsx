import React, { useState } from 'react'
import request from '../../tools/request'
import { Link, useParams } from 'react-router-dom'

export default function Detail () {
  const [article, setArticle] = useState({})

  const { id } = useParams()

  request(`/api/article/${id}`).then(({ data }) => setArticle(data))

  return (
    <div className='box content'>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <hr />
      <Link to='/article'>Back to list</Link>
    </div>
  )
}
