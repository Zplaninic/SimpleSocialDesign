import styles from '../styles/Profile.module.scss'

const Profile = () => (
  <div className={styles.profileContainer}>
    <h3>My name</h3>
    <p className={styles.profileImageContainer}>
      <img src ="https://www.w3schools.com/w3images/avatar5.png" className={styles.profileImage}></img>
    </p>
    <hr></hr>
    <p>Programmer</p>
    <p>Company</p>
    <p>Hobby</p>
  </div>
)

export default Profile
