const images = document.querySelectorAll(".gallery-img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex"
lightboxImg.src = img.src

})

})

lightbox.addEventListener("click", () => {

lightbox.style.display = "none"

})


ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.938, 30.315],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12,
        });
    }

    



document.addEventListener("DOMContentLoaded", function(){

const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".open-booking").forEach(btn => {
btn.addEventListener("click", function(){
document.getElementById("bookingModal").style.display = "flex";
});
});

closeBtn.addEventListener("click", function(){
modal.style.display = "none";
});

window.addEventListener("click", function(event){
if(event.target === modal){
modal.style.display = "none";
}
});

});


// гугл таблица
document.querySelector(".booking-form").addEventListener("submit", function(e){

e.preventDefault();

const form = this;
const btn = form.querySelector(".booking-btn");

btn.textContent = "Отправка...";
btn.disabled = true;

const formData = new FormData();

formData.append("name", form.querySelector("input[type=text]").value);
formData.append("phone", form.querySelector("input[type=tel]").value);
formData.append("route", form.querySelector("select").value);
formData.append("people", form.querySelector("input[type=number]").value);

fetch("https://script.google.com/macros/s/AKfycbyBYN4lW3zsukR-gC2DL58VfdGTDwgO9bpvqfcMNc_SvPwJvbTeHjPop8pyUTODAZTwPQ/exec", {
method: "POST",
body: formData
})
.then(() => {

// красивое уведомление
showToast("Заявка успешно отправлена!");

// очистка формы
form.reset();

// закрытие окна
document.getElementById("bookingModal").style.display = "none";

// кнопка назад
btn.textContent = "Отправить заявку";
btn.disabled = false;

})
.catch(() => {
showToast("Ошибка отправки");
btn.textContent = "Отправить заявку";
btn.disabled = false;
});

});


function showToast(message){

const toast = document.getElementById("toast");

toast.textContent = message;
toast.classList.add("show");

setTimeout(() => {
toast.classList.remove("show");
}, 3000);

}

document.addEventListener("DOMContentLoaded", function(){

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const closeMenu = document.querySelector(".close-menu");

// открыть
burger.addEventListener("click", () => {
nav.classList.add("active");
overlay.classList.add("active");
});

});

document.addEventListener("DOMContentLoaded", function(){

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const closeMenu = document.querySelector(".close-menu");

// открыть
burger.addEventListener("click", () => {
nav.classList.add("active");
overlay.classList.add("active");
});

// закрыть крестиком
closeMenu.addEventListener("click", () => {
nav.classList.remove("active");
overlay.classList.remove("active");
});

// закрыть по фону
overlay.addEventListener("click", () => {
nav.classList.remove("active");
overlay.classList.remove("active");
});

// закрыть при клике на ссылку
document.querySelectorAll(".nav a").forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
overlay.classList.remove("active");
});
});

});

burger.addEventListener("click", () => {
nav.classList.toggle("active");
});

document.querySelector(".mobile-booking-btn").addEventListener("click", function(){
document.getElementById("bookingModal").style.display = "flex";
});


const routeSelect = document.querySelector(".booking-form select");
const peopleInput = document.querySelector(".booking-form input[type=number]");
const priceElement = document.getElementById("price");

// базовые цены
const prices = {
"Исторический центр": 1500,
"Петергоф": 1800,
"Уникальные реки": 1800,
"Ночные мосты": 2000
};

function calculatePrice(){

const route = routeSelect.value;
const people = parseInt(peopleInput.value);

let basePrice = prices[route];

// скидка для группы
if(people >= 3){
basePrice = basePrice * 0.8;
}

const total = basePrice * people;

priceElement.textContent = total;
}

// события
routeSelect.addEventListener("change", calculatePrice);
peopleInput.addEventListener("input", calculatePrice);

// запуск при загрузке
calculatePrice();

const btn = document.querySelector(".routes-more-btn");
const moreBlock = document.querySelector(".routes-more");

btn.addEventListener("click", function(){

moreBlock.classList.toggle("active");

if(moreBlock.classList.contains("active")){
btn.textContent = "Скрыть маршруты";
}else{
btn.textContent = "Смотреть все маршруты";
}

});

document.addEventListener("DOMContentLoaded", () => {

const lightbox = document.getElementById("lightbox");

if(!lightbox) return;

/* элементы */
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.querySelector(".close-lightbox");

const nextBtn = document.querySelector(".lightbox-next");

const prevBtn = document.querySelector(".lightbox-prev");

const allPhotosBtn = document.querySelector(".all-photos-btn");

const galleryImages = document.querySelectorAll(".gallery-image");

/* массив картинок */
let images = [];

galleryImages.forEach(img => {
images.push(img.src);
});

let currentIndex = 0;

/* открытие фото */
galleryImages.forEach((img, index) => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";

lightboxImage.src = img.src;

currentIndex = index;

});

});

/* кнопка все фото */
if(allPhotosBtn){

allPhotosBtn.addEventListener("click", () => {

lightbox.style.display = "flex";

lightboxImage.src = images[0];

currentIndex = 0;

});

}

/* закрытие */
closeBtn.addEventListener("click", () => {

lightbox.style.display = "none";

});

/* next */
nextBtn.addEventListener("click", () => {

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

lightboxImage.src = images[currentIndex];

});

/* prev */
prevBtn.addEventListener("click", () => {

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

lightboxImage.src = images[currentIndex];

});

/* закрытие по фону */
lightbox.addEventListener("click", (e) => {

if(e.target === lightbox){
lightbox.style.display = "none";
}

});

});

console.log("SCRIPT WORKS");