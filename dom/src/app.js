import menu from "./data.js"

const container = document.querySelector("#menu")

const render = () => {
    container.innerHTML = ""
    menu.forEach((data, i) => {
        const list = document.createElement("li")
        const deleteBtn = document.createElement("button")

        deleteBtn.innerText = "Hapus"
        
        list.innerText = data

        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault()
            menu.splice(i)
            render()
        })

        list.appendChild(deleteBtn)    
        container.appendChild(list)
    })
}

const app = () => {
    const btn = document.querySelector("#add")
    const fieldInput = document.querySelector("#fieldInput")

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        menu.push(fieldInput.value)
        render()
        fieldInput.value = ""
    })

    render()
}

export default app