import Ellipse from '../public/Ellipse.png';
import Rectangle1 from '../public/Rectangle1.png';
import Rectangle2 from '../public/Rectangle2.png';
import Rectangle3 from '../public/Rectangle3.jpg';
import fb from '../public/fb.svg';
import insta from '../public/insta.svg';
import Linkedin from '../public/Linkedin.svg';
import twiter from '../public/twiter.svg';

function App() {

  return (
    <>
      <header>
        <nav className='head container'>
          <ul className='head__list'>
            <li className="head__item"><a href="#" className="head__link">Works</a></li>
            <li className="head__item"><a href="#" className="head__link">Blog</a></li>
            <li className="head__item"><a href="#" className="head__link">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='hero container'>
          <div className="hero__wrapper">
            <div className="hero__left">
              <h1 className="hero__title">Hi, I am John,
                Creative Technologist</h1>
              <p className="hero__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <button className='hero__btn'>Download Resume</button>
            </div>
            <div className="hero__right">
              <div className="hero__img-wrapper">
                <img src={Ellipse} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='posts'>
          <div className="posts__wrapper container">
            <div className="posts__top">
              <h4 className="posts__title">Recent posts</h4>
              <a href="#" className='posts__link'>View all</a>
            </div>
            <ul className="posts__list">
              <li className="posts__card card">
                <h4 className="card__title">Making a design system from scratch</h4>
                <div className="card__middle">
                  <p className='card__text-year'>12 Feb 2020</p>
                  <p className='card__text-work'>Design, Pattern</p>
                </div>
                <p className='card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </li>
              <li className="posts__card card">
                <h4 className="card__title">Creating pixel perfect icons in Figma</h4>
                <div className="card__middle">
                  <p className='card__text-year'>12 Feb 2020</p>
                  <p className='card__text-work'>Design, Pattern</p>
                </div>
                <p className='card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </li>
            </ul>
          </div>
        </section>
        <section className='works container'>
          <h4 className='works__title'>Featured works</h4>
          <ul className='works__list'>
            <li className="works__card card">
              <img src={Rectangle1} alt="rectangle first image" />
              <div className="card__wrapper">
                <h4 className='card__title' >Designing Dashboards</h4>
                <div className="card__inner">
                  <span className='card__sp'>2020</span>
                  <p className='card__text-name'>Dashboard</p>
                </div>
                <p className='card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </li>
            <li className="works__card card">
              <img src={Rectangle2} alt="rectangle second image" />
              <div className="card__wrapper">
                <h4 className='card__title' >Vibrant Portraits of 2020</h4>
                <div className="card__inner">
                  <span className='card__sp'> 2018</span>
                  <p className='card__text-name'>Illustration</p>
                </div>
                <p className='card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </li>
            <li className="works__card card">
              <img src={Rectangle3} alt="rectangle last image" />
              <div className="card__wrapper">
                <h4 className='card__title' >36 Days of Malayalam type</h4>
                <div className="card__inner">
                  <span className='card__sp'>2018</span>
                  <p className='card__text-name'>Typography</p>
                </div>
                <p className='card__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
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
    </>
  )
}

export default App
