// Start Typing
var typed = new Typed(".element", {
  strings: ["Developer", "Designer", "Freelancer", "Photographer"],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});
// End Typing
// counter
const counters = document.querySelectorAll(".count-num"),
  container = document.querySelector(".counter-container");

let activated = false;
window.addEventListener("scroll", () => {

  if (scrollY > container.offsetTop - container.offsetHeight - 200 && activated == false) {
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);

        if (target > count) {
          count++
          counter.innerText = count

          setTimeout(updateCount, 10)
        } else {
          counter.innerText = target
        }
      }
      updateCount()
      activated = true;
    })
  }
})
// End Counter
//Start scroll to top button
$(document).ready(function () {
  // scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scroll-top-btn").fadeIn();
    } else {
      $(".scroll-top-btn").fadeOut();
    }
  });

  $(".scroll-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  })

});
