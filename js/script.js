const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function() {
    menuNav.classList.toggle("menu-active");
});


// Set the date we're counting down to
var countDownDate = new Date("August 17 , 2022 19:52:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timeout"
  document.getElementById("timeout").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeout").innerHTML = "00:00:00";
  }
}, 1000);


