var time = 2000;
$("#header_presentation").click(function() {
    $('html, body').animate({
        scrollTop: $("#presentation").offset().top
    }, time);
});

$("#header_bas").click(function() {
    $('html, body').animate({
        scrollTop: $("#bas").offset().top
    }, time);
});



/*************************************/

//cacher
$( "#changelog" ).hide();
$( "#licence_div" ).hide();
$( "#contribuer_div" ).hide();
$( "#acteurs_div" ).hide();

//chargement
mdtohtml(changelogfile,'changelog'); 
mdtohtml(licencefile,'licence'); 
mdtohtml(participatefile,'contribuer'); 
mdtohtml(contributorfile,'acteurs'); 
//changelog
$("#changelog_button" ).click(function() {     
   $("#changelog").toggle("slide", { direction: "up" }, 1000);
     $('html, body').animate({
        scrollTop: $("#changelog").offset().top + 50
    }, time);
});
//licence
$("#button_licence" ).click(function() { 

   $("#licence_div").toggle("slide", { direction: "up" }, 1000);
   $('html, body').animate({
        scrollTop: $("#licence_div").offset().top + 400
    }, time);
});


$("#button_contribuer" ).click(function() {     
   $("#contribuer_div").toggle("slide", { direction: "up" }, 1000);
   $('html, body').animate({
        scrollTop: $("#contribuer_div").offset().top + 400
    }, time);
});


$("#button_acteurs" ).click(function() {     
   $("#acteurs_div").toggle("slide", { direction: "up" }, 1000);
    $('html, body').animate({
        scrollTop: $("#acteurs_div").offset().top +400
    }, time);
});
