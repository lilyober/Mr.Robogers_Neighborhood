function roboChanger() {
    let resultAr = [];
    let fillerAr = makingAr();

    fillerAr.forEach(function (element) {
        if (element.includes("3")) {
            resultAr.push(" Won't you be my neighbor");
        } else if (element.includes("2")) {
            resultAr.push(" Bloop");
        } else if (element.includes("1")) {
            resultAr.push(" Bleep");
        } else {
            resultAr.push(element);
        }
    });

    return resultAr.join(', ');
}

function makingAr() {
    let arrayInput = [];
    const inputNum = document.getElementById("number").value;

    for (let index = 0; index <= inputNum; index += 1) {
        arrayInput.push(index.toString());
    };

    return arrayInput;
}

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
       
        document.querySelector("span#results").innerText = roboChanger()

        const formRemove = document.querySelector("form");
        formRemove.remove();
        document.querySelector("div#resetButton").removeAttribute("class");
    });
}