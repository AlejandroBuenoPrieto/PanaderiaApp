$(document).on("click", ".btn-back", function () {
    window.history.back();
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null)
    window.location.href="login.html";
});
