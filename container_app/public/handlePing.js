$(document).ready(function() {
    $("form#changeQuote").on("submit", function(e) {
        e.preventDefault();
        var data = $("input[name=host]").val();

        $.ajax({
            type: "post",
            url: "/ajax",
            data: data,
            dataType: "text"
        })
        .done(function(data) {
            $("h3").html(data.status);
        });
    });
});