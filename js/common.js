$(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function MOBARS() {
        $(".mo_bars > button").click(function(){
            $(".mohd_wrap").addClass("active");
        });

        $(".close_icon > button").click(function() {
            $(".mohd_wrap").removeClass("active");
        }); 
    }
    MOBARS();
});
