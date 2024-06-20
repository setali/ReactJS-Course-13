import React from 'react'
import axios from 'axios'
import Main from '../../layouts/Main'
import Link from 'next/link'

export default function Posts ({ posts }) {
  return (
    <Main>
      <h2>Posts list</h2>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getStaticProps () {
  const { data } = await axios('https://jsonplaceholder.typicode.com/posts')

  console.log('===============> Posts', data.length)

  return {
    props: {
      posts: data
    },
    revalidate: 60
  }
}
