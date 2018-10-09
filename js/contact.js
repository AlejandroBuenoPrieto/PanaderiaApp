$('#btn-Submit').click(function (e){
    e.preventDefault();
    $("#alertSuccess").text("Pronto nos pondremos en contacto contigo.");
    $("#alertSuccess").attr("hidden",false);
    $("#loading").attr("hidden",false);
    $("#contactContainer").attr("hidden",true);
    var count = 1;
    var countdown = setInterval(function(){
        if (count === 0) {
            clearInterval(countdown);
            window.location.href = "categories.html";
        }
        count--;
    }, 1000);
    
});
