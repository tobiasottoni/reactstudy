// src/pages/index.tsx
import Menu from '../components/Menu';
import styles from '../styles/Pages.module.css';

const Home: React.FC = () => {
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
        <span className={styles.about_header}>About Me</span>
        <span className={styles.about_text}>
          Greetings!<br></br>
          <br></br>
          My name is Tobias Ottoni Birro, i'm from Brazil and especialist in Software Development and Marketing. I start my first contact with coding
          when i was a teenager and from there always i have touch with coding languages and development.
          <br></br>
          I have two books published about php coding and android coding, many products lounched here on Brazil, like apps, games and anothers. Some of those have morethan 20k downloads at playstore.
          I have one project runing on four cityhalls on São Paulo state, and i made it alone. talk with me for more! :)
          <br></br>

        </span>

        <div className={styles.points}>
          <span className={styles.about_header}>Strong Points</span>
          <span className={styles.points_text}>
            Ease of learning new languages ​​and technologies.
            <br></br>
            Lover of studies.
          </span>
        </div>

        <div className={styles.points}>
          <span className={styles.about_header}>Weak Points</span>
          <span className={styles.points_text}>
            Difficulty stopping doing something, even when the odds are against it.
          </span>
        </div>

        <div className={styles.code_languages}>
          <span className={styles.about_header}>Contact With</span>
          <span className={styles.code_languages_text}>
            - Android (Java) More than 9 years <br></br>
            - PHP More than 8 years <br></br>
            - MySQL More than 8 years <br></br>
            - JS  <br></br>
            - Jquery  <br></br>
            - Laravel  <br></br>
            - React  <br></br>
            - C#  <br></br>
            - C++ <br></br>
            - Python  <br></br>
            - Database Design<br></br>
            - AppGameKit (C#)<br></br>
          </span>
        </div>

        <div className={styles.describe_me}>
          <span className={styles.about_header}>Me in few Words</span>
          <span className={styles.describe_me_text}>
            Coder specialist in PHP and Android (Java) with a great knowledge on Mysql and system and applications developments. Lover of studyes and learn new things.
          </span>
        </div>

      </div>
    </div>
  );
};

export default Home;
