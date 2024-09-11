import { menuArray } from './data.js'

const menu = document.getElementById('menu')

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
                <button class="add-btn">+</button>
            </div>
        </section>`
    });
}

renderMenuItems()