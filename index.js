const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        let itemString = ``

        itemString += item.completed ? `☑` : `☐` // Example: ☑
        itemString += ` ${item.text} ` // Example: The todo text
        itemString += item.favorite ? `★` : `` // Example: ★
        // ☐ The todo text ★

        console.log(itemString)
    }
}

showTodos(myTodos)

// -----------------------------------------------------------------------------

const searchTodosText = (data, searchText) => {
    let newTodos = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        const lowerCasedItemText = item.text.toLowerCase()
        const lowerCasedSearchText = searchText.toLowerCase()

        if (lowerCasedItemText.includes(lowerCasedSearchText)) {
            newTodos.push(item)
        }
    }

    return newTodos
}

const textInput = prompt('What todo do you want to search?')
const foundTodos = searchTodosText(myTodos, textInput)

showTodos(foundTodos)

// ------------------------------------------------------------------------------

const filterTodos = (data, ) => {
    let filteredtodos = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        if (item.completed == false) {
            filteredtodos.push(item)
        }
    }
    return filteredtodos
}

let todos = filterTodos(myTodos)

showTodos(todos)