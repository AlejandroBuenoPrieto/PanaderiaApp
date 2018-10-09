$(document).ready(function () {
    var products = JSON.parse(localStorage.getItem("products"));
    var stock=0;
    var ingresos=0;
    var totalIngresos=0;
    products.forEach(function (product,index) {
            stock = product.stock;
            stock = 100 - stock;
            ingresos = stock * parseFloat(product.price);
            totalIngresos = totalIngresos + ingresos;
            if (ingresos > 0) {
                $('#ticketTable').append(
                    `
            <tr>
                    <td>` + product.title + `</td>
                    <td>` + stock + `</td>
                    <td>` + ingresos.toFixed(2) + `</td>
                </tr>
            `
                );
            }
            else {
                $('#ticketTable').append(
                    `
            <tr class="bg-danger text-light">
                    <td>` + product.title + `</td>
                    <td>` + stock + `</td>
                    <td>` + ingresos.toFixed(2) + `</td>
                </tr>
            `
                );
            };
        }
    );

    $('#ticketTable').append(
        `
            <tr>
                    <td></td>
                    <th>TOTAL:</th>
                    <td>`+totalIngresos+`</td>
                </tr>
            `
    );
});
$(document).on("click", ".btn-back", function () {
    window.history.back();
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});



