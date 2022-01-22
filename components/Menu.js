// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'About Me',
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(arr = []) {
  console.log(arr);

  // menu elements
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuItems = document.createElement('ul');

  //creating each list item
  arr.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    menuItems.appendChild(li);
  });

  //add menu items to menu
  menu.appendChild(menuItems);

  //place menu and items inside the button class
  const menuButton = document.querySelector('.menu-button');
  menuButton.appendChild(menu);

  //add click event listener to menu button
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  return menu;
}

const newMenu = menuMaker(menuItems);
const header = document.querySelector('.header');
header.appendChild(newMenu);
