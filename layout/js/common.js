'use strict';
// Price range
if (document.querySelector('.scale')) {
  var scale = document.querySelector('.scale'),
      band = document.querySelector('.scale__band'),
      sliderMin = document.querySelector('.scale__band-slider_min'),
      sliderMax = document.querySelector('.scale__band-slider_max'),
      numMin = document.querySelector('.scale__band-num_min'),
      numMax = document.querySelector('.scale__band-num_max'),
      x1 = 0,
      x2 = scale.getBoundingClientRect().right,
      factor = parseInt(document.querySelector('.scale__band-num_max').textContent, 10) / scale.clientWidth;

  function sliderMinMovie(event) {
    if (event.clientX > x1 && Math.round(sliderMin.getBoundingClientRect().right) < Math.round(sliderMax.getBoundingClientRect().left) - 2) {
      if (x1 === 0) {
        band.style.left = `${parseInt(band.style.left, 10) + 1}px`;
      } else {
        band.style.left = `${parseInt(band.style.left, 10) + (event.clientX - x1)}px`; 
      }
    }
    if (event.clientX < x1 && parseInt(band.style.left, 10) > 0) {
      band.style.left = `${parseInt(band.style.left, 10) - (x1 - event.clientX)}px`;
    }
    if (event.clientX < x1 && parseInt(band.style.left, 10) <= 0) {
      band.style.left = '0px';
    }
    x1 = event.clientX;
    numMin.textContent = Math.round(parseInt(band.style.left, 10) * factor);
  }

  function sliderMaxMovie(event) {
    if (event.clientX < x2 && Math.round(sliderMax.getBoundingClientRect().left) > Math.round(sliderMin.getBoundingClientRect().right) + 2) {
      if (x2 === scale.getBoundingClientRect().right) {
        band.style.right = `${parseInt(band.style.right, 10) + 1}px`;
      } else {
        band.style.right = `${parseInt(band.style.right, 10) + (x2 - event.clientX)}px`; 
      }
    }
    if (event.clientX > x2 && parseInt(band.style.right, 10) > 0) {
      band.style.right = `${parseInt(band.style.right, 10) - (event.clientX - x2)}px`;
    }
    if (event.clientX > x2 && parseInt(band.style.right, 10) <= 0) {
      band.style.right = '0px';
    }
    x2 = event.clientX;
    numMax.textContent = Math.round((band.clientWidth + parseInt(band.style.left, 10)) * factor);
  }

  function sliderMinTouch(event) {
    if (event.type === 'mousedown') {
      sliderMin.addEventListener('mousemove', sliderMinMovie);
    }
    if (event.type === 'mouseup') {
      sliderMin.removeEventListener('mousemove', sliderMinMovie);
      x1 = 0;
    }
  }

  function sliderMaxTouch(event) {
    if (event.type === 'mousedown') {
      sliderMax.addEventListener('mousemove', sliderMaxMovie);
    }
    if (event.type === 'mouseup') {
      sliderMax.removeEventListener('mousemove', sliderMaxMovie);
      x2 = scale.getBoundingClientRect().right;
    }
  }

  sliderMin.addEventListener('mousedown', sliderMinTouch);
  sliderMax.addEventListener('mousedown', sliderMaxTouch);
  document.addEventListener('mouseup', sliderMinTouch);
  document.addEventListener('mouseup', sliderMaxTouch);  
};
