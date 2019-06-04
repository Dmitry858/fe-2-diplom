import React, { Component } from 'react';
import user_photo1 from './img/user_photo1.jpg';
import user_photo2 from './img/user_photo2.jpg';

export default class Reviews extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <section id="reviews-block" className="reviews container">
        <h2 className="reviews__title">Отзывы</h2>
        <div className="reviews__slider">
          <input className="reviews__slider-input" checked type='radio' name='slider' id='slide1' />
          <input className="reviews__slider-input" type='radio' name='slider' id='slide2' />
          <input className="reviews__slider-input" type='radio' name='slider' id='slide3' />
          <input className="reviews__slider-input" type='radio' name='slider' id='slide4' />
          <input className="reviews__slider-input" type='radio' name='slider' id='slide5' />

          <div id="reviews__slides">
            <div id="reviews__slides-container">
              <div className="inner">
                <article className="reviews__items-row">
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo1} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Екатерина Вальнова</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo2} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Евгений Стрыкало</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                </article>

                <article className="reviews__items-row">
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo1} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Екатерина Вальнова</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo2} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Евгений Стрыкало</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                </article>

                <article className="reviews__items-row">
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo1} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Екатерина Вальнова</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo2} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Евгений Стрыкало</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                </article>

                <article className="reviews__items-row">
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo1} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Екатерина Вальнова</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo2} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Евгений Стрыкало</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                </article>

                <article className="reviews__items-row">
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo1} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Екатерина Вальнова</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                  <div className="reviews__item">
                    <div className="reviews__item-img">
                      <img src={user_photo2} alt="" />
                    </div>
                    <div className="reviews__item-content">
                      <h4 className="reviews__item-title">Евгений Стрыкало</h4>
                      <p className="reviews__item-text"><span className="reviews__item-text_quote">“</span> СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке. <span className="reviews__item-text_quote">”</span></p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div id="commands">
            <label htmlFor='slide1'></label>
            <label htmlFor='slide2'></label>
            <label htmlFor='slide3'></label>
            <label htmlFor='slide4'></label>
            <label htmlFor='slide5'></label>
          </div>
          <div id="active">
            <label htmlFor='slide1'></label>
            <label htmlFor='slide2'></label>
            <label htmlFor='slide3'></label>
            <label htmlFor='slide4'></label>
            <label htmlFor='slide5'></label>
          </div>
        </div>
      </section>
    );    
  }
  
}