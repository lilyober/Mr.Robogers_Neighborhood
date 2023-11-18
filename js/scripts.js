// UI Logic

// function result(){
//     for (inputed num < i++ {
//         if input includes.(1)
//             let  "Bleep".
//         }
//     })


//  results
// }







// Business Logic

function makingAr() {
    const inputNum = document.getElementById("number").value;
    let array = [];

    for (let index = 0; index <= inputNum; index += 1) {
        array.push(index);
    };

    let p = document.getElementById("results");
    p.innerText = array.join(", ");
};

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        makingAr();
    });
};