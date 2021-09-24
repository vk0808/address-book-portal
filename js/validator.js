// Global variables
let isUpdate = false;
let personDetailsObj = {
  _name: '',
  _phoneNumber: '',
  _address: '',
  _city: '',
  _state: '',
  _zip: '',
  _id: ''
};


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

// function to save to local storage
const save = (event) => {
  event.preventDefault();
  event.stopPropagation();
  try {
    setPersonDetailsObj();
  } catch (e) {
    return;
  }
}

// function to create employee object and store values by getting it from input fields  
const setPersonDetailsObj = () => {
  personDetailsObj._name = getInputValueById('#name');
  personDetailsObj._phoneNumber = getInputValueById('#tel');
  personDetailsObj._address = getInputValueById('#address');
  personDetailsObj._city = getInputValueById('#city');
  personDetailsObj._state = getInputValueById('#state');
  personDetailsObj._zip = getInputValueById('#zip');
  console.log(personDetailsObj);
}

// function to return values of selected items using querySelector
const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}