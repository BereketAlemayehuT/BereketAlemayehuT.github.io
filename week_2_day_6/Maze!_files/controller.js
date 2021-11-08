$(document).ready(function(){
    $("#start").click(function(){
        
        $(".boundary").hover(function(){
            $(".boundary").addClass("youlose");
            $("#status").text("You Lost!!!");
        });

        $("body").hover(function(){
            alert("hh");
            //$(".boundary").addClass("youlose");
            //$("#status").text("You Lost!!!");
        });

        $("#end").hover(function(){
            $("#status").text("You Won!!!");
            //alert("hh");
        });
        
    });

});