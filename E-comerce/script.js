window.onscroll = function() {toggleNavbarSticky()};

function toggleNavbarSticky() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.navbar').classList.add('scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('scrolled');
  }
}
// Check if the user is logged in
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    // If user is logged in, hide the login link and show logout
    document.getElementById('login-link').style.display = 'none';
    document.getElementById('logout-link').style.display = 'block';
}

// Add event listener for logout
document.getElementById('logout-link').addEventListener('click', function() {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Redirect to home page or login page
    window.location.href = './home.html'; // Redirect to home page
});

