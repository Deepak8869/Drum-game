for(let i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        this.style.color = "white";

        let w = document.querySelector(".w");
        if(this == w){
            const audio1 = new Audio('sounds/tom-1.mp3');
        audio1.play();
        }

        let a = document.querySelector(".a");
        if(this == a){
            const audio1 = new Audio('sounds/tom-2.mp3');
        audio1.play();
        }
        let s = document.querySelector(".s");
        if(this == s){
            const audio1 = new Audio('sounds/tom-3.mp3');
        audio1.play();
        }
        let d = document.querySelector(".d");
        if(this == d){
            const audio1 = new Audio('sounds/tom-4.mp3');
        audio1.play();
        }
        let j = document.querySelector(".j");
        if(this == j){
            const audio1 = new Audio('sounds/snare.mp3');
        audio1.play();
        }
        let k = document.querySelector(".k");
        if(this == k){
            const audio1 = new Audio('sounds/crash.mp3');
        audio1.play();
        }
        let l = document.querySelector(".l");
        if(this == l){
            const audio1 = new Audio('sounds/mixkit-drum-joke-accent-579.wav');
        audio1.play();
        }
    })
}



