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








// if (const user = JSON.parse(localStorage.getItem('userData'));}
// document.getElementById('welcome-message').innerText = `Welcome, ${user.username}!`;)
// }
// else {
//     localStorage.getItem('currentLoggedinUser') !== 'true') {
//         alert('Please log in to access the dashboard.');
//         window.location.href = "../Auth/login-signup.html";

        
//     }hai







var userTaskData = [];

function add() {
    const inputBox = document.getElementById("input-box");
    const ul = document.getElementById("ul");

    if (inputBox.value.trim() !== "") {
        var userObj = {
            item: inputBox.value.trim(),
        };
        userTaskData.push(userObj);
        saveData();
        showData();
        inputBox.value = "";
    }
}

function deleteTask(index) {
    userTaskData.splice(index, 1); // Remove item from array
    saveData();
    showData();
}

function saveData() {
    localStorage.setItem("usertask", JSON.stringify(userTaskData));
}

function showData() {
    const ul = document.getElementById("ul");
    ul.innerHTML = "";

    userTaskData = JSON.parse(localStorage.getItem("usertask")) || [];
    userTaskData.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task.item}</span>
            <i class='fas fa-trash delete-icon' onclick='deleteTask(${index})'></i>`;
        ul.appendChild(li);
    });
}

function handleEnter(event) {
    if (event.key === "Enter") {
        add();
    }
}

function logout() {
    localStorage.removeItem("currentlogin");
    window.location = "../login-signup/login.html";
}

window.onload = showData; // Load tasks on page refresh