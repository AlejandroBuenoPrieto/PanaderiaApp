$(document).on("click",".btn-back",function () {
    window.history.back();
});

$('#btn-cardOption').click(function (event){
    event.preventDefault();
    var registeredUser = localStorage.getItem('registeredUser');
    var users = JSON.parse(localStorage.getItem("users"));
    var user = users.filter(function(user){
        return user.username === registeredUser;
    });

    user = user.pop();

    if(user.cardNumber===""){
        window.location.href="cart-pay.html";
    }
    else{
        window.location.href="thanks.html";
    }
});