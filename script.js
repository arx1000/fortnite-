alert("'hi and welcom to fortnite  :)"); 
let visitorName = prompt("are this your first time in fortnite : ")
console.log(visitorName)
let isCoolWithIt = confirm("I hop you have a good time whit us don'y be tocsix whit the other players that's all have fun :)" )
console.log(isCoolWithIt )
$(document).ready(function(){
    $(".dropdown").on("hide.bs.dropdown", function(){
      $(".btn").html('Dropdown <span class="caret"></span>');
    });
    $(".dropdown").on("show.bs.dropdown", function(){
      $(".btn").html('Dropdown <span class="caret caret-up"></span>');
    });
  });  