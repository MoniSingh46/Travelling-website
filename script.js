let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let numInput = document.querySelector("#num-input");
let textInput = document.querySelector("#text-input");
let textarea= document.querySelector("textarea");
let msgBtn = document.querySelector("#msgbtn");
let regForm= document.querySelector("#reg-form")
let bookName= document.querySelector("#book-name");
let booknum = document.querySelector("#book-num");
let arrivalDate = document.querySelector("#arrival-date");
let leavingDate = document.querySelector("#leaving-date");
let bookBtn = document.querySelector("#b-btn");
//console.log(msgBtn);

//*************************************************
// get data from input box of form   // Function to handle form submission and retrieve data
          // Ensure the DOM is fully loaded before running the script
        //   document.addEventListener('DOMContentLoaded', function() {
        //     // Handle form submission and retrieve data
        //     document.getElementById('msgbtn').addEventListener('click', function(event) {
        //         event.preventDefault(); // Prevent form submission

        //         // Get the values from the input fields
        //         var name = document.getElementById('name-input').value;
        //         var email = document.getElementById('email-input').value;
        //         var number = document.getElementById('num-input').value;
        //         var subject = document.getElementById('text-input').value;
        //         var message = document.getElementById('message-input').value;

        //         // Display the collected data (you can also send it to a server or use it as needed)
        //         var output = `Name: ${name}<br>
        //         Email: ${email}<br>
        //         Phone Number: ${number}<br>
        //         Subject: ${subject}<br>
        //         Message: ${message}`;
        //         document.getElementById('output').innerHTML = output;
        //     });
        // });**********************************************************************


        // Start booking form coding

        let bookingData = [];

        bookBtn.onclick=(e)=>{
           
            e.preventDefault()

            let bookData={
             bName:bookName.value,
             bnum:booknum.value,
             aDate:arrivalDate.value,
             lDate:leavingDate.value
            }

            
        }


            // ends booking form coding





        // contact form control coding

let userData = [];

msgBtn.onclick = (e) =>{
    e.preventDefault();

    let Data ={
nameData :  nameInput.value,
emailData : emailInput.value,
numData :  numInput.value,
textData : textInput.value
    }

   userData.push(Data);
   //console.log(userData); 

   let stringData = JSON.stringify(userData) 
localStorage.setItem("userData", stringData);


}








// end contact form coding






window.onscroll = () =>{
    searchBtn.classList.remove('fa-times'); 
    searchBar.classList.remove('active'); 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3
        },       
    },
});

/*
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200:{
            slidesperview: 5,
        },       
    },
});
*/

