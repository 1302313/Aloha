//
document.addEventListener("DOMContentLoaded", function () {

  // All JavaScript
  /* Pop up window */
  // let magic = prompt("Please type a number from 1 to 10");
  alert("Thank you for visiting Aloha Apparel!!");

  // Site Header - Shopping Cart Notification Item
  // const cartLogo = document.getElementById('shopping-cart');
  const clickCell = document.getElementById('carousel');
  const clickNum = document.getElementById('counter');
  console.log(clickNum);
  console.log(clickCell);
  let clicks = 0;
  clickCell.addEventListener('click', function(event) {
    clicks += 1
    clickNum.innerHTML = clicks;
    console.log(clicks);
    console.log(event);
  });

  // Site Header - Navigation Bar (Smooth Scrolling to sections)
  // Make sure to add Jquery link to html
  /* Reference: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp */
  /* Reference: https://css-tricks.com/snippets/jquery/smooth-scrolling/ */

  // Add the smooth scrolling to all links
  // Select all links with hashes
  $('a[href*="#"]')
    //remove useless links :D 
    .not('[href="#"]')
    .not('[href="#0"]')
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // Use jQuery Function: animate() to add smooth scrolling
      // The number below identifies the time (in milliseconds) for scrolling
      // Identify the HTML Element to animate()
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1600, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      })
    }
  });
  // add notifiction display:flex when cart is marked

  // Section 4 - Most Loved Products (Carousel movement)

  const elem = document.querySelector('.carousel');
  const flkty = new Flickity(elem, {

    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
    autoPlay: true,
  })
  // Section 5 - Subscription Form Email Validation

    let messageForm = document.getElementById("signup");
    const input = document.getElementById('signup-email');
    messageForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const trimVal = input.value.trim();
      if (trimVal == "") {
        alert("Please enter some text");
      } else {
        alert("Thank you for your subscription!");
      }
    });
  });




  