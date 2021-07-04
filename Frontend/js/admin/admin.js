$("#car-section").click(function () {
    window.location.replace("car.html");
    }
);

$("#customer-section").click(function () {
        window.location.replace("customer.html");
    }
);

$("#driver-section").click(function () {
        window.location.replace("driver.html");
    }
);

$("#admin-section").click(function () {
        window.location.replace("manageAdmin.html");
    }
);

$("#summary-section").click(function () {
        window.location.replace("summary.html");
    }
);

$("#schedule-section").click(function () {
        window.location.replace("schedule.html");
    }
);

$("#payment-section").click(function () {
        window.location.replace("payment.html");
    }
);

$("#income-section").click(function () {
        window.location.replace("income.html");
    }
);



$("#requestID").click(function (){
    $("#RequestModal").modal("show");
    }

);

$.ajax({
    type :"get",
    url :"http://localhost:8080/Backend/customer",
    success:function (response) {
        $("#CustomerCount").text(response.data.length);
    },
});

$.ajax({
    type:"get",
    url: "http://localhost:8080/Backend/admin",
    success:function (response) {
        $("#AdminCount").text(response.data.length);
    }
});

$.ajax({
    type:"get",
    url:"http://localhost:8080/Backend/driver",
    success:function (response) {
        $("#DriverCount").text(response.data.length);
    }
});


