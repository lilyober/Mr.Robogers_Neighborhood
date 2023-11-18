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
    let array = [];
    const inputNum = document.getElementById("number").value;
    array.push(inputNum);
    // let p = document.getElementById("results");
    // p.innerText = array;
};

function addingNewAr() {
    makingAr();
    let newArray = [];
    for (let index = 0; index <= array; index += 1) {
        newArray.push(index);
        console.log(index);
    }
};

//     for (let index = 0; index <= inputNum; index + 1) {
//         array.push(array[index] + 1);
//     };

//     let p = document.getElementById("results");
//     p.innerText = array;
// }

window.onload = function () {
    let form = document.getElementById("putInANum");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addingNewAr();
    });
};



// function sentenceGen( ){
//     calls on result function
// }