import { menuArray } from './data.js'

let billItemObjects = menuArray

let totalPrice = 0

let pizzaCount = 0
let burgerCount = 0
let beerCount = 0

const menu = document.getElementById('menu')
const bill = document.getElementById('bill')
const modal = document.getElementById('modal')
const paymentDataForm = document.getElementById('payment-data')

document.addEventListener('click', function(e) {
    if(e.target.dataset.item) {
       handleLikeClick(e.target.dataset.item) 
    } else if(e.target.dataset.bill) {
        handleRemoveItem(e.target.dataset.bill)
    } else if(e.target.id == 'complete-order') {
        handleCompleteOrder()
    }
})

paymentDataForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const paymentFormData = new FormData(paymentDataForm)
    const name = paymentFormData.get('name')

    modal.style.display = 'none'
    bill.innerHTML = `<div class="msg">
            <p>Thanks, ${name}! Your order is on its way!</p>
        </div>`
})

function handleLikeClick(itemId) { 
    menuArray.forEach(function(menuItem){
        if(menuItem.id == itemId) {
            totalPrice += menuItem.price
            billItemObjects[itemId].count = addItem(itemId)
        }
    })
    generateBill()
}

function handleRemoveItem(itemId) {
    menuArray.forEach(function(menuItem){
        if(menuItem.id == itemId && totalPrice != 0) {
            totalPrice -= menuItem.price
            billItemObjects[itemId].count = removeItem(itemId)
        }
    })
    generateBill()
}

function handleCompleteOrder() {
    modal.style.display = 'block'
}

function generateBill() {
    let billItems = '' 

    billItemObjects.map(function(currentObject){
        if(currentObject.count > 0){
            billItems += generateBillItem(currentObject)
        }
    })

    if(billItems != ''){
        bill.innerHTML = `<h2 class="title">Your order</h2>
                    <div class="order-items">
                        ${billItems}
                    </div>
                
                    <div class="total-price">
                        <h2>Total price:</h2>
                        <p>$${totalPrice}</p>
                    </div>

                    <div class="complte-order"></div>
                    <button id = "complete-order" class = "complete-order-btn">Complete order</button>`
        } else {
            bill.innerHTML = ''
        }
}

function generateBillItem(menuItem) {
    return `<div class="order-item">
                <div class="order-item-left">
                    <h2>${menuItem.name}</h2>
                    <button data-bill="${menuItem.id}" class="remove">remove</button>
                </div>
                <p>${menuItem.count} X $${menuItem.price}</p>
            </div>`
}

function addItem(itemId){
    if(itemId == 0){
        return ++pizzaCount
    } else if(itemId == 1) {
        return ++burgerCount
    } else {
        return ++beerCount
    }
}

function removeItem(itemId){
    if(itemId == 0){
        return --pizzaCount
    } else if(itemId == 1) {
        return --burgerCount
    } else {
        return --beerCount
    }
}

// Render menu items
function renderMenuItems() {
    menuArray.forEach(item => {
        menu.innerHTML += `<section class="item">
            <img class="item-img" src=${item.url} alt="pizza">
            <div class="item-details">
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h3>$${item.price}</h3>
            </div>
            <div class="btn">
                <button data-item="${item.id}" class="add-btn">+</button>
            </div>
        </section>`
    });
}

renderMenuItems()