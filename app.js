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