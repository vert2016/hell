$(document).ready(function(){
    $("#open_quiz").click(function(){
        $("#quiz_panel").slideToggle("slow")(function(){
            $("#arrow").rotate({angle:45});
        });
        
    });
});