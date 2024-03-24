
function checkGaming () {
  let result = document.querySelector('.js-isToggled').classList.contains('is-toggled');
  if (!result){
    document.querySelector('.js-isToggled').classList.remove('no-toggle');
    document.querySelector('.js-isToggled').classList.add('is-toggled');
  } else {
    document.querySelector('.js-isToggled').classList.add('no-toggle');
    document.querySelector('.js-isToggled').classList.remove('is-toggled');
  }
}

// 10e
function checkMusic () {
  let result = document.querySelector('.js-isToggled-music').classList.contains('is-toggled');
  if (!result){
    document.querySelector('.js-isToggled-music').classList.remove('no-toggle');
    document.querySelector('.js-isToggled-music').classList.add('is-toggled');
  } else {
    document.querySelector('.js-isToggled-music').classList.add('no-toggle');
    document.querySelector('.js-isToggled-music').classList.remove('is-toggled');
  }
}

function checkTech () {
  let result = document.querySelector('.js-isToggled-tech').classList.contains('is-toggled');
  if (!result){
    document.querySelector('.js-isToggled-tech').classList.remove('no-toggle');
    document.querySelector('.js-isToggled-tech').classList.add('is-toggled');
  } else {
    document.querySelector('.js-isToggled-tech').classList.add('no-toggle');
    document.querySelector('.js-isToggled-tech').classList.remove('is-toggled');
  }
}