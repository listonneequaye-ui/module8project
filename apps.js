let hiddenStar = Math.floor(Math.random() * 3);

function checkBox(number) {
    let boxes = document.querySelectorAll(".boxes button");
    let message = document.getElementById("message");

    if (number === hiddenStar) {
        boxes[number].innerHTML = "⭐";
        message.innerHTML = "Congratulations! You found the Secret Star!";
        message.style.color = "green";
    } else {
        boxes[number].innerHTML = "❌";
        message.innerHTML = "Oops! Try again.";
        message.style.color = "red";
    }

    boxes[number].disabled = true;
}

function resetGame() {
    hiddenStar = Math.floor(Math.random() * 3);

    let boxes = document.querySelectorAll(".boxes button");

    boxes.forEach(box => {
        box.innerHTML = "❓";
        box.disabled = false;
    });

    document.getElementById("message").innerHTML = "Good luck!";
}
