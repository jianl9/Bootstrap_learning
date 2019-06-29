$(document).ready(function () {
    var $carouselBtn = $("#carouselButton"),
        $myc = $("#mycarousel");

    $myc.carousel({interval:2000});

    // play/pause
    // $('#carousel-pause').click(function () {
    //     $('#mycarousel').carousel('pause')
    // });
    // $('#carousel-play').click(function () {
    //     $('#mycarousel').carousel('cycle')
    // });

    // toggle play/pause
    $carouselBtn.click(function(){
        if ($carouselBtn.children("span").hasClass('fa-pause')) {
            $myc.carousel('pause');
            $carouselBtn.children("span").removeClass('fa-pause');
            $carouselBtn.children("span").addClass('fa-play');
        }
        else if ($carouselBtn.children("span").hasClass('fa-play')){
            $myc.carousel('cycle');
            $carouselBtn.children("span").removeClass('fa-play');
            $carouselBtn.children("span").addClass('fa-pause');
        }
    });

    // login table display/hide
    $('#loginBtn').click(function () {
        $('#loginModal').modal("show");
    });

    // reserve table
    $('#reserveBtn').click(function () {
        $('#reserveModal').modal("show");
    });

    // $('[data-toggle="tooltip"]').tooltip();
});