import './style.css';
import {loadHeader, updateCard} from "./inboxPage";

const Inbox = () =>{
    let todoArray = []

    const getToDo = () => todoArray;

    const addToDo = (value) =>{
        todoArray.push(value)
    }

    const removeTodo = (value) =>{
        var index = todoArray.indexOf(value);
        if (index > -1) {
            todoArray.splice(index, 1);
        }
    }

    return{
        todoArray,
        getToDo,
        addToDo,
        removeTodo,
    }
}

const Card = (title) =>{
    return{
        title
    }
}

const ManageCards = (() =>{
    const openForm = (inbox) => {
        //Make the register visible
        document.getElementById("popupForm").style.display = "block";
        //Add Event listener for the buttons
        //Close event
        document.getElementById("close").addEventListener("click", ()=>{
            closeForm()
        },{once: true})
        //Save Event
        document.getElementById("save").addEventListener("click", () =>{
            if (document.querySelector("input").textContent != undefined){
                addCard(inbox) 
                document.querySelector("#title").textContent = undefined     
                closeForm()
        }
        })
    }
    const closeForm = () => {
        document.getElementById("popupForm").style.display = "none";
    }

    const addCard = (inbox) =>{
        let info = document.querySelector('input').textContent
        console.log(info)
        let new_card = Card(info)
        inbox.addToDo(new_card)
        updateCard(inbox)
    }

    return{
        openForm,
        closeForm
    }
})();


var inbox = Inbox()
inbox.addCard(Card("First Card"))

loadHeader()


document.getElementById("addCard").addEventListener("click", () =>{
    ManageCards.openForm(inbox)
})
