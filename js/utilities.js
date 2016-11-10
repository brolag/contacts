function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}

function clean() {
  qsa('.field').map(function(field){ field.value = '' });
}

function hide(selector) {
  qs(selector).style.visibility = 'hidden';
}

function show(selector) {
  qs(selector).style.visibility = 'visible';
}

function toggle(selector) {
  if (qs(selector).style.visibility === 'hidden') {
    show(selector);
  }
  else {
    hide(selector);
  }
}
