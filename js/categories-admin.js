$(document).ready(function() {
    $(".cartProductNumber").text(localStorage.getItem("cartCounter"));
    var categories = JSON.parse(localStorage.getItem("categories"));

    categories.forEach(function(category,index){
        $('#categoriesContainer').append(`<button class="text-left btn btn-outline-primary btn-category w-100 my-3 py-0">
            <div class="categoryTitle py-3 h6"><i class="fa fa-w fa-arrow-right mr-2"></i>`+category.title+`</div>
      </button>`)
    });


});

$(document).on("click",".btn-category",function () {
    var categorySeleted = $(this).find(".categoryTitle").text();
    localStorage.setItem("categorySelected", categorySeleted);
    window.location.href="products-admin.html";
});

$(document).on("click",".btn-back",function () {
        window.history.back();
});
$(document).on("click","#btn-logOut",function () {
    localStorage.setItem("registeredUser",null);
    window.location.href="login.html";
});