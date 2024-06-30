const inputBox = document.getElementById("input-box");
const liscontainer = document.getElementById("list-container");
console.log(liscontainer);
function addTask(){
    if(inputBox.value==""){
        alert("You must enter something...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        liscontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
liscontainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

 function saveData(){
    localStorage.setItem("data",liscontainer.innerHTML);
 }
 function showTask(){
    liscontainer.innerHTML = localStorage.getItem("data");
 }
 saveData();