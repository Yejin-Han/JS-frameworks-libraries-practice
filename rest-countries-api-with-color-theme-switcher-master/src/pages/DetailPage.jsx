import { Link, useParams, useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/components/detail.module.css';

const DetailPage = () => {
  const { name } = useParams();
  const { countries } = useOutletContext();
  const country = countries.find((c) => c.name === name);

  return (
    <div className={`${styles.detail} ${styles.inner}`}>
      <Link to="/" className={styles.btnBack}><FontAwesomeIcon icon={faArrowLeft} className={styles.btnBackIcon} /> Back</Link>
      <div className={styles.detailWrap}>
        <div className={styles.imgWrap}>
          <img src={country.flags.svg} alt={`${country.name} flag`} className={styles.detailImg} />
        </div>
        <div className={styles.detailInfo}>
          <h2 className={styles.detailName}>{country.name}</h2>
          <div className={styles.detailCon}>
            <div className={styles.detailSubCon}>
              <p className={styles.detailItem}><strong>Native Name:</strong> {country.nativeName}</p>
              <p className={styles.detailItem}><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p className={styles.detailItem}><strong>Region:</strong> {country.region}</p>
              <p className={styles.detailItem}><strong>Sub Region:</strong> {country.subregion}</p>
              {country.capital && <p className={styles.detailItem}><strong>Capital:</strong> {country.capital}</p>}
            </div>
            <div className={styles.detailSubCon}>
              <p className={styles.detailItem}><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
              {country.currencies && <p className={styles.detailItem}><strong>Currencies:</strong> {country.currencies.map(c => c.name).join(', ')}</p>}
              <p className={styles.detailItem}><strong>Languages:</strong> {country.languages.map(c => c.name).join(', ')}</p>
            </div>
          </div>
          {country.borders && (
            <div className={styles.borderCountries}>
              <h3 className={styles.borderCountriesTitle}>Border Countries:</h3>
              <div className={styles.borderCountriesList}>
                {country.borders.map((border) => {
                  return (
                    <Link key={border} to={`/country/${countries.find(c => c.alpha3Code === border)?.name}`} className={styles.borderCountriesItem}>
                      {countries.find(c => c.alpha3Code === border)?.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;