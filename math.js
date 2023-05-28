const btn = document.querySelector("#calcular")
const inputPrice = document.querySelector("#price")
const inputCoupon = document.querySelector("#discount-coupon")
const result = document.querySelector("#new-price")

btn.addEventListener('click', calcularCuponDescuentoArray)

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

function calcularCuponDescuentoArray () {
    const price = inputPrice.value
    const coupon = inputCoupon.value

    const couponList = [{
        name: "SOMBRI15", 
        number: 15, 
        isValid: false
        },
        {
            name: "SOMBRI30", 
            number: 30, 
            isValid: true
        },
        {
            name: "SOMBRI50", 
            number: 50, 
            isValid: true
        },
        {
            name: "SOMBRI75", 
            number: 75, 
            isValid: true
        },
        {
            name: "SOMBRI90", 
            number: 90, 
            isValid: true
        }
    ]

    const validCoupon = couponList.find(
        function isDiscountValid (element) {
            if (element.name == coupon) {
                return true
            }
        }
    )


    if (!price || !coupon) {
        result.innerText = 'Precio o descuento inválido.'
    } else if (validCoupon) {
        console.log("Boop")
        const discount = validCoupon.number
        const newPrice = price * (1 - (discount/100))
        result.innerText = 'El precio con descuento es: ' + newPrice
    } else {    
        result.innerText = 'Cupón de descuento inválido.'
    }

}
