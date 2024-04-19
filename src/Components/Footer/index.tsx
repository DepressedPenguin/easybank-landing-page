import styles from "./footer.module.scss";

// MEDIA ICONS
import facebook_icon from "../../assets/Media_icons/icon-facebook.svg";
import youtube_icon from "../../assets/Media_icons/icon-youtube.svg";
import pinterset_icon from "../../assets/Media_icons/icon-pinterest.svg";
import twitter_icon from "../../assets/Media_icons/icon-twitter.svg";
import instagram_icon from "../../assets/Media_icons/icon-instagram.svg";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer_section}>
        <div className={styles.footer_container}>
          <div className={styles.footer_element_logo}>
            <div className={styles.footer_logo}>
              <p className={styles.logo_bank_p}>EASYBANK</p>
            </div>
            <div>
              <div className={styles.social_footer}>
                <img src={facebook_icon} alt="facebook icon" />
                <img src={youtube_icon} alt="youtube icon" />
                <img src={twitter_icon} alt="twitter icon" />
                <img src={pinterset_icon} alt="pin icon" />
                <img src={instagram_icon} alt="instagram icon" />
              </div>
            </div>
          </div>
          <div className={styles.footer_element_about}>
            <div className={styles.top_footer_ul}>
              <div className={styles.about_us}>About Us</div>
              <div className={styles.about_us}>Contact</div>
              <div className={styles.about_us}>Blog</div>
            </div>
            <div className={styles.bottom_footer_ul}>
              <div className={styles.about_us}>Careers</div>
              <div className={styles.about_us}>Support</div>
              <div className={styles.about_us}>Privacy Policy</div>
            </div>
          </div>
          <div className={styles.footer_element_btn}>
            <button>Request Invite</button>
            <p>@ Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
