import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/components/header.module.css';

const Header = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Where in the world?</h1>
      <button type="button" className={styles.modeToggle} onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={faMoon} className={styles.icoMoon} />Dark Mode
      </button>
    </header>
  );
};

export default Header;