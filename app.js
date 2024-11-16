let inputs = document.getElementById("inp")

let text = document.querySelector(".text")
function add() {
    if (inputs.value == "") {
        alert("Please Enter your task")
    }else{
        let newElement = document.createElement("ul")
        newElement.innerHTML = `${inputs.value}<h1>x</h1>` ;
        text.appendChild(newElement);
        inputs.value="";
        newElement.querySelector("h1").addEventListener("click",remove);
        function remove (){
            newElement.remove()
        }
    }
}
