import React from 'react'
import Main from '../../layouts/Main'
import axios from 'axios'

export default function Post ({ post = {} }) {
  return (
    <Main>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Main>
  )
}

export async function getStaticPaths () {
  //   const paths = [
  //     { params: { id: '1' } },
  //     { params: { id: '2' } },
  //     { params: { id: '3' } }
  //   ]

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts`
  )

  posts.length = 5

  const paths = posts.map(post => ({ params: { id: String(post.id) } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps ({ params: { id } }) {
  console.log('id:', id)
  const { data } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  return {
    props: { post: data },
    revalidate: 5
  }
}
