
const item = document.querySelector("#item");
const toDoBox =document.querySelector("#to-do-box");
item.addEventListener("keyup",function(event){if(event.key == "Enter"){ addToDo(this.value);   this.value = ""; saveData()}})

const addToDo = (item) =>
{
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item} 
    <i class="fa-solid fa-xmark"></i>`;
    // saveData();

    listItem.addEventListener("click",function(){this.classList.toggle("done");saveData()})
    listItem.querySelector("i").addEventListener("click",function(){listItem.remove();saveData()})
    toDoBox.appendChild(listItem);
}

const saveData = function()
{
    localStorage.setItem('data',listItem.innerHTML);

}

const showData = function()
{
    listItem.innerHTML = localStorage.getItem('data');
}
saveData();