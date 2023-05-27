const btn = document.querySelector("#calcular")
const inputPrice = document.querySelector("#price")
const inputCoupon = document.querySelector("#discount-coupon")
const result = document.querySelector("#new-price")

btn.addEventListener('click', calcularCuponDescuento)

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

function calcularCuponDescuento () {
    const price = inputPrice.value
    const coupon = inputCoupon.value

    const couponList = {
        "SOMBRI30": 30, 
        "SOMBRI50": 50, 
        "SOMBRI75": 75
    }

    if (!price || !coupon) {
        result.innerText = 'Precio o descuento inválido.'
    } else if (couponList[coupon]) {
        console.log("Boop")
        const discount = couponList[coupon]
        const newPrice = price * (1 - (discount/100))
        result.innerText = 'El precio con descuento es: ' + newPrice
    } else {    
        result.innerText = 'Cupón de descuento inválido.'
    }

}
