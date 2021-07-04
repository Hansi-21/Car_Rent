$.ajax({
    type: "get",
    url: "http://localhost:8080/Backend/driver",
    success: function (response) {
        response.data.forEach((element) => {
            console.log(element);
            $("#table-body").append(
                `<tr><td>${element.driveremail}</td>
        <td>${element.nic}</td><td>${element.license}</td><td>${element.address}</td>
        <td>${element.contact}</td><td>${element.password}</td></tr>`
            );
        });
    },
});


$("#home").click(function () {
    window.location.replace("../../pages/admin/admin.html");
});
