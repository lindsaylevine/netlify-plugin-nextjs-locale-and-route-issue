import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello i18n world
        </h1>

        <p className={styles.description}>
          <Link href="/" locale="en">
            <a>EN</a>
          </Link>

          |

          <Link href="/" locale="fr">
            <a>FR</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
