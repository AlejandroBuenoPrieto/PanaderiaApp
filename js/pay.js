

$('#btn-pay').click(function (event){
    event.preventDefault();

    CardNumberInput = $("#CardNumber").val();

    var registeredUser = localStorage.getItem('registeredUser');
    var users = JSON.parse(localStorage.getItem("users"));

    var user = users.filter(function(user){
        return user.username === registeredUser;
    });

    var users = users.filter(function(user){
        return user.username !== registeredUser;
    });

    user = user.pop();
    user["cardNumber"]=CardNumberInput;
    users.push(user);

    localStorage.setItem("users",JSON.stringify(users));

    $("#alertSuccess").text("Has registrado la tarjeta correctamente");
    $("#alertSuccess").attr("hidden",false);
    $("#loading").attr("hidden",false);
    $("#cardContainer").attr("hidden",true);


    var count = 1;
    var countdown = setInterval(function(){
        if (count === 0) {
            clearInterval(countdown);
            window.location.href = "diaryProducts.html";
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
