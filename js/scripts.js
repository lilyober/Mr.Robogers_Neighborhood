function roboChanger() {
    let resultAr = [];
    let fillerAr = makingAr();

    fillerAr.forEach(function (element) {
        if (fillerAr.includes(1)) {
            resultAr.push("Bleep!");
        } else if (fillerAr.includes(2)) {
            resultAr.push("Bloop!");
        } else if (fillerAr.includes(3)) {
            resultAr.push("Won't you be my neighbor?");
        } else {
            resultAr.push(element);
        }

        let p = document.getElementById("results");
        p.innerText = resultAr.join(", ");

    });
};

function makingAr() {
    let arrayInput = [];
    const inputNum = document.getElementById("number").value;

    for (let index = 0; index <= inputNum; index += 1) {
        arrayInput.push(index);
    };

    return arrayInput;
};

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        roboChanger();

        const formRemove = document.querySelector("form");
        formRemove.remove();
        document.querySelector("div#resetButton").removeAttribute("class");
    });
};