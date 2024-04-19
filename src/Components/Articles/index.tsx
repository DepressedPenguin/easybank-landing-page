import styles from "./articles.module.scss";

import article_img from "../../assets/articles_img/image-currency.jpg";
import article_res from "../../assets/articles_img/image-restaurant.jpg";
import article_plane from "../../assets/articles_img/image-plane.jpg";
import article_conf from "../../assets/articles_img/image-confetti.jpg";

export default function Articles() {
  return (
    <>
      <div className={styles.headline_articles}>
        <h1>Latest Articles</h1>
      </div>
      <div className={styles.articles_section}>
        <div className={styles.box_article}>
          <div className={styles.article_info_img}>
            <img src={article_img} alt="article img" />
          </div>
          <div className={styles.article_info_deatils}>
            <small>By claire Robinson</small>
            <h4 className={styles.article_title}>
              Receive money in any
              <br />
              currency with no fees
            </h4>
            <p>
              the world is getting smalller and we're becoming more mobile. So
              why should you be forced to onlu receive money in a single...
            </p>
          </div>
        </div>
        <div className={styles.box_article}>
          <div className={styles.article_info_img}>
            <img src={article_res} alt="restaurant img" />
          </div>
          <div className={styles.article_info_deatils}>
            <small>By Wilson Hutton</small>
            <h4 className={styles.article_title}>
              Treat yourself without worrying about money
            </h4>
            <p>
              Our simple budgeting featutre allows you to separate out your
              spending and set realistic limits each month. That means you...
            </p>
          </div>
        </div>
        <div className={styles.box_article}>
          <div className={styles.article_info_img}>
            <img src={article_plane} alt="plane img" />
          </div>
          <div className={styles.article_info_deatils}>
            <small>By Wilson Huton</small>
            <h4 className={styles.article_title}>
              Take your Easybank card wherever you go
            </h4>
            <p>
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're aboard. We'll even show you...
            </p>
          </div>
        </div>
        <div className={styles.box_article}>
          <div className={styles.article_info_img}>
            <img src={article_conf} alt="confetti img" />
          </div>
          <div className={styles.article_info_deatils}>
            <small>By calire Robinson</small>
            <h4 className={styles.article_title}>
              Our invite-only Beta accounts are now live!
            </h4>
            <p>
              After a lot of hard work by the whole team. we're excited to lunch
              our closed beta. it's easy to request and invite though the
              site...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
