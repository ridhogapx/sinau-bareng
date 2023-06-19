import menu from "./data.js"

const container = document.querySelector("#menu")
const btn = document.querySelector("#add")
const fieldInput = document.querySelector("#fieldInput")

const render = () => {
    container.innerHTML = ""
    menu.forEach(data => {
        const list = document.createElement("li")
        list.innerText = data
    
        container.appendChild(list)
    })
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    menu.push(fieldInput.value)
    render()
    fieldInput.value = ""
})

render()

