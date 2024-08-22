import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { LinkContainer, LinkLists, LinkItem, LinkOri, LinkCreated, LinkShort, BtnCopy } from '../assets/styles/LinkListStyles';

const LinkList = ({ links }) => {
  const [copyText, setCopyText] = useState(null);

  const handleCopyText = (idx) => {
    setCopyText(idx);
    setTimeout(() => setCopyText(null), 2000);
  };

  return (
    <LinkContainer>
      <LinkLists>
        {links.map((link, idx) => {
          return (
            <LinkItem key={idx}>
              <LinkOri>{link.original}</LinkOri>
              <LinkCreated>
                <LinkShort>{link.short}</LinkShort>
                <CopyToClipboard text={link.short}>
                  <BtnCopy onClick={() => handleCopyText(idx)} $isCopied={copyText === idx}>
                    {copyText === idx ? 'Copied!' : 'Copy'}
                  </BtnCopy>
                </CopyToClipboard>
              </LinkCreated>
            </LinkItem>
          );
        })}
      </LinkLists>
    </LinkContainer>
  );
}

export default LinkList;