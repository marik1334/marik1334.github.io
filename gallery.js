document.addEventListener("DOMContentLoaded", () => {

const lightbox = document.getElementById("lightbox");

if(!lightbox) return;

const lightboxImage = document.getElementById("lightboxImage");

const galleryImages = document.querySelectorAll(".gallery-image");

const closeBtn = document.querySelector(".close-lightbox");

const nextBtn = document.querySelector(".lightbox-next");

const prevBtn = document.querySelector(".lightbox-prev");

const allPhotosBtn = document.querySelector(".all-photos-btn");

const thumbsContainer = document.getElementById("lightboxThumbs");

const currentSlide = document.getElementById("currentSlide");

const totalSlides = document.getElementById("totalSlides");

let images = [];

galleryImages.forEach(img => {
images.push(img.src);
});

let currentIndex = 0;

/* total */
totalSlides.textContent = images.length;

/* render */
function updateGallery(){

lightboxImage.style.opacity = 0;

setTimeout(() => {

lightboxImage.src = images[currentIndex];

lightboxImage.style.opacity = 1;

currentSlide.textContent = currentIndex + 1;

document.querySelectorAll(".thumb").forEach((thumb, index) => {

thumb.classList.toggle("active", index === currentIndex);

});

},150);

}

/* открыть */
galleryImages.forEach((img, index) => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";

currentIndex = index;

updateGallery();

});

});

/* кнопка */
allPhotosBtn.addEventListener("click", () => {

lightbox.style.display = "flex";

currentIndex = 0;

updateGallery();

});

/* закрыть */
closeBtn.addEventListener("click", () => {

lightbox.style.display = "none";

});

/* next */
nextBtn.addEventListener("click", () => {

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

updateGallery();

});

/* prev */
prevBtn.addEventListener("click", () => {

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

updateGallery();

});

/* thumbs */
images.forEach((src, index) => {

const thumb = document.createElement("img");

thumb.src = src;

thumb.classList.add("thumb");

thumb.addEventListener("click", () => {

currentIndex = index;

updateGallery();

});

thumbsContainer.appendChild(thumb);

});

/* zoom */
lightboxImage.addEventListener("click", () => {

lightboxImage.classList.toggle("zoomed");

});

/* swipe */
let startX = 0;

lightbox.addEventListener("touchstart", e => {
startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", e => {

let endX = e.changedTouches[0].clientX;

if(startX - endX > 50){

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

updateGallery();

}

if(endX - startX > 50){

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

updateGallery();

}

});

});