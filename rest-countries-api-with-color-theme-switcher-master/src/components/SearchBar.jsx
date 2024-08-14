import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/components/searchbar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchBar}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
      <input type="text" className={styles.searchInput} placeholder="Search for a country..." onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar;