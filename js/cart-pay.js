

$('#btn-pay').click(function (event){
    event.preventDefault();

    $("#alertSuccess").text("El pago se ha producido correctamente");
    $("#alertSuccess").attr("hidden",false);
    $("#loading").attr("hidden",false);
    $("#cardContainer").attr("hidden",true);


    var count = 1;
    var countdown = setInterval(function(){
        if (count === 0) {
            clearInterval(countdown);
            window.location.href = "thanks.html";
        }
        count--;
    }, 1000);
    });

$('#btn-cancell').click(function (event){
    window.location.href="categories.html";
    });

$(document).on("click",".btn-back",function () {
    window.history.back();
});
