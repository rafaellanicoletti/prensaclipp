$(document).ready(function() {
    $(document).scroll(function () {
        windowScroll();
    });
  
    function windowScroll() {
        var st = $(document).scrollTop();
        var screenWidth = $(window).width();
  
        if (screenWidth < 768) {
            $("#aff").css({ left: "0px" });
            $("#services").css({ left: "0px" });
            return;
        }
  
        if (st < 1200) {
            $("#aff").css({ 
                left: (80 - st * 0.15) + "px"
            });
  
            $("#services").css({ 
                left: (10 + st * 0.15) + "px"
            });
        }
    }
  });
  console.log("Screen width:", screenWidth);  

document.querySelectorAll('.navbar-nav a').forEach(function(navLink) {
    navLink.addEventListener('click', function () {
      var navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
        bsCollapse.hide();
      }
    });
  });

  $('#carouselExampleControls').carousel({
    interval: 2000
  });


  document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('#reviews-carousel .review');
    let currentIndex = 0;
    let interval;

    function showReview(index) {
      reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
      });
    }

    function nextReview() {
      currentIndex = (currentIndex + 1) % reviews.length;
      showReview(currentIndex);
    }

    function prevReview() {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      showReview(currentIndex);
    }

    // Initialize
    showReview(currentIndex);

    // Auto rotate every 5 seconds
    interval = setInterval(nextReview, 5000);

    // Controls
    document.getElementById('nextBtn').addEventListener('click', () => {
      nextReview();
      resetInterval();
    });
    document.getElementById('prevBtn').addEventListener('click', () => {
      prevReview();
      resetInterval();
    });

    // Reset auto rotation timer after manual control
    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextReview, 5000);
    }
  });