let items_container = document.querySelector('.items-container');
let nav_bar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    nav_bar.classList.toggle('active');
    search_bar.classList.remove('active');
    if (header.style.backgroundColor != '#fff0de') {
        header.style.backgroundColor = '#fff0de';
    }
    else {
        header.style.backgroundColor = null;
    }
}
let header = document.querySelector('header');
window.addEventListener('scroll', () => header.classList.toggle('shadow', window.scrollY > 0))

window.onscroll = () => {
    nav_bar.classList.remove('active');
}

const home_logo = document.querySelector('#home_logo');
const about_img = document.querySelector('#about_img');
const home = document.querySelector('#home');
function setSrc() {
    home_logo.src = "./img/logo.png";
    about_img.src = "./img/about.jpg";
    home.style.cssText = `
    background: url(./img/home_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;`;
}
setSrc();

let title;
let trend;
let img_link;

function Fetch_Data() {
    fetch("http://localhost:3000/oil").then(
        (response) => {
            return response.text();
        }
    ).then((text) => {
        let imgArray = JSON.parse(text);
        imgArray.forEach(element => {
            title = element.title;
            trend = element.trend;
            img_link = element.image_link;
            Load_Data(title, trend, img_link);
        });
    })
}
Fetch_Data();

function Load_Data(title, trend, image_link) {
    try {
        let items_container_title = items_container.querySelectorAll('.title');
        items_container_title.forEach(element => {
            if (element.textContext = title) {
                return;
            }
        });
    } catch (e) {
        console.log(e);
    }

    let item_template =
        `<div class="box">
            <img src="${image_link}">
            <h3 class="title">${title}</h3>
            <div class="content">
                <p>${trend}</p>
            </div>
        </div>`
    let item = document.createElement('div');
    item.innerHTML = item_template;
    items_container.append(item);
}
