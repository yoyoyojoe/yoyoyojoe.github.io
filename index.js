let previousURL;
let catchWindow = null;
const darkModeToggle = document.getElementById('darkModeToggle');

const a = new URL(window.location);
console.log('Here', a, window.location.pathname);
/*
? setting dark mode preference using local storage
let lsDarkModePref = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkModePreference', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkModePreference', null);
};

on load
if (lsDarkModePref === 'enabled') enableDarkMode();

on click
darkModeToggle.addEventListener('click', () => {
  lsDarkModePref = localStorage.getItem('darkMode');
  if (lsDarkModePref !== 'enabled') enableDarkMode();
  else disableDarkMode();
});
*/

/*
? if using cookie (custom getter for cookie values)
function getCookie(key) {
  const keyName = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const allCookies = decodedCookie.split(';');
  console.log(allCookies);
  for (const currentCookie of allCookies) {
    while (currentCookie.charAt(0) === ' ') {
      currentCookie = currentCookie.substring(1);
    }
    if (currentCookie.indexOf(key) === 0) {
      if (currentCookie.substring(keyName.length, currentCookie.length) === 'true') return true;
      if (currentCookie.substring(keyName.length, currentCookie.length) === 'false') return false;
    }
  }
  return undefined;
}
*/

/*
? version 1: use cookie (use regex)
function getCookie(key) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  // if there's any match or value at all
  if (match) {
    // console.log('Cookie:', name, 'found;', 'value:', match[2]);
    // match[2] would be a string
    if (match[2] === 'true') return true;
    if (match[2] === 'false') return false;
  }
  return undefined;
}
*/

function checkDarkModePref(prevURL = 'tbd') {
  // ? check current view in cookie
  // ? const isDark = getCookie('darkModePreference');
  // ? console.log('isDark:', getCookie('darkModePreference'));

  const isDark = localStorage.getItem('dark mode preference'); // string
  console.log('change view:', isDark, typeof isDark);
  console.log('prevURL:', prevURL);

  if (isDark === null) {
    console.log('dark mode preference not set yet: setting to false');
    localStorage.setItem('dark mode preference', 'false');
  }
  if (isDark === 'false') {
    darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/icons8-sun.svg';
  }
  if (isDark === 'true') {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/night-dark.png';
    } else {
      darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/icons8-sun.svg';
    }
  }

  return isDark; // string
}

function changeView(currentlyDark, prevURL = 'tbd') {
  // ? check current view in cookie
  // ? const isDark = getCookie('darkModePreference');
  // ? console.log('isDark:', getCookie('darkModePreference'));

  const isDark = localStorage.getItem('dark mode preference');
  console.log('change view:', isDark, typeof isDark);
  console.log('currentlyDark:', currentlyDark, typeof currentlyDark);
  // if prevURL === thisURL

  // if (isDark === null) {
  //   console.log('dark mode preference not set yet: setting to false');
  //   localStorage.setItem('dark mode preference', 'false');
  // }
  // if (isDark === 'false') {
  //   darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/icons8-sun.svg';
  // }
  // if (isDark === 'true') {
  //   localStorage.setItem('dark mode preference', 'true');
  //   if (isDark === 'false') isDark = false;
  // }

  if (currentlyDark === 'true') { // if current view is dark, then change to bright
    // console.log(darkModeToggle);
    // console.log('going from dark', isDark, 'to bright');

    // const header = document.querySelector('.navbar');
    // header.style.setProperty('background-color', '#f3f3f3');

    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/night-dark.png';
    } else {
      darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/icons8-sun.svg';
    }

    // const dropdownMenuInfoGrid = document.querySelectorAll('.dropdown-menu.info-grid');
    // dropdownMenuInfoGrid.forEach((dropdownMenu) => dropdownMenu.classList.toggle('dark-mode'));

    // const links = document.querySelectorAll('.link');
    // links.forEach((link) => {
    //   // link.style.setProperty('color', '#666');
    //   link.classList.toggle('dark-mode');
    // });

    // const contactButton = document.querySelector('#contact') || document.querySelector('#send');
    // if (contactButton) {
    //   if (contactButton.className === 'button') {
    //     contactButton.className = 'dark-button';
    //   } else {
    //     contactButton.className = 'button';
    //   }
    // }

    // const contactDiv = document.querySelector('#hello');
    // if (contactDiv) contactDiv.style.setProperty('background-color', 'white');

    // console.log('----------gone bright----------');

    // ? console.log('setting cookie darkModePreference to be false');
    // ? document.cookie = 'darkModePreference=false;path=/';
    // ? console.log('darkModePreference now:', getCookie('darkModePreference'));
    localStorage.setItem('dark mode preference', 'false');
  }

  if (currentlyDark === 'false') {
    // console.log(darkModeToggle);
    // console.log('isDark?', isDark);
    // console.log('going from bright', !isDark, 'to dark');
    darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/night-dark.png';
    document.body.classList.toggle('dark-mode');

    // if (document.body.classList.contains('dark-mode')) {
    //   darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/night-dark.png';
    // } else {
    //   darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/icons8-sun.svg';
    // }

    // const header = document.querySelector('.navbar');
    // header.style.setProperty('background-color', '#202020');

    // const dropdownMenuInfoGrid = document.querySelectorAll('.dropdown-menu.info-grid');
    // dropdownMenuInfoGrid.forEach((dropdownMenu) => dropdownMenu.classList.toggle('dark-mode'));

    // const links = document.querySelectorAll('.link');
    // links.forEach((link) => {
    //   // link.style.setProperty('color', '#666');
    //   // link.style.setProperty('color', '#E1E1E1');
    //   link.classList.toggle('dark-mode');
    // });

    // const contactButton = document.querySelector('#contact') || document.querySelector('#send');
    // // console.log('Here', contactButton.className === 'button');
    // if (contactButton) {
    //   if (contactButton.className === 'button') {
    //     contactButton.className = 'dark-button';
    //   } else {
    //     contactButton.className = 'button';
    //   }
    // }

    // if (document.querySelector('#hello')) {
    //   const contactDiv = document.querySelector('#hello');
    //   contactDiv.style.setProperty('background-color', 'rgb(175, 175, 175)');
    // }

    // console.log('-----------------gone dark-------------------');

    // ? console.log('setting cookie darkModePreference to be true');
    // ? document.cookie = 'darkModePreference=true;path=/';
    // ? console.log('darkModePreference now:', getCookie('darkModePreference'));

    localStorage.setItem('dark mode preference', 'true');
  }

  const header = document.querySelector('.navbar');
  const content = document.body;
  // header.classList.toggle('dark-mode');
  // content.classList.toggle('dark-mode');
}

function letsGoCatchEmAll(url) {
  const innerWidth = 950;
  const innerHeight = 930;
  const windowFeatures = `popup,
  screenX = ${((window.screen.availWidth - innerWidth) / 2)},
  screenY = ${(window.screen.availHeight - innerHeight) / 2}, 
  innerWidth=${innerWidth}, innerHeight=${innerHeight}`;
  // screenX = ${((window.screen.width - window.outerWidth) / 2)},
  // screenY = ${((window.screen.height * 0.1) / 2)},

  if (catchWindow === null || catchWindow.closed) {
    catchWindow = window.open(
      url,
      'CatchGameWindow',
      windowFeatures,
    );
    // console.log(catchWindow);
  } else if (previousURL !== url) {
    catchWindow = window.open(
      url,
      'CatchGameWindow',
      windowFeatures,
    );
    catchWindow.focus();
  } else {
    catchWindow.focus();
  }
  previousURL = url;
  return false;
}

/* validate form function for filling out contact form
function validateForm() {
  const name = document.getElementById('name').value;
  if (name === '') {
    document.querySelector('.status').innerHTML = 'Name cannot be empty';
    return false;
  }
  const email = document.getElementById('email').value;
  if (email === '') {
    document.querySelector('.status').innerHTML = 'Email cannot be empty';
    return false;
  }
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    document.querySelector('.status').innerHTML = 'Email format invalid';
    return false;
  }

  const subject = document.getElementById('subject').value;
  if (subject === '') {
    document.querySelector('.status').innerHTML = 'Subject cannot be empty';
    return false;
  }
  const message = document.getElementById('message').value;
  if (message === '') {
    document.querySelector('.status').innerHTML = 'Message cannot be empty';
    return false;
  }
  return false;
}
*/

// todo receiving a 'message' from django app url,
window.addEventListener('message', (event) => {
  const isDark = localStorage.getItem('dark mode preference');
  console.log('event origin: ', event.origin);
  console.log('window.location.host: ', window.location.host);
  if (event.origin !== 'https://django-polls-mysite.herokuapp.com/') return;
  console.log('message, event: ', event);
  // todo send a post request to django app according to client's dark mode preference in local storage
  async function requestDarkMode() {
    const response = await fetch('https://yoyoyojoe.github.io/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: `{ 'isDark': ${isDark} }`,
    });

    const data = await response.json();
    console.log(data);

    localStorage.setItem('dark mode preference', data);
  }

  requestDarkMode();
}, false);

window.onload = (e) => {
  console.log(e);
  checkDarkModePref();
  // Get the window displayed in the iframe.
  // var receiver = document.getElementById('receiver').contentWindow;

  // // Get a reference to the 'Send Message' button.
  // var btn = document.getElementById('send');

  // // A function to handle sending messages.
  // function sendMessage(e) {
  //   // Prevent any default browser behavior.
  //   e.preventDefault();

  //   // Send a message with the text 'Hello Tree house!' to the new window.
  //   receiver.postMessage('cookie data!', 'http://wrong-domain.com');
  // }

  // // Add an event listener that will execute the sendMessage() function
  // // when the send button is clicked.
  // btn.addEventListener('click', sendMessage);
};

// document.addEventListener('DOMContentLoaded', (e) => {
//   console.log('for Django Polls app: e.target.location.href = ', e.target.location.href);
//   // for Django Polls app
//   if (e.target.location.href === 'https://django-polls-mysite.herokuapp.com/') {
//     fetch('https://yoyoyojoe.github.io/')
//       .then((res) => res.json)
//       .then((data) => {
//         console.log(`sending a fetch request to https://yoyoyojoe.github.io/ from ${e.target.location.href}`);
//         console.log(JSON.stringify(data));
//         localStorage.setItem('dark mode preference', data);
//       });
//   }

//   // on page load, check the darkMode key value pair
//   // ? const darkModeOnLoad = getCookie('darkModePreference');
//   let darkModeOnLoad = localStorage.getItem('dark mode preference');
//   // if not null, reassign it a boolean value
//   if (darkModeOnLoad) {
//     // ? console.log('dark mode on load should have a value:', darkModeOnLoad);
//     if (darkModeOnLoad === 'true') darkModeOnLoad = true;
//     if (darkModeOnLoad === 'false') darkModeOnLoad = false;
//   } else {
//     // if the darkModePreference does not exist || there is no match
//     // set default dark mode preference to false
//     localStorage.setItem('dark mode preference', 'false');
//   }
//   // console.log('loading dark mode preference:', darkModeOnLoad);

//   // ? if using cookie to store dark mode preference
//   // ? if (darkModeOnLoad === undefined) {
//   // ?   console.log('--cookie name not found, setting cookie "darkModePreference=false"---');
//   // ?   document.cookie = 'darkModePreference=false;path=/';
//   // ? }

//   // if darkModeOnLoad is true, modify the darkModeToggle icon and theme colors accordingly
//   if (darkModeOnLoad) {
//     darkModeToggle.src = 'https://yoyoyojoe.github.io/assets/night-dark.png';

//     const header = document.querySelector('.navbar');
//     header.style.setProperty('background-color', '#202020');
//     header.classList.toggle('dark-mode');

//     const dropdownMenuInfoGrid = document.querySelectorAll('.dropdown-menu.info-grid');
//     dropdownMenuInfoGrid.forEach((dropdownMenu) => dropdownMenu.classList.toggle('dark-mode'));

//     const links = document.querySelectorAll('.link');
//     links.forEach((link) => {
//       // link.style.setProperty('color', '#E1E1E1');
//       link.classList.toggle('dark-mode');
//     });

//     const contactButton = document.querySelector('#contact') || document.querySelector('#send');

//     if (contactButton) {
//       if (contactButton.className === 'button') {
//         contactButton.className = 'dark-button';
//       } else {
//         contactButton.className = 'button';
//       }
//     }

//     const content = document.body;
//     content.classList.toggle('dark-mode');

//     // console.log(window.location.pathname);
//     if (window.location.pathname === '/contact/') {
//       const contactDiv = document.querySelector('#hello');
//       // console.log('Here', contactDiv.classList);
//       contactDiv.style.setProperty('background-color', 'rgb(175, 175, 175)');
//       // contactDiv.classList.add('#hello-dark-mode');
//     }
//   } else {
//     // ? console.log('dark mode on load should be false:', getCookie('darkModePreference'));
//     // darkModeOnLoad is false, load regular page

//     const { body } = document;
//     body.setAttribute('transition-property', 'background-color, color');
//     body.setAttribute('transition-duration', '1s');
//   }
// });

// * menu dropdown javascript: event.target matching
document.addEventListener('pointerdown', (e) => {
  // when clicking on the specific button, (using selector & data attribute)
  const dropdownBtn = e.target.matches('[data-dropdown-button]');

  let currentDropdownContainer; // to store the current dropdown clicked
  // if dropdownBtn clicked && if the parent / closet element is 'data-dropdown' -> leave it open
  if (dropdownBtn) {
    currentDropdownContainer = e.target.closest('[data-dropdown-container]');
    // hide or show this dropdown depending on if it's opened or not
    currentDropdownContainer.classList.toggle('active');
  }
  // if not clicked && if the parent / closet element is not null -> close the dropdown menu
  if (!dropdownBtn && e.target.closest('[data-dropdown-container]') != null) return;

  // closes all the dropdowns that are already opened, except for the one just opened
  document.querySelectorAll('[data-dropdown-container].active').forEach((dropdown) => {
    if (dropdown === currentDropdownContainer) return;
    dropdown.classList.remove('active');
  });

  // * contact us button
  const contactBtn = e.target.matches('#contact');

  if (contactBtn) {
    // window.location.href = '/contact';
    window.location.assign('https://yoyoyojoe.github.io/contact/');

    const access = document.querySelector('.special-access');
    access.style.display = 'none';

    // fetch(`http://api.ipstack.com/check?access_key=${ACCESS_KEY}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    // * currently blocked if using HTTPS, only works for HTTP (local environment testing):
    // [Warning] [blocked] The page at https://yoyoyojoe.github.io/ was not allowed to display insecure content from http://api.ipstack.com/check?access_key=712b054a2c30061f29245a96f5751335. (index.js, line 30)
    // [Error] Not allowed to request resource (anonymous function)(index.js: 30)
    // [Error] Fetch API cannot load http://api.ipstack.com/check?access_key=712b054a2c30061f29245a96f5751335 due to access control checks. (anonymous function)(index.js: 30)
    // * currently only works for HTTP, not HTTPS (with encryption)
    // console.log(
    //   `Visitor at ${data.ip}, your visit has been logged. `
    //   + 'According to this IP address, your current location is at or near'
    //   + `${data.city}, ${data.region_name} in ${data.country_name}`
    //   + `${data.location.country_flag_emoji}, and your country's language is`
    //   + `${data.location.languages[0].native}.`
    //   + 'Do not worry, this is only an exercise for fun. - from the developer.',
    // );
    // })
    // .catch((error) => console.log(`the entire error: ${error}`));
  }

  const catchButton = e.target.matches('#catch');
  if (catchButton) letsGoCatchEmAll(catchButton.href);

  const darkModeButton = e.target.matches('#darkModeToggle');
  previousURL = window.location.host; // 127.0.0.1:5501 || yoyoyojoe.github.io/

  if (darkModeButton) {
    console.log(previousURL);
    const currDarkModePref = checkDarkModePref();
    changeView(currDarkModePref, previousURL);
  }
});
