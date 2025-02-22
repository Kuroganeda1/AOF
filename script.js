const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbarMenu');

menu.addEventListener(`click`, function() {
  menu.classList.toggle(`is-active`);
  menuLinks.classList.toggle(`active`);
});

// Function to open the pop-up
function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
}

// Function to close the pop-up
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

// Function to open a popup
function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
}


window.onclick = function(event) {
  const loginPopup = document.getElementById('loginPopup');
  const loginButton = document.getElementById('loginButton');
  const signupPopup = document.getElementById(`signupPopup`)
  const signupButton = document.getElementById("signup-btn");

  if (event.target === signupButton ){
    signupButton.style.display = 'flex';
  }
  else if (event.target === signupPopup) {
        signupPopup.style.display = 'none';
  }

  if (event.target === loginButton) {
    loginPopup.style.display = 'flex';
  } 
  else if (event.target === loginPopup) {
    loginPopup.style.display = 'none';
}
};


document.getElementById('loginButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents page from reloading
  openPopup('loginPopup');
});

// Event listeners for the navbar login and signup buttons
// document.getElementById('loginBtn').addEventListener('click', function(event) {
//   event.preventDefault(); // Prevents page from reloading
//   openPopup('loginPopup');
// });

document.getElementById('signup-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents page from reloading
  openPopup('signupPopup');
});

// Toggle between login and signup forms within the popup
function toggleForms() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}
// Sign Up
document.getElementById('signup').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('User signed up!');
      document.getElementById('signup').reset();
      closePopup('signupPopup'); // Close the signup popup
    })
    .catch(error => {
      console.error('Error signing up:', error);
      alert(error.message);
    });
});

// Login
document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('User logged in!');
      document.getElementById('login').reset();
      closePopup('loginPopup'); // Close the login popup
    })
    .catch(error => {
      console.error('Error logging in:', error);
      alert(error.message);
    });
});



