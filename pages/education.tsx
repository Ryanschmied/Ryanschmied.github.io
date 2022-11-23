import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout/layout'
import Sidebar from '../components/Sidebar/sidebar'
import Title from '../components/Title/title'


const Education: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Education</h2>
      <p>
        This is my education
      </p>
    </section>
  )
}

export default Education

Education.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Title />
      <Sidebar />
      {page}
    </Layout>
  )
}