// Global variables
let addressBookList;

// function to get person data stored in local storage and parse it into JSON 
const getDataFromLocalStorage = () => {
  return localStorage.getItem('AddressBookData') ?
    JSON.parse(localStorage.getItem('AddressBookData')) : [];
}


// add eventListener as the page loads
window.addEventListener('DOMContentLoaded', (event) => {
  // get data from local storage
  addressBookList = getDataFromLocalStorage();
  // update count
  document.querySelector('.person-count').textContent = addressBookList.length;
  // create row for each person 
  createInnerHtml();

  localStorage.removeItem("edit-person");
});

// function to create table and append it to the innerHTML 
const createInnerHtml = () => {
  if (addressBookList.length == 0) return;
  // column headings
  const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>ZIP</th><th>Phone Number</th><th></th></tr>";

  // add table header 
  let innerHtml = `${headerHtml}`;

  // data row loop through JSON object
  for (let personData of addressBookList) {
    // append row to the existing rows
    innerHtml = `${innerHtml}
      <tr>
        <td>${personData._name}</td>
        <td>${personData._address}</td>
        <td>${personData._city}</td>
        <td>${personData._state}</td>
        <td>${personData._zip}</td>
        <td>${personData._phoneNumber}</td>
        <td class="action-group">
          <img id ="${personData._id}" src="../assets/icons/delete-black-18dp.svg" alt="Delete" onClick="remove(this)">
          <img id ="${personData._id}" src="../assets/icons/create-black-18dp.svg" alt="Edit" onClick="update(this)">
        </td>
      </tr>`
      ;
  }
  document.querySelector('#display').innerHTML = innerHtml;
}


// function to remove an existing person
const remove = (node) => {
  // check if the element is present in array
  let personData = addressBookList.find(person => person._id == node.id);
  // if not exit and do nothing
  if (!personData) {
    return;
  }
  // get index of the person, splice, set it to local storage and then update the table
  const index = addressBookList.map(person => person._id).indexOf(personData._id);
  addressBookList.splice(index, 1);
  localStorage.setItem('AddressBookData', JSON.stringify(addressBookList));
  document.querySelector('.person-count').textContent = addressBookList.length;
  createInnerHtml();
}

// function to update an existing person
const update = (node) => {
  // check if the element is present in array
  let personData = addressBookList.find(person => person._id == node.id);
  // if not exit and do nothing
  if (!personData) {
    return;
  }
  // else, set it to local storage by creating new array inside object
  localStorage.setItem('edit-person', JSON.stringify(personData));
  // then move to add-person.html page
  window.location.replace(site_properties.add_person_page);
}