print = function(value){
    console.log(value)
}

const Inbox = () =>{
    let list = []

    const addToDo = (value) =>{
        if (value != undefined & value.title != ""){
            list.push(value)
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
const Card = (title) =>{
    return{
        title
    }
}

a = Card("Go run for 10 min!")


let inbox = Inbox()
inbox.addToDo(Card("Call Joana!"))
inbox.addToDo(Card("Eat the yogurt"))
print(inbox.list)
//inbox.removeIndex(1)
print(inbox.list)
//inbox.removeIndex(0)
level1(inbox)
print(inbox.list)


function level1(list){
    level2(list)
}

function level2(list){
    inbox.removeIndex(1)
    inbox.removeIndex(0)
}

print(inbox.keys)