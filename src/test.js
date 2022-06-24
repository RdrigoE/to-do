print = function(value){
    console.log(value)
}

const Inbox_v2 = () =>{
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

// let inbox = Inbox_v2()
// inbox.addToDo("Call Joana!")
// inbox.addToDo("Eat the yogurt")
// inbox.removeTodo("Call Joana!")
// print(inbox.getToDo())

const Card = (title) =>{
    return{
        title
    }
}

a = Card("Go run for 10 min!")

print(a)