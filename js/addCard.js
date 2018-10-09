$('#btn-SaveCard').click(function (event){
    event.preventDefault();
    CardNumberInput = $("#CardNumber").val();

    var users = JSON.parse(localStorage.getItem("users"));

    var user = users[users.length-1];
    user["cardNumber"]=CardNumberInput;
    users.pop();
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
            window.location.href = "login.html";
        }
        count--;
    }, 1000);


});

