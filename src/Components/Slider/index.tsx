import styles from "./slider.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// IMPRO BG DESKTOP
import img_desktop_bg from "../../assets/imgs/bg-intro-desktop.svg";
// PHONES TEMPLATAE
import phones_template from "../../assets/imgs/image-mockups.png";
// HAND ARROW
import hand_arrow from "../../assets/imgs/hand_mouse.png";

export default function Slider() {
  return (
    <>
      <div className={styles.main_slider}>
        <div className={styles.split_container_intro}>
          <div className={styles.intro_slider}>
            <div className={styles.headline_intro}>
              <h1>
                Next generation
                <br />
                digital banking
              </h1>
            </div>
            <div className={styles.para_intro}>
              <p>
                Take your financial life online. Your Easybank account
                <br />
                will be a one-stop-shop for spending. saving,
                <br />
                budgeting. inversting, and much more
              </p>
            </div>
            <div className={styles.intro_button}>
              <button>Request Invite</button>
            </div>
          </div>
          <section className={styles.bank_intro}>
            <div className={styles.headline_div}>
              <h1>Why choose Easybank?</h1>
              <a href="#features">
                <img
                  className={styles.arrow_icon}
                  src={hand_arrow}
                  alt="hand arrow"
                />
              </a>
            </div>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </section>
        </div>
        <div className={styles.split_container_template}>
          <img
            className={styles.img_desk_one}
            src={img_desktop_bg}
            alt="desktop bg"
          />
          {/* IMG TEMPLATE PHONES */}
          <img
            className={styles.phones_template}
            src={phones_template}
            alt="phone templates"
          />
        </div>
      </div>
    </>
  );
}
