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

// FOR TESTING:
// let list = [
//   {
//     name: {
//       title: "Miss",
//       first: "Ethel",
//       last: "Dean",
//     },
//     email: "ethel.dean@example.com",
//     registered: {
//       date: "12-15-2005",
//       age: 15,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/women/25.jpg",
//       medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
//     },
//   }
// ]
// showPage(list, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
