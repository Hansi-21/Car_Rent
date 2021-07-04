$.ajax({
    type: "get",
    url: "http://localhost:8080/Backend/customer",
    success: function (response) {
        response.data.forEach((element) => {
            console.log(element);
            $("#table-body").append(
                `<tr><td>${element.email}</td>
        <td>${element.address}</td><td>${element.nic}</td><td>${element.dnum}</td>
        <td>${element.contact}</td><td>${element.password}</td></tr>`
            );
        });
    },
});

$("#home").click(function () {
    window.location.replace("../../pages/admin/admin.html");
});
