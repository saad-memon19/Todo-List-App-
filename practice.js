// let inputs = document.getElementById("inp")
// let text = document.querySelector(".text");


// let itemArr = []

// function add() {
//     if (!inputs.value) {
//         alert("Please Enter your task")
//     } else {
//         let itemObj = { item: inputs.value };
//         itemArr.push(itemObj)
//         console.log(itemObj);
//         localStorage.setItem("todo", JSON.stringify(itemArr));
//         const item = JSON.parse(localStorage.getItem("todo"));
//         let newElement = document.createElement("ul")
//         let data = item.map((data) => {
//             newElement.innerHTML = `${data.item}<h1>x</h1>`;
//             text.appendChild(newElement);
//             inputs.value = "";
//             newElement.querySelector("h1").addEventListener("click", remove);
//         })
//         function remove() {
//             newElement.remove()
//         }
//     }
// }
