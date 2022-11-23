import Head from 'next/head'
import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>    
        <title>Ryan Schmied</title>
        <link rel="icon" type="image/ico" href="public/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}