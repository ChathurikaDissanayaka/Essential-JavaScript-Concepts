import { menuArray } from './data.js'

const menu = document.getElementById('menu')
const containerEl = document.getElementById('container')

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
                <button id="add-btn" class="add-btn">+</button>
            </div>
        </section>`
    });
}

renderMenuItems()

// const addBtn = document.getElementById('add-btn')

// addBtn.addEventListener('click', function(){
//     containerEl.innerHTML += `<div class="bill"></div>`
// })

// render this when add item buttons clicked
// `<div class="bill">
//                 <h2 class="title">Your order</h2>
//                 <div class="order-items">
//                     <div class="order-item">
//                         <h2>Pizza</h2>
//                         <button class="remove">remove</button>
//                         <p>$14</p>
//                     </div>
//                     <div class="order-item">
//                         <h2>Beer</h2>
//                         <button class="remove">remove</button>
//                         <p>$14</p>
//                     </div>
//                 </div>
            
//                 <div class="total-price">
//                     <h2>Total price:</h2>
//                     <p>$26</p>
//                 </div>

//                 <div class="complte-order"></div>
//                 <button class="complete-order-btn">Complete order</button>
//             </div>`

// modal when order complete clicked

// Render this when pay button clicked
// `<div class="msg">
//      <p>Thanks, James! Your order is on its way!</p>
//  </div>`