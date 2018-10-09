var users = JSON.parse(localStorage.getItem("users"));
$(document).ready(function() {
    users.forEach(function(client,index){
        if(client.role==="client"){
            $('#clientsContainer').append(`<button class="text-left btn btn-outline-primary btn-client w-100 my-3 py-0">
            <div class="clientName py-3 pl-3 h6"><i class="fa fa-w fa-user mr-2"></i>`+client.name+`</div>
      </button>`);
        }
    });


});

$(document).on("click",".btn-client",function () {
    var client = $(this).find(".clientName").text();
    console.log(client);
    client = users.filter(function(user){
        return user.name === client;
    });
    var clientSelected = client.pop();
    localStorage.setItem("clientSelected", JSON.stringify(clientSelected));
    window.location.href="informationClient-admin.html";
});

$(document).on("click",".btn-back",function () {
        window.history.back();
});
$(document).on("click",".btn-addClients",function () {
    window.location.href="addClients.html";
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});