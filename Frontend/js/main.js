$(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
        filter: data
    });
});

var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
        columnWidth: ".all"
    }
});

$(window).scroll(function() {
      if ($(window).scrollTop() > 100 ){

        $('.navbar').addClass('show');

    } else {

        $('.navbar').removeClass('show');

    };
});

function carmodalswitch(name) {
    switch (name) {
        case "Suzuki_Alto":
            $('#Suzuki_Alto_modal').modal('show');
            break;
        case "Suzuki_Alto_Auto":
            $('#Suzuki_Alto_K10').modal('show');
            break;
        case "Celerio":
            $('#Suzuki_Celerio').modal('show');
            break;
        case "Axio_Auto":
            $('#Perodua_Axio').modal('show');
            break;
        case "Aqua":
            $('#Aqua_Auto').modal('show');
            break;

            ////////////////////////////

        case "Corolla":
            $('#Toyota_Corolla').modal('show');
            break;
        case "Bezza":
            $('#Perodua_Bezza').modal('show');
            break;
        case "Allion":
            $('#Toyota_Allion').modal('show');
            break;
        case "Axio":
            $('#Toyota_Axio').modal('show');
            break;

            ////////////////////////////
        case "Premio":
            $('#Toyota_Premio').modal('show');
            break;
        case "Mercedes":
            $('#Mercedes_Car').modal('show');
            break;
        case "BMW":
            $('#BMW_i8').modal('show');
            break;

        default:
            break;
    }
}

$('.all').click(function () {
    carmodalswitch($(this).attr('id'))
})

$("#login_link").click(function () {
    if ($(this).text() == "Login") {
        window.location.replace("../page/login.html");
    }
    if ($(this).text() == "Logout") {
        $(this).text("Login");
        $("#login_link").removeClass("logout_button");

    }
});

if (sessionStorage.getItem("result") == "success") {
    $("#login_link").text("Logout");
    $("#login_link").addClass("logout_button");
}

function load() {
    window.location = "http://newsii.abudayah.com/photo/31";

}


$("#book_btn").click(function (){

    if($("#login_link").text()=="Login"){
        load();

    }

});

