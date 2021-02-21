/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
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
of students in the data list (or search results).
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
  let defaultButton = document.querySelector('button');
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



/* Calls both functions above to set the default page to 1 
and add pagination buttons based on the data.
*/
showPage(data, 1);
addPagination(data);
createSearch();