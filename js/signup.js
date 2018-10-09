$('#btn-Signup').click(function (event){
    event.preventDefault();
    nameInput = $("#name").val();
    userInput = $("#username").val();
    passwordInput = $("#password").val();
    emailInput = $("#email").val();
    addressInput = $("#address").val();
    phoneInput = $("#phone").val();

    var users = JSON.parse(localStorage.getItem("users"));
    var diaryProducts = [];
    var user = {
        "name":nameInput, 
        "username":userInput, 
        "password":passwordInput,
        "email":emailInput,
        "address":addressInput,
        "phone":phoneInput,
        "role":"client",
        "cardNumber":"",
        "diaryProducts":diaryProducts
    };

    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    
    $("#alertSuccess").text("Te has registrado correctamente");
    $("#alertSuccess").attr("hidden",false);
    $("#loading").attr("hidden",false);
    $("#registerContainer").attr("hidden",true);
    
    var count = 1;
    var countdown = setInterval(function(){
        if (count === 0) {
            clearInterval(countdown);
            window.location.href = "addCard.html";
        }
        count--;
    }, 1000);
    
    
});

function selectAction(user){
    var loginForm = $('#loginForm');
    if(user["role"]=="admin"){
        //TODO: Añadir vista administrador
        window.location.href="";
    }
    else if(user["role"]=="client"){
        window.location.href="categories.html";
    }
    else{
        $("#alertFail").text("Error: tus permisos son incorrectos");
        $("#alertFail").attr("hidden",false);
    }
};