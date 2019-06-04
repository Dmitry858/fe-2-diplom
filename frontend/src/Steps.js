import React, { Component } from 'react';

export default class Steps extends Component {
  constructor (props) {
    super(props);
  }
  
  getTriangleClasses(num, currentStep) {    
    if (currentStep > num) return "steps__triangle steps__triangle_yellow steps__triangle_yellow-full";
    if (currentStep === num) return "steps__triangle steps__triangle_yellow";
    if (currentStep < num) return "steps__triangle";
  }
  
  render() {
    
    return (
      <React.Fragment>
        <div className={(this.props.currentStep === 4) ? "steps steps_full" : "steps"}>
          <div className="steps-wrap container">
            <div className={(this.props.currentStep >= 1) ? "steps__item steps__item_yellow" : "steps__item"}>
              <div className="steps__item-number">1</div>
              <p className="steps__item-name">Билеты</p>
            </div>
            <div className={this.getTriangleClasses(1, this.props.currentStep)}>
              <div className="steps__triangle-lines"></div>
            </div>
            <div className={(this.props.currentStep >= 2) ? "steps__item steps__item_yellow" : "steps__item"}>
              <div className="steps__item-number">2</div>
              <p className="steps__item-name">Пассажиры</p>
            </div>
            <div className={this.getTriangleClasses(2, this.props.currentStep)}>
              <div className="steps__triangle-lines"></div>
            </div>
            <div className={(this.props.currentStep >= 3) ? "steps__item steps__item_yellow" : "steps__item"}>
              <div className="steps__item-number">3</div>
              <p className="steps__item-name">Оплата</p>
            </div>
            <div className={this.getTriangleClasses(3, this.props.currentStep)}>
              <div className="steps__triangle-lines"></div>
            </div>
            <div className={(this.props.currentStep >= 4) ? "steps__item steps__item_yellow" : "steps__item"}>
              <div className="steps__item-number">4</div>
              <p className="steps__item-name">Проверка</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );    
  }
  
}