import styles from '../styles/Wallet.module.scss'

const Wallet = () => (
  <div className={styles.WalletContainer}>
    <h4>AVAILABLE</h4>
    <div>
      <img className={styles.imageWallet}src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Wallet_Flat_Icon.svg"></img>
      <div className={styles.currentState}>120 CC </div>
    </div>
    <hr></hr>
    <div className={styles.medio}>
      <button className={styles.topup}>+</button>
      <div className={styles.buttonExplained}>Top up</div>
    </div>
    <div className={styles.medio}>
      <button className={styles.give}>-</button>
      <div className={styles.buttonExplained}>Give</div>
    </div>

  </div>
)

export default Wallet
