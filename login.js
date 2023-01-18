
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpQiKkPXhe40W1zAMqs1nGG6SVk6ChrRU",
    authDomain: "login-a2a34.firebaseapp.com",
    projectId: "login-a2a34",
    storageBucket: "login-a2a34.appspot.com",
    messagingSenderId: "170766974113",
    appId: "1:170766974113:web:a4926b403904fe282dc4e0",
    measurementId: "G-YNZSG65QQB"
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
