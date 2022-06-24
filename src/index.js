import './style.css';
import {loadHeader, updateCard} from "./inboxPage";

const Inbox = () =>{
    let list = []

    const addToDo = (value) =>{
        if (value != undefined | value != ""){
            list.push(value)
        }
    }

    const removeTodo = (value) =>{
        var index = list.indexOf(value);
        if (index > -1) {
            list.splice(index, 1);
        }
    }

    return{
        list,
        addToDo,
        removeTodo,
    }
}

const Card = (title) =>{
    var title = title
    return{
        title
    }
}

let openForm = () => {
    //Make the register visible
    document.getElementById("popupForm").style.display = "block";
    //Add Event listener for the buttons
    //Close event
    document.getElementById("close").addEventListener("click", ()=>{
        document.getElementById("popupForm").style.display = "none";
    },{once: true})
    //Save Event
    document.getElementById("save").addEventListener("click", () =>{
        if (document.getElementById("title").value != undefined){
            var input = document.getElementById("title").value
            let c = Card(input)
            inbox.addToDo(c)
            updateCard(inbox.list)
            document.getElementById("title").value = ""   
            document.getElementById("popupForm").style.display = "none";
        }
    },{once: true})
}

let inbox = Inbox()

loadHeader(inbox.list)

document.getElementById("addCard").addEventListener("click", () =>{
    openForm()
})

