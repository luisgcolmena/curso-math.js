const btn = document.querySelector("#calcular")
const inputPrice = document.querySelector("#price")
const inputDiscount = document.querySelector("#discount")
const result = document.querySelector("#new-price")

btn.addEventListener('click', calcularDescuento)

console.log({inputDiscount})

function calcularDescuento () {
    const price = inputPrice.value
    const discount = inputDiscount.value

    if (!price || !discount) {
        result.innerText = 'Precio o descuento inválido.'
    } else if (discount > 100) {
        result.innerText = 'Descuentos mayores a 100 son inválidos.'
    } else {    
        const newPrice = price * (1 - (discount/100)) 
        console.log(newPrice)
        result.innerText = 'El precio con descuento es: ' + newPrice
    }

}
