import styles from '../../styles/Home.module.css'
import LottieComp from "../components/Lottie/Lottie";

export default function Home() {
  return (
    <div className={styles.container}>
      <div style={{margin: '0 auto', width: 300, height: 300}}>
        <LottieComp/>
      </div>
    </div>
  )
}
