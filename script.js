function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;



  // Show the toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Remove the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
}

var countdown = new Date('nov 20, 2024 18:00:00').getTime();
var i = setInterval(function () {
    var now = new Date().getTime(); 
    var distance = countdown - now; 

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance <= 0) {
        clearInterval(i); // Stop the countdown
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00"; 
        console.log("Countdown finished!");
    }

}, 1000); // Update every second



            //  nav bar     

    // function toggleMenu() {
    //     const menuList = document.querySelector(".nav ul");
    
    //     // Toggle the display style of the top menu
    //     if (menuList.style.display === "flex") {
    //         menuList.style.display = "none";
    //     } else {
    //         menuList.style.display = "flex";
    //     }
    // }

    document.getElementById("menutoggle1").addEventListener("click", function () {
      const menuList = document.querySelector(".nav ul");
  
      // Toggle the display style of the top menu
      menuList.style.display = menuList.style.display === "flex" ? "none" : "flex";
  });




  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth , GoogleAuthProvider,signInWithPopup , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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


  const submit = document.getElementById("submit")
    submit.addEventListener("click", function(e){
      e.preventDefault()
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
     
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    showToast("User created successfully!", "success");
    window.location.href = "https://meet.google.com/puy-mfnb-nzz";
  })
  .catch((error) => {
    if (error.code === "auth/email-already-in-use") {
        showToast("Email already in use. Redirecting...", "info");
        window.location.href = "https://meet.google.com/puy-mfnb-nzz";
    } else {
        showToast(`Error: ${error.message}`, "error");
    }
});
    })

 const GoogleBtn = document.getElementById('google-btn')
 GoogleBtn.addEventListener('click', function(){
  const user = auth.currentUser;
    if (user) {
        // User is already signed in, redirect to the Google Meet link
        showToast("User already signed in. Redirecting...", "info");
        window.location.href = "https://meet.google.com/puy-mfnb-nzz?authuser=0";
    } else {
    signInWithPopup(auth, provider)
  .then((result) => {  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    showToast("Signed in with Google successfully!", "success");
    // The href link  should take you to the google meet 
    window.location.href = "https://meet.google.com/puy-mfnb-nzz?authuser=0";

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    showToast(`Error: ${error.message}`, "error");
  });
}
 })


                  //smooth scroll
 document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);

   
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }
  });
});