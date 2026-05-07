$(document).ready(function () {

    $("#fetchBtn").click(function () {

        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {

                const user = data.results[0];

                $("#userImage").attr("src", user.picture.large);
                $("#userName").text(user.name.first + " " + user.name.last);
                $("#userEmail").text(user.email);
                $("#userLocation").text(
                    user.location.city + ", " + user.location.country
                );

                $("#userCard").removeClass("hidden");
            }
        });

    });

});