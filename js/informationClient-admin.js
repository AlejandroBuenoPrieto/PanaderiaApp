var users = JSON.parse(localStorage.getItem("users"));
$(document).ready(function (){
    var clientSelected = JSON.parse(localStorage.getItem('clientSelected'));
    var user = clientSelected;
    var diaryProducts = user.diaryProducts;
    var diaryProductsUser = "";
    console.log(diaryProducts);
    if(diaryProducts===""){
        diaryProductsUser += "No hay productos en el pedido diario"
    }
    else{
    diaryProducts.forEach(function (diaryProduct, index){
            diaryProductsUser += diaryProduct["title"] + " " + diaryProduct["quantity"] + " unidad/es <br>";
    })
    };

        $('#clientsContainer').append(`
       <label class="mr-2">Nombre:</label>
       <label><b>`+user.name+`</b></label>
       <br>
              <br>
       <label class="mr-2">Nombre de usuario:</label>
       <label><b>`+user.username+`</b></label>
       <br>
              <br>
       <label class="mr-2">Email:</label>
       <label><b>`+user.email+`</b></label>
       <br>
              <br>
       <label class="mr-2">Dirección:</label>
       <label><b>`+user.address+`</b></label>
       <br>
              <br>
       <label class="mr-2">Pedido diario del usuario:</label>
       <br> 
       <label><b>`+diaryProductsUser+`</b></label>
       <br>
       <br>
       <button class="btn btn-primary float-left" onclick="window.location.href='diaryProductsEdit.html'"">Modificar pedido diario</button>
        `);
});

$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null)
    window.location.href="login.html";
});


$(document).on("click",".btn-back",function () {
    window.history.back();
});