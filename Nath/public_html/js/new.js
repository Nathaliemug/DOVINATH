$(document).ready(function () {

    $(".container-fluid .navigator .ecole-solidaire").addClass("animate");
    $(".mobile-icon").click(function () {
        $(".main-menu").toggle();
        $(".mobile-icon").toggleClass("fa-bars fa-times");
        $(".para1").css("left");

        $(".mobile-icon").click(function () {
            $(".menu").toggle();
            $(".mobile-icon").toggleClass("fa-bars fa-times");
        });
    });
});



