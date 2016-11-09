(function() {

    var $formElement = $('#contact-form');

    function sendForm() {
        $.ajax({
            method: "post",
            url: $formElement.attr('action'),
            data: $formElement.serialize()
        })
        .done(function() {
            $formElement[0].reset();
            $formElement.children('textarea').attr('placeholder', 'Your message has been sent!');
        });
    }

    $(document).ready(function() {
        $('#form-submit').click(function(event) {
            event.preventDefault();
            sendForm();
        });
    });

})();
