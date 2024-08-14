import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';

const RootLayout = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.PUBLIC_URL}/data/data.json`);
      setCountries(res.data);
    };

    fetchData();
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