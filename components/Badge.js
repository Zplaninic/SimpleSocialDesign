import styles from '../styles/Badge.module.scss'

const Badge = () => (
  <div className={styles.badgeContainer}>
    <h3>Community Hero</h3>
    <p className={styles.badgeImageContainer}>
      <img src="https://image.flaticon.com/icons/svg/1598/1598431.svg"></img>
    </p>
    <div className={styles.progress}>
      <div className={styles.progressBar}></div>
    </div>
    <p>You miss a 30 points to become Earth Guardian </p>
  </div>
)

export default Badge
