$( document ).ready(function() {
    $("#contact-section .dropdown-item").click(function(){
        var text = $(this).text();
        $("#contact-section .dropdown-toggle").text(text);
    });
    $(".menu-area a").click(function(){
        var item = $(this).attr("data-item");
        $(".menu-area a").removeClass('active');
        $(this).addClass('active');
        $(".menu-footer a").removeClass('active');
        $(".menu-footer ." + item).addClass('active');
    });
    $(".menu-footer a").click(function(){
        var item = $(this).attr("data-item");
        $(".menu-footer a").removeClass('active');
        $(this).addClass('active');
        $(".menu-area a").removeClass('active');
        $(".menu-area ." + item).addClass('active');
    });
});