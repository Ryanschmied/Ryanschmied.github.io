import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout/layout'
import Sidebar from '../components/Sidebar/sidebar'
import Title from '../components/Title/title'
import styles from '../styles/Home.module.css'


const Experience: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Experiences</h2>
      <p>
        These are my experiences
      </p>
      <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Full Stack Developer</h2>
            <h3>TELUS Digital - Fall 2021</h3>
            <ul>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Github actions</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2>Full Stack Engineer</h2>
            <h3>Relay Financial - Fall 2019</h3>
            <ul>
              <li>TypeScript</li>
              <li>React.js and React Native</li>
              <li>SQL</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Experience

Experience.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Title />
      <Sidebar />
      {page}
    </Layout>
  )
}