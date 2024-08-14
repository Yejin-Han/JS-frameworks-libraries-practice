import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';

const RootLayout = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('/data/data.json').then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ countries }} />
      </main>
    </>
  );
};

export default RootLayout;