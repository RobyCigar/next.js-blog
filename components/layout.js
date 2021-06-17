import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from 'react';
import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { useAppCtx } from './context/state'


export const siteTitle = 'Home'

export default function Layout({ children, home }) {
  const { darkMode, handleDarkMode } = useAppCtx()

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
          <meta charset="utf-8" />
          <link rel="icon" href="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using next js"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/address-card.svg" />

          <meta name="description" content="Portfolio Web Developer">
          <meta name="keywords" content="HTML, CSS, JavaScript, React, Fullstack, React Native, Graphql, Developer, Software Engineer, Frontend, Backend">
          <meta name="author" content="Rabih Utomo">        
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
              onChange={handleDarkMode}
              checked={darkMode}
              size={80}
              speed={2}
            />
          </div>
          

          <div className="dark:text-blue-100 mx-6"> 
            {children} {/* gk bisa jalan dark mode nya huhu :(*/}
          </div>


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
