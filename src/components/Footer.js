import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className="logo">Sahabat Iqbaal</h1>
            <p className="footer-text">
              Portofolio of Muhammad Amin Iqbaal Alam, S.Kom
            </p>
          </div>
          <div className="col-md-6">
            <p className="footer-title">Contact</p>
            <ul>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Aminiqbaal" > Github</a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aminiqbaal/"> Linkedin</a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sahabat.iqbaal/"> Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
