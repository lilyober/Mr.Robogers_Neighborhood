// UI Logic
function results() {
    makingAr();
    let resultAr = [];
    array.foreach(function (element) {
        if (array.includes(1)) {
            resultAr.push("Bleep!");
        } else if (array.includes(2)) {
            resultAr.push("Bloop!");
        } else if (array.includes(3)) {
            resultAr.push("Won't you be my neighbor?");
        } else {
            resultAr.push(array);
        }

    });
    let p = document.getElementById("results");
    p.innerText = array.join(", ");
};

// Business Logic

function makingAr() {
    const inputNum = document.getElementById("number").value;
    let array = [];

    for (let index = 0; index <= inputNum; index += 1) {
        array.push(index);
    };
};

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        results();
    });
};