import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from 'react';
import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'


export const siteTitle = 'Home'

export default function Layout({ children, home }) {

  const [darkMode, setDarkMode] = useState(false)

  const handleDark = () => {
    setDarkMode(!darkMode)
  }

  return (
  <div className={ darkMode ? "dark" : "null" }>
    <div className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
      <div className="max-w-xs sm:max-w-md lg:max-w-xl mx-auto pb-20">
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
                <h2 className={`title my-6 text-lg font-bold ${styles.title}`}>ようこそ, ロビ です</h2>
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
          <div className={styles.darkMode}>
            <DarkModeToggle
              onChange={handleDark}
              checked={darkMode}
              size={80}
              speed={2}
            />
          </div>
    
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
    </div>
  </div>
  )
}
