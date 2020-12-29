// let menu = document.getElementById("menu");

$("#menu").click(function(){    
    this.classList.toggle("change");
    
    if ($("#menu").hasClass("change")) {
        $(".full-menu").css({'left':'0'})
    } else {
        $(".full-menu").css({'left':'-100%'})
    }
});