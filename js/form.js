$(function() {
    $('#form_button').click(function(e) {
        if ($('form')[0].checkValidity()) {
            e.preventDefault();
            $.ajax({
                    url: "https://formspree.io/marta.bzl@gmail.com",
                    method: "POST",
                    data: {
                        userName: $('#userName').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val()
                    },
                    dataType: "json"
                })
                .done(function() {
                    $('form').html('<h1>Thank you!</h1>')
                })
        }   else .fail(function() {
            $('form').html('<h1>Error</h1>')
        });
    });
});
