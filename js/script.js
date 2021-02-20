/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (array) {
  let totalPages = array.length / 9;
  let ul = document.getElementsByClassName('link-list')[0];
  ul.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    let pageButton = `
      <li>
        <button type="button">${i + 1}</button>
      </li>`;
    ul.insertAdjacentHTML('beforeend', pageButton);
  }
  ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      let pages = ul.children;
      let activePage = event.target; 
      let pageNumber = activePage.textContent;
      for (let i = 0; i < pages.length; i++) {
        pages[i].className = '';
      }
      activePage.ClassName = 'active';
      showPage(array, pageNumber);
    } 
  });
}


// Call functions
showPage(data, 1);
addPagination(data);