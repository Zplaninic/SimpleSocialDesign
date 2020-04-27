import styles from '../styles/HistoryTransaction.module.scss'
import CyclingAchievement from '../components/CyclingAchievement'
import DonationAchievment from '../components/DonationAchievment'

const HistoryTransaction = () => (
  <div className={styles.HistroyTransactionConteiner}>
    <CyclingAchievement date="today" km="15" currency="10"></CyclingAchievement>
    <CyclingAchievement date="yesterday" km="20" currency="12"></CyclingAchievement>
    <CyclingAchievement date="Saturday" km="15" currency="10"></CyclingAchievement>
    <DonationAchievment date="Saturday" km="20" currency="120" donation="Coalition for Rainforest Nations"></DonationAchievment>
    <CyclingAchievement date="Friday" km="18" currency="10"></CyclingAchievement>
    <CyclingAchievement date="Friday" km="15" currency="10"></CyclingAchievement>
  </div>
)

export default HistoryTransaction
