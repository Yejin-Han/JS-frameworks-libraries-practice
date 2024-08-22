import { useState } from 'react';
import axios from 'axios';
import LinkList from './LinkList';
import { UrlShortenerContainer, UrlInner, Form, FormBg, InputWrap, UrlInput, ErrorMsg, BtnShorten } from '../assets/styles/UrlShortenerStyles';

const UrlShortener = ({ addLink, links }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);

  /* const apiUrl = import.meta.env.VITE_API_URL; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!url) {
      setError(true);
      return;
    }

    try {
      const res = await axios.post('https://cleanuri.com/api/v1/shorten', { url: url }); // data 속성에 url이라는 key에 url값을 담은 객체를 전달
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
            <FormBg />
          </Form>
        </UrlInner>
      </UrlShortenerContainer>
      {(links.length > 0) && <LinkList links={links} />}
    </>
  );
}

export default UrlShortener;