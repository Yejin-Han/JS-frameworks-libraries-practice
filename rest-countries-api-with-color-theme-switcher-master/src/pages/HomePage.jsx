import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from '../assets/css/components/home.module.css';

import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const { countries } = useOutletContext();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    let filtered = countries;

    if(searchTerm) {
      filtered = filtered.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if(selectedRegion) {
      filtered = filtered.filter(country => country.region === selectedRegion);
    }

    setFilteredCountries(filtered);
  }, [searchTerm, selectedRegion, countries]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="home inner">
      <div className={styles.topArea}>
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleFilter} />
      </div>
      <ul className={styles.countryList}>
        {filteredCountries.map((country) => {
          return (
            <li className={styles.countryItem} key={country.alpha3Code}>
              <CountryCard country={country} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;