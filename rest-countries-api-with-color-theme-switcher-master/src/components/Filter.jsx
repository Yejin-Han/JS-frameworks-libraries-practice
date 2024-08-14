import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/components/filter.module.css';

const Filter = ({ onFilter }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Filter by Region');
  const regions = ['Africa', 'Americas', 'Antarctic', 'Antarctic Ocean', 'Asia', 'Europe', 'Oceania', 'Polar'];

  const handleFilterOpen = () => {
    setShowOptions(!showOptions);
  };

  const handleFilterBlank = () => {
    setSelectedRegion('Filter by Region');
    onFilter('');
    setShowOptions(false);
  }

  const handleFilterSelect = (region) => {
    setSelectedRegion(region);
    onFilter(region);
    setShowOptions(false);
  }

  return (
    <div className={styles.filter}>
      <div className={`${styles.filterSelected} ${showOptions ? styles.isOpen : ''}`} onClick={handleFilterOpen}>
        <span className="filter-selected-value">{selectedRegion}</span> <FontAwesomeIcon icon={faChevronDown} className={styles.filterIcon} />
      </div>
      
      <div className={`${styles.filterWrap} ${showOptions ? styles.isOpen : ''}`}>
        <div className={styles.filterInner}>
          <ul className={styles.filterList}>
            <li className={styles.filterItem} onClick={handleFilterBlank}>Filter by Region</li>
            {regions.map((region) => {
              return <li className={styles.filterItem} key={region} onClick={() => handleFilterSelect(region)}>{region}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;