
const count = document.getElementById("count")
const add = document.getElementById("add")
const remove = document.getElementById("remove")
const boxes = document.getElementById("boxes")

let num = 0
count.innerHTML = num

const addBox = () => {
    const boxDiv = document.createElement("div")
    boxDiv.id = "box"
    const star = document.createTextNode("★")
    boxDiv.appendChild(star)
    boxes.appendChild(boxDiv)
}

const removeBox = () => {
    let lastBox = document.querySelector("#boxes :last-of-type")
    boxes.removeChild(lastBox)
}

add.onclick = () => {
    num += 1
    count.innerHTML = num
    addBox()
}

remove.onclick = () => {
    if (num > 0) {
        num -= 1
        count.innerHTML = num
        removeBox()
    }
}