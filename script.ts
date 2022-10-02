var dino : any = document.getElementById("dino");
var block : any = document.getElementById("block");

function jump() : void {
    if (block.style.display == "none") {
        block.style.display = "block";
    }
    if (block.style.animation == "none") {
        block.style.animation = "block 1s infinite linear";
    }
    if (dino != null) {
        dino.classList.add("animate");
    }
    setTimeout(function() {
        if (dino != null) {
            dino.classList.remove("animate");
        }
    }, 500);
}

var checkDead = setInterval(function() : void {
    var dinoTop : number = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && dinoTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose!");
    }
}, 10);

