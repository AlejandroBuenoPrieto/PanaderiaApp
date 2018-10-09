$('#btn-Login').click(function (event){
    event.preventDefault();
    userInput = $("#username").val();
    passwordInput = $("#password").val();
    var users = JSON.parse(localStorage.getItem("users"));

    var correct = false;
    users.forEach(function (user, index){
        if(userInput==user["username"]){
        if(passwordInput==user["password"]){
            //console.log("success");
            $("#alertFail").attr("hidden",true);
            $("#alertSuccess").text("Logueado correctamente");
            $("#alertSuccess").attr("hidden",false);
            localStorage.setItem("registeredUser",userInput);
            selectAction(user);
            correct=true;
            return;
        }
    }
});
    if(!correct){

        $("#alertSuccess").attr("hidden",true);
        $("#alertFail").text("Credenciales incorrectas");
        $("#alertFail").attr("hidden",false);
    }

});

$('#btn-Signup').click(function (event){
    event.preventDefault();
    window.location.href="signup.html";
});

function selectAction(user){
    var loginForm = $('#loginForm');
    if(user["role"]=="admin"){
        window.location.href="categories-admin.html";
    }
    else if(user["role"]=="client"){
        window.location.href="categories.html";
    }
    else{
        $("#alertFail").text("Error: tus permisos son incorrectos");
        $("#alertFail").attr("hidden",false);
    }
};