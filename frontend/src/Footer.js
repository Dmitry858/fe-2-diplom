import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/style-footer.css';

export default class Footer extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <footer id="contacts" className="footer">
          <div className="container">
            <div className="footer__col">
              <h3 className="footer__col-title">Свяжитесь с нами</h3>
              <p className="footer__col-text footer__col-text_margin"><i className="fa fa-phone" aria-hidden="true"></i> 8 (800) 000 00 00</p>
              <p className="footer__col-text footer__col-text_margin"><i className="fa fa-envelope" aria-hidden="true"></i> inbox@mail.ru</p>
              <p className="footer__col-text footer__col-text_margin"><i className="fa fa-skype" aria-hidden="true"></i> tu.train.tickets</p>
              <p className="footer__col-text footer__col-text_margin"><i className="fa fa-map-marker" aria-hidden="true"></i> г. Москва ул. Московская, 27/35, оф. 55</p>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title">Подписка</h3>
              <p className="footer__col-text">Будьте в курсе событий</p>
              <form className="footer-form" action="">
                <input className="footer-form__input" type="text" placeholder="Email" />
                <button className="footer-form__button" type="submit">Отправить</button>
              </form>
              <h3 className="footer__col-title footer__col-title_social">Подписывайтесь на нас</h3>
              <p className="footer__col-icons">
                <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </p>
            </div>        
          </div>
          <div className="footer__copyright">
            <div className="container">
              <img className="footer__logo" src={logo} alt="Лого" />
              <a className="back-to-top" href="#top"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
              <p className="footer__col-text">2019 WEB</p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );    
  }
  
}