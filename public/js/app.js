$(document).ready(function() {
    $()


    $("#sign-up").submit(function(e) {
        e.preventDefault();
        var register = {};
        register.username = $("#signup-username").val();
        register.password = $("#signup-password").val();
        console.log(register);
        $.ajax({
            type: "POST",
            url : "/users/signup",
            data: JSON.stringify(register),
            dataType: "json",
            contentType: "application/json", 
            success: function(data, textStatus, jqXHR)
                {
                    //data - response from server
                    console.log(data);
                    window.location.href='/main.html';
                },
            error: function (jqXHR, textStatus, errorThrown)
                {
                   $("#failure").append("<p>Account already in use, or invalid password.</p>");
                }
        });

        //Ranked input tracker
        $("#ranked-form").submit(function(e) {
            e.preventDefault();
            var ranked = {};
            ranked.ranking = $("#ranked-input").val();
            ranked.elo = $("#ranked-elo").val();
            ranked.role = $("#ranked-role").val();
            console.log(ranked);
            $.ajax({
                type: "POST",
                url: "/users/ranking",
                data: JSON.stringify(ranked),
                dataType: "json",
                contentType: "application/json",
                success: function(data, textStatus, jqXHR)
                {
                    //Add client side Success indicator
                    $("#ranked-success").append("<p>Success!</p>");
                  
                },
            error: function(jqXHR, textStatus, errorThrown)
                {
                    $("#ranked-failure").append("<p>Data could not be entered. Try again!</p>");
                }
            })
        });

        //Champion input tracker
        $("#champion-form").submit(function(e) {
            e.preventDefault();
            var champion = {};
            champion.ranking = $("#champion-lane").val();
            champion.elo = $("#champion-wins").val();
            champion.role = $("#champion-loss").val();
            champion.progress = $("#champion-build").val();
            champion.elo = $("#champion-kills").val();
            champion.role = $("#champion-deaths").val();
            champion.progress = $("#champion-damage").val();
            console.log(champion)
            $.ajax({
                type: "POST",
                url: "/users/champion",
                data: JSON.stringify(champion),
                dataType: "json",
                contentType: "application/json",
                success: function(data, textStatus, jqXHR)
                {
                    //data - response from server
                    //Add client side Success indicator
                    let message = "Successfully posted champion data";
                   
                },
            error: function(jqXHR, textStatus, errorThrown)
                {
                    //Add client side success indicator
                    console.log("failed!");
                }
            })
        });

    });
});
