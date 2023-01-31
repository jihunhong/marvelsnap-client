import { BsFillEnvelopeFill, BsGithub } from 'react-icons/bs';
import { FaDiscord, FaHeart } from 'react-icons/fa';
import * as S from './style';

const Footer = () => {
  return (
    <S.FooterContainer>
      <div>
        <div className="about">
          <p>Developed by sako</p>
          <div className="contact">
            <a href="https://github.com/jihunhong/marvelsnap-client">
              <BsGithub size={12} />
            </a>
          </div>
        </div>
        <div className="describe">
          <p>
            The literal and graphical information presented on this site about Marvel Snap, including card images and card text, Marvel Heroes, The Marvel Snap CCG, and The Marvel Snap CCG Art and its
            trademarks are ©2022 Marvel. This website is not produced by, endorsed by, supported by, or affiliated with Marvel.
          </p>
          <span>All other content © 2022–2023 MarvelSnap.</span>
        </div>
        <div className="links">
          <a href="mailto:redgee49@gmail.com" rel="noreferrer noopener">
            <BsFillEnvelopeFill size={20} />
          </a>
          <a href="https://discord.gg/2hb3frmA" target="_blank" rel="noreferrer noopener">
            <FaDiscord size={21} />
          </a>
          <a href="https://toon.at/donate/638107584926564794" target="_blank" rel="noreferrer noopener">
            <FaHeart size={20} color="#fb0082" />
          </a>
        </div>
      </div>
    </S.FooterContainer>
  );
};

export default Footer;
