var listLocal = JSON.parse(localStorage.getItem('products'));
console.log(listLocal);
emptyBascket();

function mainBascket() {
    var cardsAdd = "";
    var summOrder = 0;
    document.getElementById('cards').innerHTML = "";
    for (var l in listLocal) {
        if (l != "countBuscket") {
            cardsAdd += `
    <div class="card">
        <div class="img"><img src="./image/` + list[l]["img"] + `" alt=""></div>
        <div class="product">
            <div class="text-delete">
                <div class="product-text">
                ` + list[l]["title"] + `
                </div>
                <div class="product-delete" onclick="deleteProduct(` + l + `)"><i class="fa-solid fa-trash"></i></div>
            </div>
            <div class="count-price">
                <div class="product-count">
                    <input type="button"  onclick="minusCount(` + l + `)" value="-">
                    <span class="count" id="count` + l + `"> ` + listLocal[l] + ` </span>
                    <input type="button"   onclick="plusCount(` + l + `)" value="+">
                </div>
                <div class="product-price">` + (list[l]["price"] * listLocal[l]) + `<span>₴</span></div>
            </div>
        </div>
    </div>
    <hr>
            `;
            summOrder += list[l]["price"] * listLocal[l];

            // console.log(listLocal[l]);
        }
    }
    document.getElementById('cards').innerHTML = cardsAdd;
    document.getElementById('summOrder').innerHTML = summOrder;
}
mainBascket();

function minusCount(id) {
    if (listLocal[id] > 1) listLocal[id] -= 1;
    localStorage.setItem('products', JSON.stringify(listLocal));
    mainBascket();

}

function plusCount(id) {
    listLocal[id] += 1;
    localStorage.setItem('products', JSON.stringify(listLocal));
    mainBascket();
    // document.getElementById('count' + id).innerHTML = listLocal[id];

}

function deleteProduct(id) {
    delete listLocal[id];
    localStorage.setItem('products', JSON.stringify(listLocal));
    mainBascket();
    countBuscket();
    emptyBascket();
}

function deleteAll() {
    localStorage.removeItem("products");
    startLocalStorage();
    listLocal = {};
    mainBascket();
    countBuscket();
    emptyBascket();
}

function emptyBascket() {
    // console.log(listLocal["countBuscket"]);
    console.log(Object.keys(listLocal).length - 1);
    if ((Object.keys(listLocal).length - 1) > 0) {
        document.getElementById("isProducts").style.display = "flex";
        document.getElementById("noProducts").style.display = "none";
    } else {
        document.getElementById("isProducts").style.display = "none";
        document.getElementById("noProducts").style.display = "block";
    }

}

function orderFinish() {
    alert("Ви успішно оформили товар, дякуємо за покупку!");
    deleteAll();
}