// Query elements
const remove = $('#remove')
const add = $('#add')
const count = $('#count')
const boxes = $('.boxes')
const box = $('.box')

// Set variables
let num = 0

// Set count and onClick
count.text(num)

remove.on('click', () => {
    num--
    count.text(num)
    boxBuilder(num)
})

add.on('click', () => {
    num++
    count.text(num)
    boxBuilder(num)
})

// Set boxes
const boxBuilder = num => {
    for(let i = 0; i < num; i++) {
        const layout = $(`
            <div class="box">*</div>
        `)
        boxes.append(layout)
    }
}