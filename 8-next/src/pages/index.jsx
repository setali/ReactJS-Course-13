import Main from '@/layouts/Main'
import Head from 'next/head'

export default function Home (props) {
  console.log(props)
  return (
    <Main>
      <Head>
        <title>Anisa | NextJS Course</title>
      </Head>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fugiat, et
        voluptatem hic totam illo neque ex nostrum officia aspernatur nisi
        quisquam corrupti. Hic voluptatum nam nobis quo, minus ratione.
      </p>
    </Main>
  )
}
