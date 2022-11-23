import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/Layout/layout'
import Sidebar from '../components/Sidebar/sidebar'
import Title from '../components/Title/title'
import styles from '../styles/Home.module.css'

const Index: NextPageWithLayout = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        Welcome to my website, completely built using Next.js with TypeScript!
      </p>
      <div className={styles.social}>
        <Link href='/api/getResume.pdf'>Resume</Link>
        <Link href='https://github.com/Ryanschmied'>GitHub</Link>
        <Link href='https://www.linkedin.com/in/ryanschmied/'>LinkedIn</Link>
      </div>
    </section>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Title />
      <Sidebar />
      {page}
    </Layout>
  )
}