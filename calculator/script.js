const display = document.querySelector('#display');
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.textContent;

        if (val === "AC") {
            currentInput = "";
            display.textContent = "0";
        } else if (val === "DEL") {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || "0";
        } else if (val === "=") {
            try {
                let result = currentInput.replace(/x/g, "*").replace(/\/{2,}/g, "/");
                display.textContent = eval(result);
                currentInput = display.textContent;
            } catch {
                display.textContent = "Error";
                currentInput = "";
            }
        } else {
            currentInput += val;
            display.textContent = currentInput;
        }
    });
});