import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Home'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-xl mx-auto pb-20">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/cat.png"
                className={`${styles.headerImage} rounded-full mt-10`}
                alt="profile pic"
              />
              <h2 className="my-6 text-lg font-bold">ようこそ, ロビ です</h2>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/cat.png"
                    className={`${styles.headerImage} rounded-full my-10`}
                    alt="poto profile"
                  />
                </a>
              </Link>
            </>
          )}
        </header>
        <main>

        {children}


        </main>
        {!home && (
          <div className={`${styles.backToHome}`}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
