document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signup-form');
    var loginLink = document.getElementById('login-link');
    var facebookLoginBtn = document.getElementById('facebook-login');
    var googleLoginBtn = document.getElementById('google-login');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var name = signupForm.elements[0].value;
      var email = signupForm.elements[1].value;
      var password = signupForm.elements[2].value;
      // Perform form validation and submit to your backend for user registration
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    });
  
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Add your login page navigation logic here
      console.log('Navigate to login page');
    });
  
    facebookLoginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Implement login with Facebook logic
      console.log('Login with Facebook');
    });
  
    googleLoginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Implement login with Google logic
      console.log('Login with Google');
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var emailLoginBtn = document.getElementById('email-login');
    var googleLoginBtn = document.getElementById('google-login');
    var facebookLoginBtn = document.getElementById('facebook-login');
    var twitterLoginBtn = document.getElementById('twitter-login');
  
    emailLoginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Redirect to email login page
      window.location.href = 'email-login.html';
    });
  
    googleLoginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Implement login with Google logic
      console.log('Login with Google');
    });
  
    facebookLoginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Implement login with Facebook logic
      console.log('Login with Facebook');
    });
  
    twitterLoginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Implement login with Twitter logic
      console.log('Login with Twitter');
    });
  });
  