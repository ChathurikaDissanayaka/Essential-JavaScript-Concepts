import { menuArray } from './data.js'

let billItems = []

let totalPrice = 0

let pizzaCount = 0
let hamBurgerCount = 0
let beerCount = 0

const menu = document.getElementById('menu')
const bill = document.getElementById('bill')

document.addEventListener('click', function(e) {
    if(e.target.dataset.item){
       handleLikeClick(e.target.dataset.item) 
    }

    else if(e.target.dataset.bill){
        handleRemoveItem(e.target.dataset.bill)
    }
})

function handleRemoveItem(itemId){
    menuArray.forEach(function(menuItem){
        if(menuItem.id == itemId && totalPrice != 0) {
            totalPrice -= menuItem.price
            billItems.pop(generateBillItem(menuItem))
        }
    })
    generateBill()
}

function handleLikeClick(itemId) { 
    menuArray.forEach(function(menuItem){
        if(menuItem.id == itemId) {
            totalPrice += menuItem.price
            billItems.push(generateBillItem(menuItem))
        }
    })
    generateBill()
}

function generateBill(){
    if(billItems.length != 0){
        bill.innerHTML = `<h2 class="title">Your order</h2>
                    <div class="order-items">
                        ${billItems.join('')}
                    </div>
                
                    <div class="total-price">
                        <h2>Total price:</h2>
                        <p>$${totalPrice}</p>
                    </div>

                    <div class="complte-order"></div>
                    <button class="complete-order-btn">Complete order</button>`

        console.log("bill generated")
    } else {
        bill.innerHTML = ''
    }
}

function generateBillItem(menuItem){
    return `<div class="order-item">
                <div class="order-item-left">
                    <h2>${menuItem.name}</h2>
                    <button data-bill="${menuItem.id}" class="remove">remove</button>
                </div>
                <p>$${menuItem.price}</p>
            </div>`
}

// -----------------------------------------------------------------------

// modal when order complete clicked

// Render this when pay button clicked
// `<div class="msg">
//      <p>Thanks, James! Your order is on its way!</p>
//  </div>`


// -----------------------------------------------------------------------
// Render menu items
function renderMenuItems(){
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