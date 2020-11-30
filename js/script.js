$(document).ready (
    function () {

        var confirmButton = $("#confirm_btn");

        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        var list = ["Pane", "Birra", "Vino", "Salsa"];

        for (var i = 0; i < list.length; i++) {
            var context = {
                'text': list[i],
            }
            var html = template(context);
            $("#to-do").append(html);
        }

        $(document).on( "click", ".delete",
            function () {
                $(this).parent().remove();
            }
        );

        confirmButton.click(
            function () {
                var userInput = $("#user-input").val();

                if (userInput == "") {
                    alert("Campo vuoto");
                } else {
                    var context = {
                        'text': userInput,
                    }
                    var html = template(context);
                    $("#to-do").append(html);
                }

            }
        );

        $("#user-input").keyup(function(event){
                if (event.which == 13 || event.keyCode == 13) {
                    confirmButton.trigger("click");
                }
            }
        );

    }
);
