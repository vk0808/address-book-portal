// add eventListener as the page loads
window.addEventListener('DOMContentLoaded', (event) => {
  validateName();
  validateNumber();
});


// function validate name
function validateName() {
  const name = document.querySelector('#name');
  name.addEventListener('input', function () {
    if (name.value.length == 0) {
      setTextValue('.text-error', "");
      return;
    }
    try {
      (new PersonData()).name = name.value;
      setTextValue('.text-error', "");
    } catch (e) {
      setTextValue('.text-error', e);
    }
  });
}

// function validate number
function validateNumber() {
  const number = document.querySelector('#tel');
  number.addEventListener('input', function () {
    if (number.value.length == 0) {
      setTextValue('.tel-error', "");
      return;
    }
    try {
      (new PersonData()).phoneNumber = number.value;
      setTextValue('.tel-error', "");
    } catch (e) {
      setTextValue('.tel-error', e);
    }
  });
}

// function to reset innerHTML of the given element
const setTextValue = (id, value) => {
  let textError = document.querySelector(id);
  textError.textContent = value;
}