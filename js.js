'use strict';
function toggleBtnActive(elem, idContent) {
  console.log(idContent);
  const currentActiveElem = document.querySelector('.btn.active');
  currentActiveElem.classList.remove('active');
  elem.classList.toggle('active');

  const div = document.getElementById(idContent);
  const currentActiveDiv = document.querySelector('.content.active');
  currentActiveDiv.classList.remove('active');
  div.classList.toggle('active');
  console.log(div);
}
