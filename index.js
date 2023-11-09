const formElement = document.querySelector('#id_form');
formElement.addEventListener('click', (e) => {
  e.preventDefault();
  alert('sent');
});
