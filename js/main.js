$(document).ready(function(){

    $("#celkovy-prehled").on("click", function(){
        $("#prehled h2, #prehled h3, #prehled p").toggle(2000);
    });

    $("#statni").on("click", function(){
        $("#symboly h2, #symboly h3, #symboly p, #symboly img").toggle(2000);
    });

    $("#zakladni-udaje").on("click", function(){
        $("#poloha div, #poloha img").slideToggle("slow");
      });

    $("#zakladni-udaje1").on("click", function(){
        $("#geografie table, #geografie tr, #geografie th, #geografie td").slideToggle("slow");
      });

    $("#zakladni-udaje2").on("click", function(){
        $("#obyvatelstvo table, #obyvatelstvo tr, #obyvatelstvo th, #obyvatelstvo td, #obyvatelstvo ul, #obyvatelstvo li").slideToggle("slow");
      });
});