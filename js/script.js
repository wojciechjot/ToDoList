(function () {
    
var boards = document.querySelectorAll(".board"),
    infoImg = document.querySelectorAll(".info"),
    deleteImg = document.querySelectorAll(".delete"),
    textAdd = document.getElementById("textAdd"),
    imgAdd = document.getElementById("imgAdd");
    
    
document.getElementById("toDoCounter").innerHTML = 0;
document.getElementById("doingCounter").innerHTML = 0;
document.getElementById("doneCounter").innerHTML = 0;
    

function makeArray(nodeList) {
    
    var arr = [];
    
    for(var i = 0; i < nodeList.length; i++) {
        arr.push(nodeList[i]);
    }
    
    return arr;
}
    
function createItem() {
    
    var newItem = document.createElement('div'),
        newTarget = document.createElement('div'),
        newPara = document.createElement('p'),
        newIcons = document.createElement('div'),
        newInfoImg = document.createElement('img'),
        newDeleteImg = document.createElement('img'),
        newRightImg = document.createElement('img'),
        add = document.getElementById("add"),
  
        parentAdd = add.parentNode;
    
    
    newItem.classList.add("item");
    newTarget.classList.add("target");
    newTarget.classList.add("target--border-ToDo");
    newTarget.classList.add("target--normal-height");
    newPara.classList.add("target--name");
    newIcons.classList.add("icons");
    newInfoImg.setAttribute('src', 'icons/information.png');
    newInfoImg.setAttribute('alt', 'information');
    newInfoImg.classList.add("info");
    newDeleteImg.setAttribute('src', 'icons/clear-button.png');
    newDeleteImg.setAttribute('alt', 'delete');
    newDeleteImg.classList.add("delete");
    newRightImg.setAttribute('src', 'icons/right-pointing-arrow.png');
    newRightImg.setAttribute('alt', 'right arrow');
 
    
    newPara.innerHTML = textAdd.value;
    
    parentAdd.insertBefore(newItem, add);
    
    newItem.appendChild(newTarget);
    newTarget.appendChild(newPara);
    newItem.appendChild(newIcons);
    newIcons.appendChild(newRightImg);
    newIcons.appendChild(newInfoImg);
    newIcons.appendChild(newDeleteImg);

    
    textAdd.value = "";
}
    
function addItem() {
    
        var textAdd = document.getElementById("textAdd");


    if(textAdd.value === "") {
        alert("Wpisz coś bo error :(");
    }
    else {
        
        boardHeight("plus");
        
        setTimeout(function() {
            createItem();
        }, 51);  

    setTimeout(function() {
        var deleteImg = document.querySelectorAll(".delete");
        makeArray(deleteImg);
        for(var i = 0; i < deleteImg.length; i++) {
            deleteImg[i].addEventListener("click", deleteItem, false);
        }
        var infoImg = document.querySelectorAll(".info");
        makeArray(infoImg);
        for(var i = 0; i < infoImg.length; i++) {
            infoImg[i].addEventListener("click", itemHeight, false);
        } 
    }, 52);
        
    }  
        
}
    
function boardHeight(char) {
    
    boardsArray = makeArray(boards),
    height = boardsArray[0].offsetHeight;
    if(char === "plus") {
        boardsArray[0].style.height = (height + 50).toString() + "px";
        document.getElementById("toDoCounter").innerHTML = parseInt(document.getElementById("toDoCounter").innerHTML, 10) + 1; 
        console.log(height);
    }
    else {
        boardsArray[0].style.height = (height - 50).toString() + "px";
        document.getElementById("toDoCounter").innerHTML = parseInt(document.getElementById("toDoCounter").innerHTML, 10) - 1;  
                console.log(height);

    }
    
}
    
function itemHeight(char) {
    
    var target = this.parentNode.previousSibling;
    height = target.offsetHeight;

    alert(height);
    
}
    
function deleteItem() {
    
    var grandParent = this.parentNode.parentNode;
    boards[0].removeChild(grandParent);
    boardHeight();
    
}
    
    
    
    
    
function keyDownAddItem(e) {
    
    var keyCode = e.keyCode;
    
    if(keyCode === 13)
        {
            addItem();
        }
}    
    
 
makeArray(infoImg);
for(var i = 0; i < infoImg.length; i++) {
    infoImg[i].addEventListener("click", itemHeight, false);
}
    
makeArray(deleteImg);
for(var i = 0; i < deleteImg.length; i++) {
    deleteImg[i].addEventListener("click", deleteItem, false);
}
    
imgAdd.addEventListener("click", addItem, false);
textAdd.addEventListener("keydown", keyDownAddItem, false);

    
})()