// document.getElementById("containerServicios").onscroll = function() {myFunction()};

$(document).scroll(function () {
    windowScroll()
});

function windowScroll() {
    var st = $(document).scrollTop();

    $("#aff").css({ "top": 90- st * 0.05 + "px" });
    $("#aff").css({ "left": 80 - st * 0.15 + "px" });
    
};