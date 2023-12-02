// src/pages/sobre.tsx
import Menu from '../../components/Menu';
import styles from '../../styles/Pages.module.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


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
        <span className={styles.contact_header}>Contact</span>
        <span className={styles.contact_text}>
          Contact me!:)
          <br></br><br></br>
          I'm waiting ansious by your contact. Let's chat. Have some doubt about me?
          <br></br><br></br>

        </span>

        <div className={styles.contact_div}>
          <center>
            <FontAwesomeIcon icon={faPhone} className={styles.contact_icons} />
            <span className={styles.about_header}>Phone</span>
            <span className={styles.points_text}>
              ask me on e-mail :)
            </span>
          </center>
        </div>

        <div className={styles.contact_div}>
          <center>
            <FontAwesomeIcon icon={faEnvelope} className={styles.contact_icons} />
            <span className={styles.about_header}>e-mail</span>
            <span className={styles.points_text}>
              dulusoftware@gmail.com
            </span>
          </center>
        </div>

        <div className={styles.contact_div}>
          <center>
            <FontAwesomeIcon icon={faLinkedin} className={styles.contact_icons} />
            <span className={styles.about_header}>LinkedIn</span>
            <span className={styles.points_text}>
              <a href="https://www.linkedin.com/in/tobiasottoni/" target="_blank">
                in/tobiasottoni
              </a>
            </span>
          </center>
        </div>

        <div className={styles.contact_div}>
          <center>
            <FontAwesomeIcon icon={faInstagram} className={styles.contact_icons} />
            <span className={styles.about_header}>Instagram</span>
            <span className={styles.points_text}>
              <a href="https://www.instagram.com/marketingembh/" target="_blank">
                @marketingembh
              </a>
            </span>
          </center>
        </div>


      </div>
    </div>
  );
};

export default Sobre;
