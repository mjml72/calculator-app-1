let screen = document.getElementById("pantalla");
let teclas = document.querySelectorAll(".teclas");

let calculation = [];
let accumulativeCal = "";

function calculate(button) {
    const value = button.textContent;
    if(value === "AC"){
        calculation = [];
        screen.textContent = "0";
    }else if(value === "="){
        screen.textContent = eval(accumulativeCal);
        calculation = [screen.textContent];
    }else{
        calculation.push(value);
        accumulativeCal = calculation.join("");
        screen.textContent = accumulativeCal;
    }
}

teclas.forEach(button => {
    button.addEventListener("click", () => {
        calculate(button);
    })
})

