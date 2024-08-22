import { useState, useEffect } from 'react';
import axios from 'axios';
import LinkList from './LinkList';
import { UrlShortenerContainer, UrlInner, Form, FormBg, InputWrap, UrlInput, ErrorMsg, BtnShorten } from '../assets/styles/UrlShortenerStyles';

import bgShortenMobile from '../assets/images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../assets/images/bg-shorten-desktop.svg';

const UrlShortener = ({ addLink, links }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [bgUrl, setBgUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!url) {
      setError(true);
      return;
    }

    try {
      const res = await axios.post('/api/v1/shorten', { url: url }); // data 속성에 url이라는 key에 url값을 담은 객체를 전달
      addLink({ original: url, short: res.data.result_url });
      setUrl('');
      setError(false);
    } catch(err) {
      setUrl('');
      setError(true);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  }

  const handleResize = () => {
    if (window.innerWidth >= 769) {
      setBgUrl(bgShortenDesktop);
    } else {
      setBgUrl(bgShortenMobile);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // 초기값 설정
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <UrlShortenerContainer>
        <UrlInner>
          <Form onSubmit={handleSubmit}>
            <InputWrap>
              <UrlInput type="text" value={url} onChange={handleChange} $error={error} placeholder="Shorten a link here..." />
              {error && <ErrorMsg>Please add a link</ErrorMsg>}
            </InputWrap>
            <BtnShorten type="submit">Shorten It!</BtnShorten>
            <FormBg $bg={bgUrl} />
          </Form>
        </UrlInner>
      </UrlShortenerContainer>
      {(links.length > 0) && <LinkList links={links} />}
    </>
  );
}

export default UrlShortener;