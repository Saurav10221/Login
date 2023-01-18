
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

 

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD87KFZBPE9T6NjATNAY1e4jdSznRQRXSk",
    authDomain: "login-2ae9e.firebaseapp.com",
    projectId: "login-2ae9e",
    storageBucket: "login-2ae9e.appspot.com",
    messagingSenderId: "1030010808330",
    appId: "1:1030010808330:web:fb25fee89d3851526a97f3",
    measurementId: "G-R6YKZKDWDG"
  };

 

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

var provider = new firebase.auth.GithubAuthProvider();

function githubSignin() {
   firebase.auth().signInWithPopup(provider)
   
   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

function githubSignout(){
   firebase.auth().signOut()
   
   .then(function() {
      console.log('Signout successful!')
   }, function(error) {
      console.log('Signout failed')
   });
}
