import { Link } from 'react-router-dom';
import styles from '../assets/css/components/countrycard.module.css';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name}`}>
      <div className={styles.imgWrap}>
        <img src={country.flags.png} alt={`${country.name} flag`} className={styles.countryFlag} />
      </div>
      <div className={styles.countryInfo}>
        <h2 className={styles.countryName}>{country.name}</h2>
        <p className={styles.countryDetail}><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p className={styles.countryDetail}><strong>Region:</strong> {country.region}</p>
        <p className={styles.countryDetail}><strong>Capital:</strong> {country.capital}</p>
      </div>
    </Link>
  );
}

export default CountryCard;