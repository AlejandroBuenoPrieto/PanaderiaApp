$('#btn-SaveCard').click(function (event){
    event.preventDefault();
    CardNumberInput = $("#CardNumber").val();


    var users = JSON.parse(localStorage.getItem("users"));
    var clientSelected = JSON.parse(localStorage.getItem("clientSelected"));
    var user= users.filter(function (user) {
        return user.username===clientSelected.username;
    });
    user= user.pop();
    user["cardNumber"]=CardNumberInput;
    users= users.filter(function (users) {
       return users.username!== user.username;
    });
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));

    $("#alertSuccess").text("La tarjeta del usuario ha sido registrada correctamente");
    $("#alertSuccess").attr("hidden",false);
    $("#loading").attr("hidden",false);
    $("#cardContainer").attr("hidden",true);

    var count = 1;
    var countdown = setInterval(function(){
        if (count === 0) {
            clearInterval(countdown);
            window.location.href="clients-admin.html";
        }
        count--;
    }, 1000);


});