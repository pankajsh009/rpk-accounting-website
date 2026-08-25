const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0px)";
});

});

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.boxShadow =
"0 10px 25px rgba(0,0,0,.08)";
}
else{
header.style.boxShadow = "none";
}

});
