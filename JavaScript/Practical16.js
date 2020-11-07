//selector
var todoin = document.querySelector(".todoin");
var todobtn = document.querySelector(".todobtn");
var todolist = document.querySelector(".todolist");
//Event Handler
todobtn.onclick = create;
todolist.onclick = checkdelete;
//Function
function create(event) {
    event.preventDefault();

    if (todoin.value === "") {
        alert("Input field cannot be blank");
    }
    else {
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("todoitem");

        newLi.innerHTML = todoin.value;
        newDiv.appendChild(newLi);

        var checkbtn = document.createElement("button");
        checkbtn.classList.add("checkbtn");
        checkbtn.innerHTML = '<i class ="fa fa-check"></i>';
        newDiv.appendChild(checkbtn);

        var deletebtn = document.createElement("button");
        deletebtn.classList.add("deletebtn");
        deletebtn.innerHTML = '<i class ="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        todolist.appendChild(newDiv);
        todoin.value = "";
    }
}

function checkdelete(e) {
    var item = e.target;
    if (item.classList[0] === "deletebtn") {
        item.parentNode.remove();
    }
    if (item.classList[0] === "checkbtn") {
        item.parentNode.classList.toggle("complete");
    }
}