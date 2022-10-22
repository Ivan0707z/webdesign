countBascket = 0

var listDefault = list;


function update(priceMin = 0, priceMax = Infinity, sort = "default", sale = false, delivery = false) {

    var cardsAdd = "";
    if (sort == "min") {
        list.sort((a, b) => a.price > b.price ? 1 : -1);
    } else if (sort == "max") {
        list.sort((a, b) => a.price < b.price ? 1 : -1);
    } else {
        list.sort((a, b) => a.id < b.id ? 1 : -1);
    }


    for (let i = 0; i < list.length; i++) {
        if (((list[i].sale && sale) || !sale) && ((list[i].delivery && delivery) || !delivery) && (list[i].price > priceMin && list[i].price < priceMax))
            cardsAdd += `
    <section class="card">
        <div class="sale">
            ` + (list[i].sale ? `<div class="sale-text">розпродаж</div>` : "") + `
        </div>
        <div class="img"><img src="./image/` + list[i].img + `" alt="` + list[i].title + `"></div>
        <div class="title">` + list[i].title + `</div>
        <div class="price">` + list[i].price + `<span>₴</span></div>
        <div class="btn" onclick="buscket(` + list[i].id + `)">
        ` + (list[i].delivery ? `<i  class="fa-solid fa-cart-shopping"></i>` : ``) +
            `</div> <div class = "delivery" > ` +
            (list[i].delivery ? `Готовий до відправки ` : `Товар в дорозі `) +
            ` <i class="fa-solid fa-truck"> </i></div>
            </section>
        `;

    }
    document.getElementById('cards').innerHTML = cardsAdd;
}
update();

function clicks() {
    inputMin = Number(document.getElementById('min').value);
    inputMax = Number(document.getElementById('max').value);
    inputMax = inputMax ? inputMax : Infinity;
    inputSort = document.getElementById('sort').value;
    inputSale = document.getElementById('sale').checked;
    inputDelivery = document.getElementById('delivery').checked;
    console.log(inputMin);
    console.log(inputMax);
    console.log(inputSort);
    console.log(inputSale);
    update(inputMin, inputMax, inputSort, inputSale, inputDelivery);
}

function buscket(id) {
    var dict = JSON.parse(localStorage.getItem('products'));
    if (dict[id] == null) dict[id] = 0;
    dict[id] = dict[id] + 1;
    localStorage.setItem('products', JSON.stringify(dict));
    countBuscket();
}
console.log(localStorage.getItem('products'));