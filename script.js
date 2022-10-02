var dino = document.getElementById("dino");
var block = document.getElementById("block");
function jump() {
    if (block.style.display == "none") {
        block.style.display = "block";
    }
    if (block.style.animation == "none") {
        block.style.animation = "block 1s infinite linear";
    }
    if (dino != null) {
        dino.classList.add("animate");
    }
    setTimeout(function () {
        if (dino != null) {
            dino.classList.remove("animate");
        }
    }, 500);
}
var checkDead = setInterval(function () {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && dinoTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose!");
    }
}, 10);