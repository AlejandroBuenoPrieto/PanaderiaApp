$(document).ready(function () {
    var products = JSON.parse(localStorage.getItem("products"));
    products.forEach(function (product, index) {
        $('#productsContainer').append(`<div class="card my-3">
        <div class="card-body">
        <h5 class="card-title"><span class="productTitle">` + product.title + `</span><span class="float-right">` + product.price + ` €</span></h5>
    <img src="img/products/` + product.image + `" class="img-fluid mt-3 mb-3">
        <div class="text-center">
        <button class="btn btn-primary rounded-0 col-4 float-left btn-description"  data-toggle="modal" data-target="#description-box"><i class="fas fa-info-circle"></i></button>
    <button class="btn btn-primary rounded-0 col-4 float-right btn-addDiaryProduct"><i class="fas fa-plus-circle "></i></button>
    </div>
    </div>
    </div>`)
    });
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
$(document).on("click", ".btn-addDiaryProduct", function () {
    var users = JSON.parse(localStorage.getItem("users"));
    var clientSelected = JSON.parse(localStorage.getItem("clientSelected"));
    var productsC = JSON.parse(localStorage.getItem("products"));
    var user= users.filter(function (user) {
        return user.username===clientSelected.username;
    });
    user= user.pop();
    users= users.filter(function (users) {
        return users.username!==user.username;
    });
    var products = user.diaryProducts;

    var productTitle = $(this).parent().parent().find(".productTitle").text();
    var exists = false;
    products.forEach(function(product,index){
        if (product.title === productTitle) {
            exists = true;
        }
    });
    var product = productsC.filter(function (product) {
        return product.title === productTitle;
    });


    product=product.pop();

    if(exists===true){

        products.forEach(function(product,index){
            if (product.title === productTitle) {
                product["quantity"] = parseInt(product.quantity);
                product["quantity"]=product.quantity+1;
                product["quantity"]=product.quantity.toString();

            }
        });

    }else {
        product["quantity"] = "1";
        products.push(product);
    };
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));

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
$(document).on("click", ".btn-back", function () {
    window.history.back();
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});