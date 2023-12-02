// src/pages/sobre.tsx
import Menu from '../../components/Menu';
import styles from '../../styles/Pages.module.css';

const Sobre: React.FC = () => {
  return (
    <div className={styles.master_div}>
      <Menu />

      <div className={styles.personal_info}>
        <center>
          <img className={styles.profile_pic} src='images/tobias_ottoni.jpg' />
          <span className={styles.profile_name}>Tobias Ottoni Birro</span>
          <span className={styles.profile_job}>Software Developer and Marketing Analyst</span>
          <span className={styles.profile_resume}>Systems Analyst and Developer, Writer, Speaker, Web Developer, Marketing Analyst, Postgraduate Student in Journalism and Robotics Engineering</span>
          <span className={styles.profile_details}>
            Languages:<br></br>
            Portuguese - Native <br></br>
            English - Fluent <br></br>
            Spanish - Fluent<br></br>
            Italian - Basic<br></br>
          </span>
          <span className={styles.profile_details}>Lives in: Brazil</span>
          <img className={styles.brazil_flag} src='images/brasil.jpg' />
        </center>
      </div>

      <div className={styles.extra_info}>
        <span className={styles.publications_header}>Publications</span>
        <span className={styles.publications_text}>
          In my life of coder i have 2 books published here on Brazil. I work first on Android book called here "Dulu - The Android Studio Revealed" on 2016.
          After this i have made the "Dulu - PHP Without Mysteries" on 2017. This two books are made to help the starters on coding to learn.
          But unfortunly after this 2 books i don't haved time yet to write more books.
        </span>

        <div className={styles.publications_div}>
          <center>
            <span className={styles.publications_header}>
              Dulu - The Android Studio Revealed AGBOOK - 2016
            </span>
            <span className={styles.publications_text}>
              <img className={styles.books_cover} src='images/book1.jpg' />
              Year of first publish: 2016
              <br></br>
              Pages: 234
              <br></br>
              Current Avaluation on Kindle: 4,3 (From 5)
            </span>
          </center>
        </div>

        <div className={styles.publications_div}>
          <center>
            <span className={styles.publications_header}>
              Dulu - PHP without Mysteries AGBOOK - 2016
            </span>
            <span className={styles.publications_text}>
              <img className={styles.books_cover} src='images/book2.jpg' />
              Year of first publish: 2017
              <br></br>
              Pages: 169
              <br></br>
              Current Avaluation on Kindle: 4,1 (From 5)
            </span>
          </center>
        </div>

        <span className={styles.publications_text}>
          <br></br>
          <br></br>
          I have another books writed on outher areas...
          <br></br><br></br>
          But how it is not correlated with this theme
          i will not show and mention here. Soon i expect to have more time to write more new books.
        </span>


      </div>
    </div>
  );
};

export default Sobre;
