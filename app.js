$(document).scroll(function () {
    windowScroll()
});

function windowScroll() {
    var st = $(document).scrollTop();
    console.log(st)

    if (st < 1200){
        $("#aff").css({ "top": 90 - st * 0.05 + "px" });
        $("#aff").css({ "left": 80 - st * 0.15 + "px" });
        $("#services").css({ "top": 40 + st * 0.05 + "px" });
        $("#services").css({ "left": 10 + st * 0.15 + "px" });
        
    }
};


