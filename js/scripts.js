// UI Logic
const roboChanger= function roboChanger() {
    let resultAr = [];
    let fillerAr = [];

    fillerAr.forEach((element) => {
        if (element.includes(1)) {
            resultAr.push("Bleep!");
        } else if (element.includes(2)) {
            resultAr.push("Bloop!");
        } else if (element.includes(3)) {
            resultAr.push("Won't you be my neighbor?");
        } else {
            resultAr.push(element);
        }
    });
};

// Business Logic
function makingFinalAr() {
    let arrayInput = [];
    const inputNum = document.getElementById("number").value;

    for (let index = 0; index <= inputNum; index += 1) {
       roboChanger(arrayInput).push;
    };

};

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        roboChanger();
    });
};