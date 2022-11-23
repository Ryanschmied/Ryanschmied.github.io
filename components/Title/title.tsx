import styles from './title.module.css'
import Link from 'next/link'

export default function Title() {
  return (
    <div className={styles.title}>
        <Link href="/" className={styles.name}>
            Ryan Schmied&apos;s Page
        </Link>
    </div>
  )
}