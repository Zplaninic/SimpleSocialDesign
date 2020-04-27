import styles from '../styles/Container.module.scss'
import Profile from '../components/Profile'
import ShareImpact from '../components/ShareImpact'
import FeedNews from '../components/FeedNews'
import Wallet from '../components/Wallet'
import HistoryTransaction from '../components/HistoryTransaction'
import Badge from '../components/Badge'

const Container = () => (
  <div className={styles.mainContainer}>
    <div className={styles.containterRow}>
      <div className={styles.Column1Row13}>
        <Profile></Profile>
      </div>
      <div className={styles.Column2Row12}>
        <ShareImpact></ShareImpact>
      </div>
      <div className={styles.Column3Row13}>
        <Wallet></Wallet>
      </div>
      <div className={styles.Column2Row25}>
        <FeedNews
          avatar="https://www.w3schools.com/w3images/avatar6.png"
          name="Carl Calrson"
          cycled="20"
          currency="5"
          image="https://www.careeraddict.com/uploads/article/55294/businessman-riding-bike.jpg"
          comment="How much did you cycle today"
        ></FeedNews>
        <FeedNews
          avatar="https://www.w3schools.com/w3images/avatar2.png"
          name="Bob Dylan"
          cycled="40"
          currency="10"
          image="https://cdn.shopify.com/s/files/1/0028/2784/5721/articles/105_aa0a16bf-1838-44b8-8744-ab08e9e12644.jpg?v=1563407551"
          comment="What a sunny day to cycle "
        ></FeedNews>
        <FeedNews
          avatar="https://www.w3schools.com/w3images/avatar6.png"
          name="Ozzy Osbourne"
          cycled="40"
          currency="10"
          image="https://www.eider.com/media/community/news/eider-news-commuting/principale.jpg"
          comment="What a great day to cycle"
        ></FeedNews>
      </div>
      <div className={styles.Column3Row36}>
        <HistoryTransaction></HistoryTransaction>
      </div>
      <div className={styles.Column1Row35}>
        <Badge></Badge>
      </div>
    </div>

  </div>

)

export default Container
