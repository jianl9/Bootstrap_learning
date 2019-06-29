$(document).ready(function () {
    $('#mycarousel').carousel({interval:2000});
    // play/pause
    // $('#carousel-pause').click(function () {
    //     $('#mycarousel').carousel('pause')
    // });
    // $('#carousel-play').click(function () {
    //     $('#mycarousel').carousel('cycle')
    // });

    // toggle play/pause
    $("#carouselButton").click(function(){
        let $carouseBtn = $("#carouselButton");
        let $myc = $("#mycarousel");
        if ($carouseBtn.children("span").hasClass('fa-pause')) {
            $myc.carousel('pause');
            $carouseBtn.children("span").removeClass('fa-pause');
            $carouseBtn.children("span").addClass('fa-play');
        }
        else if ($carouseBtn.children("span").hasClass('fa-play')){
            $myc.carousel('cycle');
            $carouseBtn.children("span").removeClass('fa-play');
            $carouseBtn.children("span").addClass('fa-pause');
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