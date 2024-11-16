var countdown = new Date('nov 20, 2024 00:00:00').getTime()
    var i =setInterval(function () {
       var now = new Date().getTime();
       var distance = countdown - now;

       var days = Math.floor(distance/(1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minue = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
       var seconds = Math.floor((distance % (1000 * 60 ))/ 1000);

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minue;
document.getElementById('seconds').innerHTML = seconds;


    },1000 )


            //  nav bar     

    function toggleMenu() {
        const menuList = document.querySelector(".nav ul");
    
        // Toggle the display style of the top menu
        if (menuList.style.display === "flex") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "flex";
        }
    }




  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth , GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBjFlyr6DQipbmYQ2gIgiPEoIpuh82IJ4c",
    authDomain: "the-global-9bf56.firebaseapp.com",
    projectId: "the-global-9bf56",
    storageBucket: "the-global-9bf56.firebasestorage.app",
    messagingSenderId: "1062795284574",
    appId: "1:1062795284574:web:adaf43c42ea61c550d64cf"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  auth.languageCode = "en"
  const provider = new GoogleAuthProvider()



 const GoogleBtn = document.getElementById('google-btn')
 GoogleBtn.addEventListener('click', function(){
    signInWithPopup(auth, provider)
  .then((result) => {  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
 })