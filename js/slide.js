$(document).ready(function(){
    $(".slide").hover(function(){
        $(this).find("div.snipit").slideDown("slow");
    },function(){
        $(this).find("div.snipit").slideUp("slow");    
    });
});
