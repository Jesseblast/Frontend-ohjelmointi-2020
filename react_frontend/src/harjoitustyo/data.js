let items = []

export const AddItem = (name, title, text) => {
    const newId = items.length;
    items.push({key: newId, name: name, title: title, text: text})
}

export const GetItems = () => {
    return items;
}