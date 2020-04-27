import styles from '../styles/ShareImpact.module.scss'

const ShareImpact = () => (
  <div className={styles.shareImpactContainer}>
    <h4 >Share your impact</h4>
    <form>
      <input className={styles.inputImpact}></input>
    </form>
    <button type="button" className={styles.buttonImpact}>Post</button>
  </div>
)

export default ShareImpact
