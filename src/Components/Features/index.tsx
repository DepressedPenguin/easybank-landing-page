import styles from "./features.module.scss";

// IMPORTT FEATURES IMGS
import online_banking_img from "../../assets/imgs/icon-online.svg";
import simple_budget from "../../assets/imgs/icon-budgeting.svg";
import onbarding_img from "../../assets/imgs/icon-onboarding.svg";
import open_api from "../../assets/imgs/icon-online.svg";

export default function Features() {
  return (
    <>
      <section id="features" className={styles.features_section}>
        <div className={styles.box_feature}>
          <img
            className={styles.img_feature}
            src={online_banking_img}
            alt="online banking"
          />
          <h1>Online Banking</h1>
          <p>
            Our modern web and mobile
            <br />
            applications allow you to keep
            <br />
            track of your finances wherever you <br />
            are in the world.
          </p>
        </div>
        <div className={styles.box_feature}>
          <img
            className={styles.img_feature}
            src={simple_budget}
            alt="simple budget"
          />
          <h1>Simple Budgeting</h1>
          <p>
            See exactly where your money
            <br />
            goes each month. Receive
            <br />
            notifications when you're close to
            <br />
            hitting your limits.
          </p>
        </div>
        <div className={styles.box_feature}>
          <img
            className={styles.img_feature}
            src={onbarding_img}
            alt="onbarding img"
          />
          <h1>Fast Onboarding</h1>
          <p>
            We don't do branches. Open your
            <br />
            account in minutes online and start taking control of your finances
            <br />
            right away.
          </p>
        </div>
        <div className={styles.box_feature}>
          <img className={styles.img_feature} src={open_api} alt="open api" />
          <h1>Open API</h1>
          <p>
            Manage your saving, investements,
            <br />
            pension, and much more from one account. Tracking your money has
            <br />
            never been easier.
          </p>
        </div>
      </section>
    </>
  );
}
