// UI Logic
// function results() {
//     let resultAr = [];
//     let array = [];
//     makingAr();
//     array.forEach(function (element) {
//         if (element.includes(1)) {
//             resultAr.push("Bleep!");
//         } else {
//             resultAr.push(element);
//         };
//         console.log(resultAr);
//         let p = document.getElementById("results");
//         p.innerText = resultAr.join(", ");
//     });
// };

// Business Logic
function makingAr() {
    let array = [];
    const inputNum = document.getElementById("number").value;

    for (let index = 0; index <= inputNum; index += 1) {
        array.push(index);
    };
};

function results() {
    let resultAr = [];
    let array = [];
    makingAr();
    array.forEach(function (element) {
        if (element.includes(1)) {
            resultAr.push("Bleep!");
        } else {
            resultAr.push(element);
        };
        console.log(resultAr);
        let p = document.getElementById("results");
        p.innerText = resultAr.join(", ");
    });
};

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        results();
    });
};