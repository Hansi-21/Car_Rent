$.ajax({
    type: "get",
    url: "http://localhost:8080/Backend/admin",
    success: function (response) {
        response.data.forEach((element) => {
            console.log(element);
            $("#table-body").append(
                `<tr><td>${element.adminemail}</td>
           <td>${element.address}</td>
        <td>${element.contact}</td><td>${element.password}</td></tr>`
            );
        });
    },
});

$("#home").click(function () {
    window.location.replace("../../pages/admin/admin.html");
});
