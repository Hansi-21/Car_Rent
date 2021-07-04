const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
};

$("#loginbtn").click(function () {

    let data = $("#logindata").serializeArray();
    $.ajax({
        url: `http://localhost:8080/Backend/login/admin/${data[0].value}/${data[1].value}`,
        method:"GET",
        success:function (data) {
            dashboardload(data);
        },
    })

});

function customerLoad() {
    let data = $("#logindata").serializeArray();
    $.ajax({
        url: `http://localhost:8080/Backend/login/${data[0].value}/${data[1].value}`,
        method: "GET",
        success: function (data) {
            pageload(data);
        },
    });
}


function pageload(result) {



    if (result.data == "CUSTOMERDETAILRIGHT") {
        sessionStorage.setItem("result", "success");
        window.location.replace("../index.html");
    }

    if (result.data == "CUSTOMERDETAILWRONG") {
        $("#erromsg").text("incorrect password");
        $("#erromsg").css("display", "block");
    }

    if (result.data == "CUSTOMERNOTFOUND") {
        $("#erromsg").text("user not found");
        $("#erromsg").css("display", "block");
    }
}

function dashboardload(result) {
    if (result.data == "ADMINDETAILRIGHT") {
    /*    sessionStorage.setItem("result", "success");*/
        window.location.replace("../pages/admin/admin.html");
    }

    if (result.data == "ADMINDETAILWRONG") {
        $("#erromsg").text("incorrect password");
        $("#erromsg").css("display", "block");
    }

    if (result.data == "ADMINNOTFOUND") {
        customerLoad();

    }
}



/*file upload*/

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function (n, i) {
        indexed_array[n["name"]] = n["value"];
    });
    return indexed_array;
}

function signupmethod(){
    if($("#password").val() == $("#confirmpassword").val()){
        $("#error").css("display", "none");
        let nicObject = $("#nic_files")[0].files[0];
        let nic_fileName = $("#nic_files")[0].files[0].name;
        let licenseObject = $("#license_files")[0].files[0];
        let license_fileName = $("#license_files")[0].files[0].name;
        let data = new FormData();
        data.append("nic", nicObject, nic_fileName);
        data.append("dnum", licenseObject, license_fileName);
        $.ajax({
            url: "http://localhost:8080/Backend/customer",
            method: "post",
            async: true,
            processData: false,
            contentType: false,
            data: data,
            success: function () {
                $.ajax({
                    url: "http://localhost:8080/Backend/customer",
                    method: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(getFormData($("#signupdata"))),
                    success: function () {
                        sessionStorage.setItem("result", "success");
                        window.location.replace("");

                    },

                });


            },
        });
    }else {

        $("#error").text("incorrect password");
        $("#error").css("display", "block");
    }
}


$("#signup").click(function () {

    if($("#signupemail").val().length==0){

        $("#error").css("display", "block");
        $("#error").text("please fill email");

    }else if($("#nic").val().length==0){

        $("#error").css("display", "block");
        $("#error").text("please fill nic");

    }else if($("#nic_files").val().length==0){

        $("#error").css("display", "block");
        $("#error").text("please upload nic ");

    }else if($("#license").val().length==0){

        $("#error").css("display", "block");
        $("#error").text("please fill license number");

    }else if($("#license_files").val().length==0){

        $("#error").css("display", "block");
        $("#error").text("please upload license number ");

    }else if($("#address").val().length==0){

        $("#error").css("display", "block");
        $("#error").text("please fill Address");

    }else if($("#contact").val().length==0){
        $("#error").css("display", "block");
        $("#error").text("please fill contact Details");

    }else{
        $.ajax({
            url: `http://localhost:8080/Backend/login/${$("#signupemail").val()}`,
            method: "GET",
            success: function (data) {
                if (data.data == false) {
                    $("#error").css("display", "none");
                    ////////////////////////////////////////////////
                    if ($("#password").val() === $("#confirmpassword").val()) {
                        $("#error").css("display", "none");
                        console.log("ok");
                        signupmethod();
                    } else {
                        $("#error").text("password doesn't match");
                        $("#error").css("display", "block");
                    }
                    ////////////////////////////////////////////////
                } else {
                    $("#error").css("display", "block");
                    $("#error").text("email already exist");
                }
            },
        });
    }
});



