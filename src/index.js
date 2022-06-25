import './style.css';
import {loadHeader, updateCard, deleteChecks} from "./inboxPage";

const Inbox = () =>{
    let list = []

    const addToDo = (card) =>{
        if (card != undefined & card.title != ""){
            list.push(card)
        }
    }

    const removeTodo = (value) =>{
        var index = list.indexOf(value);
        if (index > -1) {
            list.splice(index, 1);
        }
    }

    const removeIndex = (index) =>{
        if (index > -1) {
            list.splice(index, 1);
        }
    }

    return{
        list,
        addToDo,
        removeTodo,
        removeIndex,
    }
}

const Card = (title,description,dueDate,priority) =>{
    return{
        title,
        description,
        dueDate,
        priority
    }
}

let openForm = (inbox) => {
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
            deleteChecks(inbox)
            console.log(inbox.list)

            document.getElementById("title").value = ""   
            document.getElementById("popupForm").style.display = "none";
        }
    },{once: true})
}

var inbox = Inbox()

inbox.addToDo(Card("Rodrigo de Jesus Eusebio"))

loadHeader(inbox.list)
deleteChecks(inbox)

document.getElementById("addCard").addEventListener("click", () =>{
    openForm(inbox)
})

