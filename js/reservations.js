$(document).ready(function() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    $('#date').bootstrapMaterialDatePicker({ format : 'DD/MM/YYYY - HH:mm',lang:'es',cancelText:'Cancelar',weekStart:'1',minDate:tomorrow});
    $(".cartProductNumber").text(localStorage.getItem("cartCounter"));
    var specialProducts = JSON.parse(localStorage.getItem("specialProducts"));

    specialProducts.forEach(function(product,index){
        $('#productsContainer').append(`<div class="card my-3">
        <div class="card-body">
        <h5 class="card-title"><span class = "productTitle">`+product.title+`</span><span class="float-right">`+product.price.toFixed(2)+` €</span></h5>
    <img src="img/products/`+product.image+`" class="img-fluid mt-3 mb-3">
        <div class="text-center">
        <button class="btn btn-primary rounded-0 col-4 float-left btn-description" data-toggle="modal" data-target="#description-box"><i class="fas fa-info-circle"></i></button>
    <button class="btn btn-primary rounded-0 col-4 float-right btn-selectDate" data-toggle="modal" data-target="#date-box"><i class="fas fa-cart-plus fa-fw"></i></button>
    </div>
    </div>
    </div>`)
    });
});
$(document).on("click",".btn-description",function () {
    var products = JSON.parse(localStorage.getItem("specialProducts"));
    var productTitle = $(this).parent().parent().find(".productTitle").text();
    products.forEach(function(product,index) {
        if (product.title === productTitle) {
            console.log(product.description);
            $('#productDescription').empty();
            $('#productDescription').append(`<p>`+product.description+`</p>
                <p><b>Ingredientes : </b>`+product.ingredients+`</p>
            <p><b>Peso : </b>`+product.weight+`</p>
            <p><b>Fecha preferente de consumo : </b>`+product.date+`</p>`);
        }
    });
});

$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});


$(document).on("click",".btn-back",function () {
    window.history.back();
});


$(document).on("click",".btn-selectDate",function () {
    localStorage.setItem("specialProductSelected",$(this).parent().parent().find(".productTitle").text());
});


$(document).on("click","#btn-addToCart",function () {
    var cartNumber = parseInt(localStorage.getItem("cartCounter"));
    cartNumber = cartNumber + 1;
    cartNumber = cartNumber.toString();
    localStorage.setItem("cartCounter", cartNumber);
    $(".cartProductNumber").text(cartNumber);
    var products = JSON.parse(localStorage.getItem("specialProducts"));
    var productTitle = localStorage.getItem("specialProductSelected");
    var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    var exists = false;
    cartProducts.forEach(function(product,index){
        if (product.title === productTitle) {
            exists = true;
        }
    });
    var product = products.filter(function (product) {
        return product.title === productTitle;
    });

    product=product.pop();
    product["date"]= $('#date').val();
    if(exists===true){

        cartProducts.forEach(function(product,index){
            if (product.title === productTitle) {
                product["quantity"] = parseInt(product.quantity);
                product["quantity"]=product.quantity+1;
                product["quantity"]=product.quantity.toString();

            }
        });

    }else {
        product["quantity"] = "1";
        cartProducts.push(product);
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    $('#date-box').modal('hide');
    $('#alert-box').modal('show');
    var count = 1;
    var countdown = setInterval(function(){
        if (count === 0) {
            clearInterval(countdown);
            $('#alert-box').modal('hide');
        }
        count--;
    }, 400);
});