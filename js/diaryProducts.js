function addDiaryBottons(){
    var registeredUser = localStorage.getItem('registeredUser');
    var users = JSON.parse(localStorage.getItem("users"));
    var user = users.filter(function(user){
        return user.username === registeredUser;
    });
    user = user.pop();
    var add="";
    var diaryProducts = user.diaryProducts;
    if(user.cardNumber===""){
        add=`   
        <div class="text-center">
            <p>Para realizar un pedido diario necesitas tener una tarjeta de crédito guardada.</p><button id="addCard" class="btn btn-success" role="button"
            onclick="window.location.href='pay.html'"><i class="far fa-credit-card"></i> Añadir Tarjeta</button>
        </div>
     `;
    }
    else{
    if(diaryProducts.length>0){
        add=`<button id="btn-addProduct" type="submit" class="btn btn-primary btn-lg float-right" role="button"
                            onclick="window.location.href='productsD.html'"><i class="fas fa-plus-circle"></i> Añadir otro producto</button>`
            }
    else add=`   
       <div class="text-center">
     <p>No tienes productos en tu pedido diario</p><button id="addDiaryProduct" class="btn btn-primary" role="button"
     onclick="window.location.href='productsD.html'"><i class="fas fa-plus-circle"></i> Añadir Producto</button>
     </div>
     `;}
    $('#addDiaryProducts').empty();
    $('#addDiaryProducts').append(
        add
    );
}
function loadDiaryProducts(){
    var total=0;
    $('#productsContainer').empty();
    var registeredUser = localStorage.getItem('registeredUser');
    var users = JSON.parse(localStorage.getItem("users"));
    var user = users.filter(function(user){
        return user.username === registeredUser;
    });
    user = user.pop();
    var diaryProducts = user.diaryProducts;
    diaryProducts.forEach(function (product, index) {
        total= total + (parseFloat(product.price)* parseFloat(product.quantity));
        var buttonMinus
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
    if(diaryProducts.length>0) {
        $('#productsContainer').append(`
    <h4 class="float-right mr-3">Total: &nbsp&nbsp&nbsp` + total.toFixed(2) + ` €</h4>
    `)
    }
}
$(document).ready(function () {
    $(".cartProductNumber").text(localStorage.getItem("cartCounter"));
    addDiaryBottons();
    loadDiaryProducts();
});
$(document).on("click", ".btn-deleteProduct", function (e) {
    e.preventDefault();
    var users = JSON.parse(localStorage.getItem("users"));
    var clientSelected = JSON.parse(localStorage.getItem("clientSelected"));
    clientSelected = clientSelected.pop();
    var user= users.filter(function (user) {
        return user.username===clientSelected.username;
    });
    user= user.pop();
    users= users.filter(function (users) {
        return users.username!==user.username;
    })
    var products = user.diaryProducts;

    var productTitle = $(this).parent().parent().parent().find(".productTitle").text();
    var product = products.filter(function(product){
        return productTitle === product.title;
    });
    product = product.pop();
    products = products.filter(function(product){
        return productTitle !== product.title;
    });
    user.diaryProducts=products;
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    loadDiaryProducts();
    addDiaryBottons();
});
$(document).on("click", ".quantity-right-plus", function (e) {
    e.preventDefault();
    var productTitle = $(this).parent().parent().parent().parent().parent().find(".productTitle").text();
    var users = JSON.parse(localStorage.getItem("users"));
    var clientSelected = JSON.parse(localStorage.getItem("clientSelected"));
    clientSelected = clientSelected.pop();
    var user= users.filter(function (user) {
        return user.username===clientSelected.username;
    });
    user= user.pop();
    users= users.filter(function (users) {
        return users.username!==user.username;
    })
    var products = user.diaryProducts;
    var exists = false;
    products.forEach(function(product,index){
        if (product.title === productTitle) {
            exists = true;
        }
    });
    var product = products.filter(function (product) {
        return product.title === productTitle;
    });
    products = products.filter(function () {
        return products.name !== productTitle;
    });
    product=product.pop();
    if(exists===true){

        products.forEach(function(product,index){
            if (product.title === productTitle) {
                $(this).show();
                product["quantity"] = parseInt(product.quantity);
                if(product.quantity>=1){
                    product["quantity"]=product.quantity+1;
                    product["quantity"]=product.quantity.toString();
                }
            }
        });

    }else {
        product["quantity"] = "1";
        products.push(product);
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    loadDiaryProducts();

});
$(document).on("click", ".quantity-left-minus", function (e) {
    e.preventDefault();


    var productTitle = $(this).parent().parent().parent().parent().parent().find(".productTitle").text();
    var users = JSON.parse(localStorage.getItem("users"));
    var clientSelected = JSON.parse(localStorage.getItem("clientSelected"));
    clientSelected = clientSelected.pop();
    var user= users.filter(function (user) {
        return user.username===clientSelected.username;
    });
    user= user.pop();
    users= users.filter(function (users) {
        return users.username!==user.username;
    })
    var products = user.diaryProducts;
    var exists = false;
    products.forEach(function(product,index){
        if (product.title === productTitle) {
            exists = true;
        }
    });
    var product = products.filter(function (product) {
        return product.title === productTitle;
    });
    products = products.filter(function () {
        return products.name !== productTitle;
    });
    product=product.pop();
    if(exists===true){

        products.forEach(function(product,index){
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
        products.push(product);
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    loadDiaryProducts();
});

$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});

$(document).on("click", ".btn-back", function () {
    window.history.back();
});
