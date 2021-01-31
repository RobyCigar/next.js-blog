import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className="">
        <h2 className="text-center font-bold text-lg mt-2 mb-8">Personal blog and study notes</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-4">
              <a href={`/posts/${id}`}>
                <p className="text-xl">
                  {title}
                </p>
              </a>
              <p>
                {id}
              </p>
              <p className="text-xs">
                {date}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
