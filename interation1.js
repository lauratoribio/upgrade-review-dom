window.onload = () => {

let body = document.querySelector("body")

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let newUl = document.createElement("ul")
countries1.forEach((item) => {
    let newLi = document.createElement("li")
    newLi.innerText = item
    newUl.appendChild(newLi)
})
body.appendChild(newUl)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let removeClase = document.querySelector(".fn-remove-me")
removeClase.remove()


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let otherUl = document.createElement("ul")
cars.forEach((item) => {
    let li = document.createElement("li")
    li.innerText = item
    li.setAttribute("data-function", "printHere")
    otherUl.appendChild(li)
})
body.appendChild(otherUl)

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach((country) => {
    let newDiv = document.createElement("div")
    let newH4 = document.createElement("h4")
    newH4.innerText = country.title
    let newImg = document.createElement("img")
    newImg.setAttribute("src", country.imgUrl)
    newDiv.appendChild(newH4)
    newDiv.appendChild(newImg)
    body.appendChild(newDiv)
    // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
    // elementos de las listas que elimine ese mismo elemento del html.
    let btnDelete = document.createElement("button")
    btnDelete.textContent = "Borrame!"
    newDiv.appendChild(btnDelete)
    btnDelete.addEventListener("click", () => {
      newDiv.remove()
    })
})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

let listadoDiv = document.querySelectorAll("div")

let btnEliminar = document.createElement("button")
btnEliminar.innerText = "Eliminar ult."
btnEliminar.addEventListener("click", () => {
    listadoDiv[listadoDiv.length - 1].remove()
})
body.appendChild(btnEliminar)


}
