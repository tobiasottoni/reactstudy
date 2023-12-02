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
        <span className={styles.projects_header}>Projects</span>
        <span className={styles.projects_text}>
          <br></br>
          Diji - System for Insurance Brokers
          <br></br>
          SysToldos - System for managing awning companies
          <br></br>
          HelpVick - Disclosure Text Creator for Posts (Before GPT)
          <br></br>
          Ecorotas - ERP System for Fleet Control
          <br></br>
          Online Naval Battle - Online Game in PHP, Mysql and JQuery
          <br></br>
          Akitem - Android Application and Supermarket Offers Web
          <br></br>
          Din Din App - Quiz Style Android App
          <br></br>
          Space Battle Madness - Android Game
          <br></br>
          Battle of Kings - Android Game
          <br></br>
          Automatic SEO System in PHP for Websites
          <br></br>
          Michelangelo - WordPress Plugin
          <br></br>
          Timed WordPress Notifications - WordPress Plugin
          <br></br>
          and others...
        </span>

      </div>

    </div>
  );
};

export default Sobre;
