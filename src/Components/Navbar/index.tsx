import styles from "./navbar.module.scss";

// IMPORT LOGO
import logo from "../../assets/imgs/logo.svg";

export default function Navbar() {
  return (
    <>
      <header className={styles.main_nav}>
        <nav className={styles.sub_nav}>
          <div className={styles.element_nav_logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.element_nav_ul}>
            <ul className={styles.ul_nav}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={styles.element_nav_button}>
            <button>Request Invite</button>
          </div>
        </nav>
      </header>
    </>
  );
}
