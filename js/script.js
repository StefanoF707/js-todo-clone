$(document).ready (
    function () {

        var confirmButton = $("#confirm_btn");

        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

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
