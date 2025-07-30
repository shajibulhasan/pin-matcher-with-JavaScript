const notMatch = document.getElementById("notMatch");
notMatch.style.display = "none";
const match = document.getElementById("match");
match.style.display = "none";
const showPin = document.getElementById("showPin");
document.getElementById("pinGenerate").addEventListener("click", function() {
    let pin = Math.floor(1000 + Math.random() * 9000);
    showPin.value = pin;
});

const button = document.getElementsByClassName("button");
const display = document.getElementById("display");
for (let i = 0; i < button.length; i++) {
    if (button[i].innerText === "C") {
        button[i].addEventListener("click", function() {
            display.value = "";
        });
    }
    else if (button[i].innerText === "<") {
        button[i].addEventListener("click", function() {
            display.value = display.value.slice(0, -1);
        });
    }
    else{
        button[i].addEventListener("click", function() {
            display.value += button[i].innerText;
        });
    }
}
document.getElementById("submit").addEventListener("click", function() {
    const pin = showPin.value;
    const userInput = display.value;
    if (pin === userInput) {
        match.style.display = "block";
        notMatch.style.display = "none";
    } else {
        notMatch.style.display = "block";
        match.style.display = "none";
    }
});
