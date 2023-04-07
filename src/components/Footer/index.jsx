import fb from '../../../public/fb.svg';
import insta from '../../../public/insta.svg';
import Linkedin from '../../../public/Linkedin.svg';
import twiter from '../../../public/twiter.svg';
import './index.scss'

const Footer = () => {
  return (
    <footer>
      <div className="foo">
        <div className="foo__wrapper">
          <div className="foo__social">
            <img src={fb} alt="facebook" />
            <img src={insta} alt="instagram" />
            <img src={twiter} alt="twiter" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
        </div>
        <div className="foo__bottom">
          <p className='foo__text'>Copyright ©2020 All rights reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;