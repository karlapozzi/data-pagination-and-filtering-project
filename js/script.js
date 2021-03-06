/*
This code is for my Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
going for exceeds expectations grade.
*/

/*
This function creates a page (or pages) of 9 students 
with info about them from the data list. 
*/
function showPage (list, page) {
  let startIndex = (page * 9) - 9;
  let endIndex = page * 9;
  let ul = document.getElementsByClassName('student-list')[0];
  ul.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex & i < endIndex) {
      let studentInfo = `
        <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>
        </li>`;
    ul.insertAdjacentHTML('beforeend', studentInfo);  
    }
  }
}

/*
This fuction adds pagination buttons based on the number 
of students in the data list (or search results), and listens
for clicks on those buttons.
*/
function addPagination (array) {
  let totalPages = Math.ceil(array.length / 9);
  let ul = document.getElementsByClassName('link-list')[0];
  ul.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    let pageButton = `
      <li>
        <button type="button">${i + 1}</button>
      </li>`;
    ul.insertAdjacentHTML('beforeend', pageButton);
  }
  let defaultButton = ul.firstElementChild.firstElementChild;
  defaultButton.className = 'active';
  ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      let oldPage = document.querySelector('.active');
      oldPage.className = '';
      let activePage = event.target; 
      activePage.className = 'active';
      showPage(array, activePage.textContent);
    } 
  });
}

/* 
Calls both functions above to set the default page to 1 
and add pagination buttons based on the data.
*/
showPage(data, 1);
addPagination(data);

/*
This section adds a search bar and search function that will be
used in event handlers. The function loops through student data
and adds matching results to a new searchResults data list, if there
are 0 results, it shows a "no results" page. 
 */
let header = document.querySelector('header');
let searchBar = `
  <label for="search" class="student-search">
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>`;
header.insertAdjacentHTML('beforeend', searchBar);

function searchFunction (searchInput) {
  let searchResults = [];
  for (let i = 0; i < data.length; i++) {
    let lowerCaseSearch = searchInput.toLowerCase();
    let name = `${data[i].name.first} ${data[i].name.last}`
    let lowerCaseName = name.toLowerCase();
    if (lowerCaseName.includes(lowerCaseSearch)) {
      searchResults.push(data[i]);
    }
  }
  let ul = header.nextElementSibling;
  if (searchResults.length !== 0) {
    showPage(searchResults, 1);
    addPagination(searchResults);
    ul.nextElementSibling.style.display = '';
    } else {
    ul.innerHTML = `
      <p class="no-results">
      No results found
      </p>`;
    ul.nextElementSibling.style.display = 'none';
    }
}

/*
The keyup event listener makes the search more dynamic by
searching as the user types.

The click event listener is for more edge case uses that keyup 
might not catch. For example, search "b", go to page 2 of results, 
then click search button. No keyup event occurred, but you 
should be taken back to page 1 because it's a new search for "b".
*/
let input = document.querySelector('input');

header.addEventListener('keyup', () => {
  searchFunction(input.value);
});

header.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    searchFunction(input.value);
  }
});