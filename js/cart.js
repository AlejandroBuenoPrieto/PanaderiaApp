
function loadCartProducts(){
    $('#productsContainer').empty();
    var total = 0;
    var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    cartProducts.forEach(function (product, index) {
        total= total + parseFloat(product.price)* parseInt(product.quantity);
        var buttonMinus;
        if(product.quantity>1){
            buttonMinus = `<button type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">`;
        }
        else{
            buttonMinus = `<button type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="" disabled>`;

        }
        $('#productsContainer').append(`<div class="card my-3">
            <div class="card-body">
                <h5 class="card-title"><span class="productTitle">`+product.title+`</span><span class="float-right">`+(parseFloat(product.price)*parseFloat(product.quantity)).toFixed(2)+` €</span></h5>
                <div class="text-center">
                    <div class="col-5 float-left px-0">
                        <div class="input-group">
                                    <span class="input-group-btn">`+buttonMinus+`
                                          <span class="fas fa-minus"></span>
                                        </button>
                                    </span>
                            <input type="text" name="quantity" class="form-control input-number text-center quantity" value=`+product.quantity+` min="1" max="100">
                            <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                           <span class="fas fa-plus"></span>
                                        </button>
                                    </span>
                        </div>
                    </div>
                    <button class="btn btn-danger rounded-0 col-4 float-right btn-deleteProduct"><i class="fa fa-trash-alt fa-fw"></i></button>
                </div>
            </div>
        </div>`)
    });
    if(cartProducts.length>0) {
        $('#productsContainer').append(`
    <h4 class="float-right mr-3">Total: &nbsp&nbsp&nbsp` + total.toFixed(2) + ` €</h4>
    `)
    }
}
 function bottons(){
    var bottons;
     var cartCounter = JSON.parse(localStorage.getItem("cartCounter"));
     cartCounter= parseInt(cartCounter);
     if(cartCounter>0){
         bottons=`<button id="btn-cancell" type="button" class="btn btn-danger btn-lg float-left" role="button"
                            onclick="window.location.href='categories.html'">Cancelar</button>
                    <button type="submit" class="btn btn-primary btn-lg float-right" id="btn-Submit"
                            role="button"  onclick="window.location.href='shippingType.html'">Proceder al pago</button>`
     }
     else bottons=`   
   <div class="text-center">
     <p>Tu carrito de la compra esta vacío</p><i class="fas fas fa-shopping-bag"></i>
     </i>
     </div>
     `;
    $('#PayAndCancel').empty();
    $('#PayAndCancel').append(
       bottons
    );
 }

$(document).ready(function () {
    $(".cartProductNumber").text(localStorage.getItem("cartCounter"));
    loadCartProducts();
    bottons();
});

$(document).on("click", ".btn-description", function () {
    var products = JSON.parse(localStorage.getItem("products"));
    var productTitle = $(this).parent().parent().find(".productTitle").text();
    products.forEach(function (product, index) {
        if (product.title === productTitle) {
            $('#productDescription').empty();
            $('#productDescription').append(`<p>` + product.description + `</p>
<p><b>Ingredientes :</b>` + product.ingredients + `</p>
<p><b>Peso :</b>` + product.weight + `</p>
<p><b>Fecha preferente de consumo :</b>` + product.date + `</p>
<p><b>Stock :</b>` + product.stock + `</p>`
            );

        }
    });
});

$(document).on("click", ".btn-deleteProduct", function (e) {
    e.preventDefault();
    var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    var productTitle = $(this).parent().parent().parent().find(".productTitle").text();
    var cartCounter = JSON.parse(localStorage.getItem("cartCounter"));
    var product = cartProducts.filter(function(product){
        return productTitle === product.title;
    });
    product = product.pop();
    cartProducts = cartProducts.filter(function(product){
       return productTitle !== product.title;
    });
    cartCounter = parseInt(cartCounter) - parseInt(product.quantity);
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
    localStorage.setItem("cartCounter",JSON.stringify(cartCounter));
    loadCartProducts();
    bottons();
});

$(document).on("click", ".btn-back", function () {
    window.history.back();
});

$(document).on("click", ".quantity-right-plus", function (e) {
    e.preventDefault();
    var cartNumber = parseInt(localStorage.getItem("cartCounter"));
    cartNumber = cartNumber + 1;
    cartNumber = cartNumber.toString();
    localStorage.setItem("cartCounter", cartNumber);
    $(".cartProductNumber").text(cartNumber);

    var products = JSON.parse(localStorage.getItem("products"));
    var productTitle = $(this).parent().parent().parent().parent().parent().find(".productTitle").text();
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
    loadCartProducts();

});

$(document).on("click", ".quantity-left-minus", function (e) {
    e.preventDefault();
    var cartNumber = parseInt(localStorage.getItem("cartCounter"));
    cartNumber = cartNumber - 1;
    cartNumber = cartNumber.toString();
    localStorage.setItem("cartCounter", cartNumber);
    $(".cartProductNumber").text(cartNumber);

    var products = JSON.parse(localStorage.getItem("products"));
    var productTitle = $(this).parent().parent().parent().parent().parent().find(".productTitle").text();
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
    if(exists===true){

        cartProducts.forEach(function(product,index){
            if (product.title === productTitle) {
                $(this).show();
                product["quantity"] = parseInt(product.quantity);
                if(product.quantity>1){
                    product["quantity"]=product.quantity-1;
                    product["quantity"]=product.quantity.toString();
                }
            }
        });

    }else {
        product["quantity"] = "1";
        cartProducts.push(product);
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    loadCartProducts();
});
