window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});
var length = document.querySelectorAll(".agent").length
for(i=0;i<length;i++){

document.querySelectorAll(".agent")[i].addEventListener("click",function(){
   
      
    var agent_name = (this.innerHTML);
    cb(agent_name);


})
}
 
 

function cb(val){
   switch (val) {
    
    case "sova":
       document.body.style.backgroundImage = "url('./images/sova.png')";
        var audio = new Audio("./sounds/sova.mp3");
        audio.play();
        break;
           case "jett":
       document.body.style.backgroundImage = "url('./images/jett.png')";
        var audio = new Audio("./sounds/jett.mp3");
        audio.play();
        break;
           case "sage":
       document.body.style.backgroundImage = "url('./images/sage.png')";
        var audio = new Audio("./sounds/sage.mp3");
        audio.play();
        break;
           case "astra":
       document.body.style.backgroundImage = "url('./images/astra.png')";
        var audio = new Audio("./sounds/astra.mp3");
        audio.play();
        break;
           case "brim":
       document.body.style.backgroundImage = "url('./images/brim.png')";
        var audio = new Audio("./sounds/brim.mp3");
        audio.play();
        break;
           case "phonix":
       document.body.style.backgroundImage = "url('./images/phonix.png')";
        var audio = new Audio("./sounds/phonix.mp3");
        audio.play();
        break;
           case "breach":
       document.body.style.backgroundImage = "url('./images/breach.png')";
        var audio = new Audio("./sounds/breach.mp3");
        audio.play();
      
        break;
   
    default:
        var audio = new Audio("./sounds/select.mp3");
        audio.play()
        break;
   }
 
}     