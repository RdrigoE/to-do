const loadHeader = (array) =>{
    let main = document.querySelector(".main")
    let master_content = document.createDocumentFragment();
    master_content = document.createElement("div");
    master_content.id = "content"
    main.appendChild(master_content)

    let div = document.createDocumentFragment();
    let content_title = document.createElement("div");
    content_title.className = "content-title";
    content_title.textContent = "Inbox"
    div.appendChild(content_title);
    let button = document.createElement("button");
    button.id = "addCard";
    button.textContent = "New Task"
    content_title.appendChild(button)
    div.appendChild(content_title)
    master_content.appendChild(div)
    updateCard(array)
}

const updateCard = (array) =>{
    let cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        card.remove();
      });
    
    let content = document.getElementById("content")
    let count = 0
    array.forEach(x =>{
    
        let big_card = document.createDocumentFragment();
        let card = document.createElement("div");
        card.className = "card " + String(count)
        count++;
        let join = document.createElement("div");
        join.className = "join"
        let check = document.createElement("button");
        check.className = "check"
        let p = document.createElement("p")
        p.className = "todoTitle"
        p.innerHTML += x.title
                
        join.appendChild(check)
        join.append(p)
        card.appendChild(join)
        big_card.appendChild(card)
        content.appendChild(big_card)
    
    })
}

let deleteChecks = (inbox) => {
    let cards2 = document.querySelectorAll(".card")
    cards2.forEach(card => {
        card.querySelector(".check").addEventListener("click", () => {
            inbox.removeIndex((card.className.slice(4,)));
            card.remove();
            updateNumbers()
        })
    })
    
}

let updateNumbers = () => {
    let cards2 = document.querySelectorAll(".card")
    let count = 0
    cards2.forEach(card => {
        card.className = card.className.slice(0,5) + count
        count++
        })
}


export {loadHeader, updateCard,deleteChecks};