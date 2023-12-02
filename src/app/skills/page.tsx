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
        <span className={styles.skills_header}>Skills</span>
        <span className={styles.skills_text}>
          <br></br>
          Experience in high-use systems.
          <br></br>
          Android programmer (Java) for over 9 years.
          <br></br>
          PHP programmer for over 8 years.
          <br></br>
          MySQL Relational Database.
          <br></br>
          Development of IOT and Projects on Arduino.
          <br></br>
          Experience with CSS, Jquery and JS.
          <br></br>
          Knowledge of BI.
          <br></br>
          I have already had contact with other languages ​​such as C, C++, C# and Python.
          <br></br>
        </span>



      </div>
    </div>
  );
};

export default Sobre;
