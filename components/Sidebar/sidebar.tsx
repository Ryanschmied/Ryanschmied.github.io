import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">About Me</Link>
      <Link href="/experiences">Experiences</Link>
      <Link href="/education">Education</Link>
    </nav>
  )
}