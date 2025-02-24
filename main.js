async function fetchJson(url) {
    const res = await fetch(url)
    const obj = await res.json()
    return obj
}

async function getChefBirthday(id) {
    let recipes;
    try {
        recipes = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    } catch {
        throw new Error("Ricetta non Trovata")
    }
    try {
        chef = await fetchJson(`https://dummyjson.com/users/${recipes.userId}`)
    } catch {
        throw new Error("Chef non Trovato")
    }
    return chef.birthDate;
}



getChefBirthday(1)
    .then(birthDate => console.log(`La data di nascita dello chef è ${birthDate}`))
    .catch(error => console.error("Errore:", error.message))