const menu = [
    {
        id: 1,
        name: "Bakso"
    },
    {
        id: 2,
        name: "Mie Ayam"
    },
    {
        id: 3,
        name: "Es Teh"
    },
    {
        id: 4,
        name: "Es Jeruk"
    }
]

const container = document.querySelector("#menu")

menu.forEach(data => {
    const list = document.createElement("li")
    list.innerText = data.name

    container.appendChild(list)
})

