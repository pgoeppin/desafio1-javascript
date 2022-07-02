/* definimos variables */
let button = document.querySelector("button");
let total_buy = document.getElementById("total");
let quantity = document.getElementById("quantity");
let colorcircle = document.getElementById("color-circle");
/* agregamos el evento */
button.addEventListener("click", total);
/* definimos funcion */
function total() {
    total_buy.innerHTML = document.getElementById("amount").value * document.getElementById("price").value;
    quantity.innerHTML = document.getElementById("amount").value;
    colorcircle.style.backgroundColor = document.getElementById("color").value;
}