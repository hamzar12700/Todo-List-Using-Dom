let inputField = document.querySelector(".inputField");
let button = document.querySelector(".btn");
let content = document.querySelector(".content");

function todoList() {
    let pra = document.createElement("p");
    let btn = document.createElement("button");
    
    btn.classList.add("deleteButton");
    btn.innerHTML = "Delete";
    
    pra.innerText = inputField.value;  // Add the input text to the paragraph first
    pra.appendChild(btn);  // Append the delete button to the paragraph
    
    content.appendChild(pra);
    inputField.value = ""
}

// btn.addEventListener("click",()=>{
//     console.log(inputField.value);

// })

button.addEventListener("click", () => {
  todoList();
});

content.addEventListener("click", (e)=>{
    // console.log(e.target);
 if(e.target.classList.contains("deleteButton")){
    e.target.parentElement.remove();
 }
    
})