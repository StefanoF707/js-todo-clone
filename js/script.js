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
                } else if (checkIfElementAlreadyExist (list, userInput)) {
                    alert("Opzione già esistente");
                } else {
                    var context = {
                        'text': userInput,
                    }
                    var html = template(context);
                    $("#to-do").append(html);
                    list.push(userInput);
                }

            }
        );

        $("#user-input").keyup(
            function(event){
                if (event.which == 13 || event.keyCode == 13) {
                    confirmButton.trigger("click");
                }
            }
        );

    }
);

function checkIfElementAlreadyExist (array, element) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
    return false;
}
