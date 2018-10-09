var categorySelected = localStorage.getItem("categorySelected");



function loadProducts(){
    var products = JSON.parse(localStorage.getItem("products"));
    $('#productsContainer').empty();
     products.forEach(function(product,index){
            if(product.category === categorySelected){
            $('#productsContainer').append(`<div class="card my-3">
            <div class="card-body">
            <h5 class="card-title"><span class="productTitle">`+product.title+`</span><span class="float-right">`+product.price.toFixed(2)+` €</span></h5>
        <img src="img/products/`+product.image+`" class="img-fluid mt-3 mb-3">
            <div class="text-center">

            <button class="btn btn-primary rounded-0 col-4 float-left btn-modify" data-toggle="modal" data-target="#edit-box"><i class="far fa-edit"></i></button>
            <button class="btn btn-danger rounded-0 col-4 float-right btn-delete" data-toggle="modal" data-target="#delete-box"><i class="far fa-trash-alt"></i></button>
        </div>
        </div>
        </div>`)
        }});
}

$(document).ready(function() {
   loadProducts();
});

$('#btn-Addproduct').click(function (event){
    event.preventDefault();
    productNameInput = $("#product-name").val();
    productPriceInput = $("#product-price").val();
    productDescriptionInput = $("#product-description").val();
    productStockInput = $("#product-stock").val();
    productDateInput = $("#product-date").val();
    productWeightInput = $("#product-weight").val();
    productIngredientsInput = $("#product-ingredients").val();

    var products = JSON.parse(localStorage.getItem("products"));

    var product = {
        "title":productNameInput, 
        "category":categorySelected, 
        "price":productPriceInput,
        "description":productDescriptionInput,
        "image":"default-img.jpg",
        "ingredients":productIngredientsInput,
        "date":productDateInput,
        "stock":productStockInput,
        "weight":productWeightInput


    };
    
    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));
    
    $('.alert').text("Has añadido el producto correctamente");
    $("#alertSuccess").attr("hidden",false);
    $("#productAddForm")[0].reset();
    loadProducts();
    $("#addProduct-box").modal('hide');
    
    
});

var productToEdit;
var productToDelete;
$(document).on("click",".btn-modify",function () {
    var productTitle = $(this).parent().parent().find(".productTitle").text();
    productToEdit = productTitle;
    var products = JSON.parse(localStorage.getItem("products"));

    products.forEach(function(product,index){
                 if(product.title === productTitle){

                    $("#edit-product-name").val(product.title);
                    $("#edit-product-price").val(product.price);
                    $("#edit-product-description").val(product.description);
                    $("#edit-product-stock").val(product.stock);
                    $("#edit-product-weight").val(product.weight);
                    $("#edit-product-date").val(product.date);
                    $("#edit-product-ingredients").val(product.ingredients);

                 }
    })
});

$('#btn-editProduct').click(function (event){
    event.preventDefault();
    productNameInput = $("#edit-product-name").val();
    productPriceInput = $("#edit-product-price").val();
    productDescriptionInput = $("#edit-product-description").val();
    productStockInput = $("#edit-product-stock").val();
    productDateInput = $("#edit-product-date").val();
    productWeightInput = $("#edit-product-weight").val();
    productIngredientsInput = $("#edit-product-ingredients").val();

    var products = JSON.parse(localStorage.getItem("products"));
    productOriginal = products.filter(function (product){
             return product.title === productToEdit;                  
    });
    productOriginal=productOriginal.pop();
    
    var newProduct = {
        "title":productNameInput, 
        "category":categorySelected, 
        "price":productPriceInput,
        "description":productDescriptionInput,
        "stock":productStockInput,
        "date":productDateInput,
        "weight":productWeightInput,
        "ingredients":productIngredientsInput,
        "image":productOriginal.image
    };
    
    
    products = products.filter(function (product){
             return product.title !== productToEdit;                  
    });
    
    products.push(newProduct);
    localStorage.setItem("products",JSON.stringify(products));
    
    $("#alertSuccess").text("Has modificado el producto correctamente");
    $("#alertSuccess").attr("hidden",false);
    $("#productEditForm")[0].reset();
    loadProducts();
    $("#edit-box").modal('hide');
    
});
$(document).on("click",".btn-delete",function () {
    productToDelete = $(this).parent().parent().find(".productTitle").text();

});

$('#btn-deleteProduct').click(function (event){
    event.preventDefault();
    var products = JSON.parse(localStorage.getItem("products"));

    products = products.filter(function(product){
        return productToDelete !== product.title;
    });

    localStorage.setItem("products",JSON.stringify(products));

    loadProducts();

    $("#alertSuccess").text("Has borrado el producto correctamente");
    $("#alertSuccess").attr("hidden",false);
    $("#delete-box").modal('hide');
});

$(document).on("click",".btn-back",function () {
    window.history.back();
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});