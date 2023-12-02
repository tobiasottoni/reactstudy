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
        <span className={styles.training_header}>Training</span>
        <span className={styles.training_text}>
          <br></br>
          Degree in Systems Analysis and Development - Unopar - Incomplete
          <br></br>
          <span className={styles.training_why_text}>
            Why i chose this? Is that so simple to explain! I have choose because i love to code.
            Why i dont finish it? I disagree with the method of teaching in this course, they are
            most concern about the versions of the languages and libraries to student record instead
            why don't  teach how to do a good code. And we know versions are always change. Why do
            i record the name and number of versions? But i will choose another post graduation soon
            on the area to do.</span>
          <br></br>
          Degree in Digital Marketing - Unopar - Completed in December 2022
          <br></br>
          <span className={styles.training_why_text}>
            Why i chose this? In this last 15 years i'm always envolved and interested on marketing and sells an how
            can i comunicated with the people and customer actions. I was the person behind the marketing of most of 10
            companies on my community, and beyound this i need to do marketing always on my business and my systems and apps.
          </span>
          <br></br>
          Postgraduate in Digital Journalism - Completion in December 2023
          <br></br>
          <span className={styles.training_why_text}>
            Why i chose this? In life we need to know how comunicate and how to search and pass information with responsability.
            Thinking on this, and my love and live with books and teaching i decide to do journalism to improve this skills on search,
            write, and pass infomation to the people in antother side.
          </span>
          <br></br>
          Postgraduate in Robotics Engineering - Completion in May 2024
          <br></br>
          <span className={styles.training_why_text}>
            Why i chose this? I'm always interested on robots and how this world fuction. Since i was i child i always make lego things,
            planes and cars guided by remote control with games Joysticks :). I have to interest on Arduino and IOT. Thinking on that i choose
            this post graduation course.
          </span>
          <br></br>
        </span>


      </div>
    </div>
  );
};

export default Sobre;
