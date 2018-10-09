var users = JSON.parse(localStorage.getItem("users"));
$(document).ready(function() {
    var i = 0;
    var hora = "6:00";
    users.forEach(function(client,index){
        if(client.role==="client" && client.diaryProducts!==""){
            i++;
            hora = sumarHora(hora);
            $('#deliveryNotesContainer').append(`
            <button class="text-left btn btn-outline-primary btn-client w-100 my-3 py-0">
            <div class="clientName py-3 pl-3 h6"><i class="fas fa-box"></i> Pedido `+i+` - `+hora+` `+client.name+`</div>
      </button>`);
        }
    });

    function sumarHora(hora) {
        var horas = hora.substr(0,1);
        var minutos = hora.substr(2);
        if(minutos=="00"){
            return horas+":15";
        }
        else if (minutos=="15"){
            return horas+":30";
        }
        else if (minutos=="30"){
            return horas+":45";
        }
        else if (minutos=="45"){
            if(horas=="6"){
                return "7:00";
            }
            else if(horas=="7"){
                return "8:00";
            }
            else if(horas=="8"){
                return "9:00";
            }
            else if(horas=="9"){
                return "10:00";
            }
            else if(horas=="10"){
                return "10:00";
            }
        }
    }

});

$(document).on("click",".btn-client",function () {
    var string = $(this).text();
    var nameclient = string.substr(30).trim();
    var client = users.filter(function(user){
        return user.name === nameclient;
    });
    var clientSelected = client.pop();
    console.log(clientSelected);
    localStorage.setItem("clientSelected", JSON.stringify(clientSelected));
    window.location.href="informationDiaryProduct.html";
});

$(document).on("click",".btn-back",function () {
    window.history.back();
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});