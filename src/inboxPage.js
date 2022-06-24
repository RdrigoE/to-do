const loadHeader = () =>{
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
    button.textContent = "addCard"
    content_title.appendChild(button)
    div.appendChild(content_title)
    master_content.appendChild(div)
}

const updateCard = (array) =>{
    let cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        card.remove();
      });
    
    let content = document.querySelector("#content")
    array.todoArray.forEach(x =>{
        let card = document.createDocumentFragment();
        card = document.createElement("div");
        card.className = "card"
        let join = document.createElement("div");
        join.className = "join"
        let check = document.createElement("button");
        check.className = "check"
        let p = document.createElement("p")
        p.className = "todoTitle"
        p.textContent = x.title

        
        join.appendChild(check)
        join.append(p)
        card.appendChild(join)
        content.appendChild(card)
    })
}



export {loadHeader, updateCard};