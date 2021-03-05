import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import styles from '../../styles/post.module.css'
import { useAppCtx } from '../../components/context/state'

export default function Post({ postData }) {
  return (
    <Layout className={styles.post}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <p className="text-center font-semibold text-xl">
        {postData.title}
      </p>
      <p className="text-center text-xs mb-16">
        {postData.date}
      </p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}


//
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


