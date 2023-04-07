// Klik radi

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var audio = new Audio("sounds/0.mp3")
    audio.play()
    buttonAnimation(this)
});
}


function buttonAnimation(button_index) {
    
    button_index.classList.add("pressed");
    
    setTimeout(function(){
    
        button_index.classList.remove("pressed");
    
    }, 100);
    }

// Tastatura

document.getElementById("submit").addEventListener("click", function(){
    var unet_string = document.getElementById("search").value
    unet_string = unet_string.toLowerCase();
    buttonAnimation(this)
    searchAndPlaySounds(unet_string)
     if (unet_string === "giraffe"){
         var audio = new Audio("sounds/1.mp3")
         audio.play()
     }
document.getElementById("search").value = ""

    if (unet_string === "ladybug"){
        var audio = new Audio("sounds/2.mp3")
        audio.play()
    }
document.getElementById("search").value = ""

   if (unet_string === "penguin"){
    var audio = new Audio("sounds/3.mp3")
    audio.play()
}
document.getElementById("search").value = ""

if (unet_string === "diarrhea"){
    var audio = new Audio("sounds/4.mp3")
    audio.play()
}
document.getElementById("search").value = ""

if (unet_string === "toucan"){
    var audio = new Audio("sounds/5.mp3")
    audio.play()
}
document.getElementById("search").value = ""

if (unet_string === "coffee"){
    var audio = new Audio("sounds/6.mp3")
    audio.play()
}
document.getElementById("search").value = ""

if (unet_string === "caterpillar"){
    var audio = new Audio("sounds/7.mp3")
    audio.play()
}
document.getElementById("search").value = ""
})

function searchAndPlaySounds(some_string){

    var audio = new Audio ("sounds/"+ some_string + ".mp3")
    audio.play()
}
