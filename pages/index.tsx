import Link from 'next/link'
import Head from 'next/head'
import LottieIcon from '../components/lottieIcon'
import githubLottie from '../public/lottieFiles/81356-github-icon.json'
import linkedinLottie from '../public/lottieFiles/81357-linkedin.json'
import styles from '../styles/Home.module.css'

const Index = () => {
  return (
    <div>
      <Head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" async></script>
      </Head>
      <section className={styles.landing}>
        <div className={styles.cssTyping}>
          <h3>Hi, my name is</h3>
          <h1>Ryan Schmied. 👋</h1>
          <p>
            Welcome to my website, built using Next.js, TypeScript and CSS animations! <br></br>
          </p>
        </div>
        <div className={styles.socials}>
          <Link href='https://github.com/Ryanschmied'>
            <LottieIcon jsonFilePath={githubLottie} width={65} height={65} />
          </Link>
          <Link href='https://www.linkedin.com/in/ryanschmied/'>
            <LottieIcon jsonFilePath={linkedinLottie} width={65} height={65}/>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Index
