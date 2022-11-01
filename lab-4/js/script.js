list = [{
        id: 0,
        title: "Тактичний штурмовий рюкзак 35л темно-зелений (M06G)",
        price: 1916,
        sale: true,
        delivery: true,
        img: "1.webp"
    },
    {
        id: 1,
        title: "Фляга військова в чохлі, фляга для води 1 л, колір піксель",
        price: 270,
        sale: false,
        delivery: true,
        img: "2.webp"
    },
    {
        id: 2,
        title: "Костюм Зимовий ГОРКА ЗСУ",
        price: 4450,
        sale: false,
        delivery: true,
        img: "3.webp"
    },
    {
        id: 3,
        title: "Тактичні рукавички для військових з відкритими пальцями розмір XL",
        price: 349,
        sale: true,
        delivery: false,
        img: "4.webp"
    },
];

function startLocalStorage() {

    if (localStorage.getItem('products') == null) {
        localStorage.setItem('products', JSON.stringify({ "countBuscket": 0 }));
    } else {
        countBuscket();
    }
}
startLocalStorage();

function countBuscket() {
    var dict = JSON.parse(localStorage.getItem('products'));
    document.getElementById('buscket').innerHTML = Object.keys(dict).length - 1;

}