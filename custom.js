$( document ).ready(function() {
    let modal = bootstrap.Modal.getOrCreateInstance($("#modalFormResult")) // Returns a Bootstrap modal instance
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
    $("#form-contact").submit(function(e) {
        e.preventDefault();
        if($("#exampleFormName").val() == ""){
            alert("Please enter your name");
        }else if($("#exampleFormEmail").val() == ""){
            alert("Please enter your email");
        }else if($("#exampleFormPhone").val() == ""){
            alert("Please enter your phone");
        }else if($("#exampleFormControlTextarea").val() == ""){
            alert("Please enter your message");
        }else{
            modal.show();
        }
    });
    $("#btnConfirm").click(function(){
        modal.hide();
        $("#exampleFormName").val("");
        $("#exampleFormEmail").val("");
        $("#exampleFormPhone").val("");
        $("#exampleFormControlTextarea").val("");
    });
});