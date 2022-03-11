var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
$(document).ready(function(){
    $(".color-carousel .card").click(function (){
        $(".color-carousel .card.border-indigo").removeClass("border-indigo")
        $(".picture-part > .active").fadeOut(300)
        $(".picture-part > .active").removeClass("active")
        let target = $(this).data("target")
        $(target).fadeIn(700)
        $(target).css("display" , "flex")
        $(target).addClass("active")
        $(this).addClass("border-indigo")
    });
})