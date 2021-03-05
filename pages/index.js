import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { useState } from 'react'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/home.module.css'


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>

      <section className="">
        <h2 className={`text-center font-bold text-lg mt-2 mb-8 ${styles.title}`}>Personal Blog and Study Notes</h2>
        <ul>
          {allPostsData.map(({ id, date, title, desc }) => (
            <li key={id} className="mb-4">
              <Link href={`/posts/${id}`}>
                <p className="text-xl cursor-pointer">
                  {title}
                </p>
              </Link>
              <p>
                {desc}
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
