// UI Logic
function results() {
    let resultAr = [];

    arrayInput.forEach(function (element) {
        if (element.includes(1)) {
            resultAr.push("Bleep!");
        } else if (array.includes(2)) {
            resultAr.push("Bloop!");
        } else if (array.includes(3)) {
            resultAr.push("Won't you be my neighbor?");
        } else {
            resultAr.push(element);
        }
    });
    // let p = document.getElementById("results");
    // p.innerText = resultAr.join(", ");
};

// Business Logic
let arrayInput = [];
function makingAr() {
    let arrayInput = [];
    const inputNum = document.getElementById("number").value;

    for (let index = 0; index <= inputNum; index += 1) {
        arrayInput.push(index);
    };

    results(arrayInput);

    let p = document.getElementById("results");
    p.innerText = resultAr.join(", ");
};

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        makingAr();
    });
};