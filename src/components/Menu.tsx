// components/Menu.tsx
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

const Menu: React.FC = () => {
  return (
    <nav className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link href="/">
           <span className={styles.menuSpan}>About Me</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/training/">
           <span className={styles.menuSpan}>Training</span>
          </Link>
        </li>        
        <li className={styles.menuItem}>
          <Link href="/courses/">
           <span className={styles.menuSpan}>Courses</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/skills/">
           <span className={styles.menuSpan}>Skills</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/publications/">
           <span className={styles.menuSpan}>Publications</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/projects/">
           <span className={styles.menuSpan}>Projects</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact/">
           <span className={styles.menuSpan}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
