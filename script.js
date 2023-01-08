// Nav Bar toggle

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        toggle.querySelector("a").innerHTML = "☰";
    } else {
        menu.classList.add("active");

        toggle.querySelector("a").innerHTML = "X";
    }
}

toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");

function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideIndex - 1].style.display = "block";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        dots[slideIndex - 1].className += "active";
    }
}

// Joke List

var jokeList = [
    "Which is faster, hot or cold? Hot, because you can catch cold",
    "How does an octopus go into battle? Well-armed",
    "How do celebrities stay cool? They have many fans",
    "Why do bees have sticky hair? Because they use a honeycomb",
    "What did one wall say to the other? I'll meet you at the corner",
    "What's a ninja's favorite type of shoes? Sneakers",
    "What do you call a bear without any teeth? A gummy bear",
];
var jokeBtn = document.getElementById("jokeBtn");
var joke = document.getElementById("joke");
var count = 0;
function displayJoke() {
    joke.innerHTML = jokeList[count];
    count++;
    if (count == jokeList.length) {
        count = 0;
    }
}
if (jokeBtn) {
    jokeBtn.addEventListener("click", displayJoke);
}