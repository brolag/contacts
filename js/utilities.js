/**
* Select a DOM element.
*/
function qs(selector) {
  return document.querySelector(selector);
}

/**
* Select several DOM elements.
*/
function qsa(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}

/**
* Clean input values of a form.
*/
function clean(selector) {
  qsa(selector).map(function(field){ field.value = '' });
}

/**
* Hide an element.
*/
function hide(selector) {
  qs(selector).style.visibility = 'hidden';
}

/**
* Show an element.
*/
function show(selector) {
  qs(selector).style.visibility = 'visible';
}

/**
* Toggle an element visibility.
*/
function toggle(selector) {
  if (qs(selector).style.visibility === 'hidden') {
    show(selector);
  }
  else {
    hide(selector);
  }
}
