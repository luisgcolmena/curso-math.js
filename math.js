const btn = document.querySelector("#calcular")
const price = document.querySelector("#price")
const discount = document.querySelector("#discount")
const result = document.querySelector("#new-price")

btn.addEventListener('click', calcularDescuento)

function calcularDescuento () {
    const newPrice = price * (discount/100)
    const productPrice = document.createElement("p")
    productPrice.innerHTML = newPrice
}
