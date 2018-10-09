var users = JSON.parse(localStorage.getItem("users"));
var valor = true;
$(document).ready(function (){
    var clientSelected = JSON.parse(localStorage.getItem('clientSelected'));
    var user = clientSelected;
    var diaryProducts = user.diaryProducts;
    var diaryProductsUser = "";
    var today=new Date();
    var tomorrowDate=new Date(today.getTime() + 24*60*60*1000);
    var tomorrow = tomorrowDate.toDateString();
    tomorrow=tomorrow.substr(0,24);
    var deliveryNoteNumber = Math.round(Math.random()*(999999-111111)+parseInt(111111));
    var totalPrice = 0;
    var iva=0;
    var firstPrice=0;

    if(diaryProducts===""){
        diaryProductsUser += "No hay productos en el pedido diario"
    }
    else{
        diaryProducts.forEach(function (diaryProduct, index){
            var price = diaryProduct.quantity * diaryProduct.price;
            totalPrice+=price;
            iva = totalPrice / 10;
            firstPrice = totalPrice - iva;
            diaryProductsUser += diaryProduct["title"] + " " + diaryProduct["quantity"] + " unidad/es" + " " +price+"€ <br>";
        })
    };

    $('#diaryProductContainer').append(`
       <label>Fecha de emisión:</label>
       <label><b>`+tomorrow+`</b></label>
       <br>
       <label>Número de albarán:</label>
       <label><b>`+deliveryNoteNumber+`</b></label>
       <br>
       <label class="mr-2">Nombre cliente:</label>
       <label><b>`+user.name+`</b></label>
       <br>
       <label class="mr-2">Dirección cliente:</label>
       <label><b>`+user.address+`</b></label>
       <br>
       <label class="mr-2">Número de tarjeta de pago:</label>
       <label><b>`+user.cardNumber+`</b></label>
       <br>
       <label class="mr-2">Pedido del cliente:</label>
       <br> 
       <label><b>`+diaryProductsUser+`</b></label>
       <br>
       <label class="mr-2">Precio sin impuestos:</label>
       <label><b>`+firstPrice.toFixed(2)+`€</b></label>
       <br>
       <label class="mr-2">IVA (10%):</label>
       <label><b>`+iva.toFixed(2)+`€</b></label>
       <br>
       <label class="mr-2">Precio total del pedido:</label>
       <label><b>`+totalPrice.toFixed(2)+`€</b></label>
       <br>
       <img src="img/signature.png" height="150" width="150" class="img-fluid">
       <br>
       <label class="mr-2">Firma del cliente</label>
       <br>
       <br>
       <button class="btn btn-primary float-left" id="btn-send"  onclick="send()">Enviar a la tienda <i class="fas fa-arrow-circle-right"></i></button>
        `);
});

function send() {
    window.location.href="deliveryNotes-admin.html";
    }

$(document).on("click",".btn-back",function () {
    window.history.back();
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null)
    window.location.href="login.html";
});
