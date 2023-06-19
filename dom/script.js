import data from "./data.js"

const container = document.querySelector("#menu")

const render = () => {
    menu.forEach(data => {
        const list = document.createElement("li")
        list.innerText = data.name
    
        container.appendChild(list)
    })
}

