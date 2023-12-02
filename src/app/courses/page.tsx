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
        <span className={styles.courses_header}>Courses</span>
        <span className={styles.courses_text}>
          <br></br>
          Fundamentals of the C# Language
          <br></br>
          Java Algorithms - Brazil Mais TI
          <br></br>
          Java Programming Elements
          <br></br>
          Java Programming Logic
          <br></br>
          C# Fundamentals - Clean Code
          <br></br>
          Getting Started with Xamarim.Forms
          <br></br>
          Systems development
          <br></br>
          PHP + MySQL
          <br></br>
          Mobile App Programming Course - Universidad Complutense Madrid
          <br></br>
          Basic Digital Marketing Course - IAB Spain
          <br></br>
          Management and Entrepreneurship - Grow More Brazil
          <br></br>
        </span>

      </div>

    </div>
  );
};

export default Sobre;
