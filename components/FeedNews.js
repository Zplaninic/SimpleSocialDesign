import styles from '../styles/FeedNews.module.scss'

const FeedNews = (props) => (
  <div className={styles.feedNewsContainer}>
    <img src={props.avatar} className={styles.imageAvatar}></img>
    <span>{props.currency}</span>
    <h4 className={styles.name}>{props.name}</h4>
    <p className={styles.reach}>Cycled {props.cycled} km</p>
    <hr></hr>
    <img src={props.image} className={styles.imageFeed}></img>
    <p>{props.comment}</p>
  </div>
)

export default FeedNews
