let string = "";
$(document).on('click', 'button', function () {
    var button_id = $(this).attr('id');
    var input = $("#calculator-input");
    var currentValue = input.val();

    if (button_id === "C") {
        input.val('');
    } else if (button_id === "=") {
        try {
            var result = eval(currentValue.replace(/X/g, '*'));
            input.val(result);
        } catch (error) {
            input.val("Error");
        }
    } else {
        input.val(currentValue + button_id);
    }
});
$(document).keydown(function (e) {
    var clicked = e.key;
    var input = $("#calculator-input");
    var currentValue = input.val();

    if (clicked === "C" || clicked === "c") {
        input.val('');
        e.preventDefault();
    }
    else if (clicked === "=" || clicked === "Enter") {
        try {
            var result = eval(currentValue.replace(/X/g, '*'));
            input.val(result);
        } catch (error) {
            input.val("Error");
        }
        e.preventDefault();
    }
    else if (clicked.match(/[0-9]/) || clicked === "." || clicked === "+" || clicked === "-" || clicked === "*" || clicked === "/") {
        input.val(currentValue + clicked);
        e.preventDefault();
    }
});

