import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => (
  <div className={styles.top}>
    <nav>
      <div className={styles.logo}>
        <div>
        LOGO
        </div>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>

)

export default Navbar
