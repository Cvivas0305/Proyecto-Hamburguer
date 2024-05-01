const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')


const filterAll = document.querySelector('.filter-all')
function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price}</p>
                </li>
            `
    })

    list.innerHTML = myLi
}


function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
                <li>
                    <p>0 Valor total dos items e Rs ${totalValue}</p>
                </li>
        `
    console.log(totalValue)
}


function filterAllItems(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)


























/*const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formtCurrency(valeu) {
    const newValue = valeu.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL' 
    })

        return newValue 
}
function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
                    <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                        <p class="item-price">R$ ${formtCurrency}(product.price)</p>
                    </li> 
                `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = ` 
            <li>
                <p>O Valor total dos items e R$ ${totalValue}</p>
            </li>  
        `
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}
buttonShowAll.addEventListener('clik', () => showAll(menuOptions))
buttonMapAll.addEventListener('clik', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('clik', filterAllItems)*/