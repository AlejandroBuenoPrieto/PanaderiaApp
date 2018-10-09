$(document).ready(function(){
    var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    var total = 0;
    var registeredUser = localStorage.getItem("registeredUser");
    var deliveryNotes = JSON.parse(localStorage.getItem("deliveryNotes"));
    cartProducts.forEach(function (product,index) {
    total = total + parseFloat(product.price) * parseFloat(product.quantity);
    });
    var today= new Date();
    today = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes();

    var deliveryNote =
    {
        "user" : registeredUser,
        "products" : cartProducts,
        "total" : total,
        "date"  : today

    };
    deliveryNotes.push(deliveryNote);
    localStorage.setItem("deliveryNotes",JSON.stringify(deliveryNotes));


    cartProducts.forEach(function (product,index) {
        $('#ticketTable').append(
            ` 
              <tr>
                    <td>`+product.title+`</td>
                    <td>`+product.quantity+`</td>
                    <td>`+product.price.toFixed(2)+`</td>
                    <td>`+(parseFloat(product.price)* parseInt(product.quantity)).toFixed(2)+`</td>
                </tr>
           
            `
        );
    });
    $('#ticketTable').append(
        `<tr>
                    <td></td>
                    <td></td>
                    <th>TOTAL: </th>
                    <th>`+total.toFixed(2)+`€</th>
                </tr>`
    );

    var specialProducts = JSON.parse(localStorage.getItem("cartProducts"));
    specialProducts =  specialProducts.filter(function (product) {
        return product.category==="ProductosEspeciales";
    });
    if(specialProducts.length>0) {
        $('#ticketContainer').append(`
        <b>Fecha entrega productos especiales</b>
        <table class="table" id="specialTable">
        <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha</th>
                   
                </tr>
                </thead>
                </table>
        `);
        specialProducts.forEach(function (product, index) {
        $('#specialTable').append(`
        <tr>
                    <td>`+product.title+`</td>
                    <td>`+product.date+`</td>
                </tr>
        `);
        });
    }



    var products = JSON.parse(localStorage.getItem("products"));

    cartProducts.forEach(function (cartProduct,index) {
        if(cartProduct.category!=="ProductosEspeciales"){
        product=products.filter(function (product) {
           return product.title===cartProduct.title;
        });
        product=product.pop();
        product["stock"] = parseInt(product.stock);
        product["stock"]=product.stock - parseInt(cartProduct.quantity);
        product["stock"]=product.stock.toString();
        products=products.filter(function (product) {
           return product.title !== cartProduct.title;
        });
        products.push(product);
    }});

    localStorage.setItem("products",JSON.stringify(products));
    cartProducts= [];
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
    localStorage.setItem("cartCounter",0);
});

$('#btn-homepage').click(function (event){
    window.location.href="categories.html";
    });