let current = 0;

function resetAllLights() {
    for (let i = 0; i < 4; i++) {
        document.querySelector("#red-" + i).style.backgroundColor = "gray";
        document.querySelector("#yellow-" + i).style.backgroundColor = "gray";
        document.querySelector("#green-" + i).style.backgroundColor = "gray";
    }
}

function setSignal(index, color) {
    resetAllLights();

    if (color === "red") {
        document.querySelector("#red-" + index).style.backgroundColor = "red";
        for (let i = 0; i < 4; i++) {
            if (i !== index) {
                document.querySelector("#green-" + i).style.backgroundColor = "green";
            }
        }
    }

    if (color === "yellow") {
        document.querySelector("#yellow-" + index).style.backgroundColor = "yellow";
    }
}

function changeSignal() {
    setSignal(current, "yellow");

    setTimeout(function () {
        current = (current + 1) % 4;
        setSignal(current, "red");
    }, 1000);
}


setSignal(0, "red");


setInterval(changeSignal, 3000);