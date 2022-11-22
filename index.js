var n=document.querySelectorAll(".drum").length;//to select all the elements which have the drum class we find the length of that
for(var i=0;i<n;i++)// we run loop from index 0 to n
{
document.querySelectorAll("button")[i].addEventListener("click",function(){//we will use the addevent listener to each element of the inside the button tag
var buttonInnerhtml=this.innerHTML;
   makesound(buttonInnerhtml);
   buttonanimation(buttonInnerhtml);
});
}
document.addEventListener("keypress",function(event){//Add keypress function which will describe what will happen when a particular key is produced.Here we will produce the sound effect and animation effect
makesound(event.key);
buttonanimation(buttonInnerhtml);
}
);
 function makesound(key){  //Now we will code sound() function. It will tell which sound should be played when we press or/and click a specific key.
 switch(key){//Here we have already stored some basic sound effects of drums in sound directory 
   case "w" :
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play(); 
    break;
    case "a" :
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play(); 
    break;
    case "s" :
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play(); 
    break;
    case "d" :
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play(); 
    break;
    case "j" :
    var audio=new Audio("sounds/snare.mp3");
    audio.play(); 
    break;
    case "k" :
    var audio=new Audio("sounds/crash.mp3");
    audio.play(); 
    break; 
    case "l" :
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play(); 
    break;
   default: 
    console.log(buttonInnerhtml); 
}
}
function buttonanimation(key){//Now we will code animation() function. This will animate the button differently when it is being clicked.
var activekey=document.querySelector("."+key); 
activekey.classList.add("pressed");// To do this, we will add pressed (which we have already defined in CSS file) class to the respective button when it is being clicked.
setTimeout(function(){  
activekey.classList.remove("pressed");},10);//here 10 second denotes that after 10 millisecond the animation of the drums will seen by the user
}