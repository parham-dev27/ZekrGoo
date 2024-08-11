$(document).ready(function () {
    $(".zekr__add").click(function () {
        let num = parseInt($("h3.active").text()) + 1;
        if ($("h3.active:first-child").length) {
            if (num != 35) {
                $("h3.active").text(num);
            } else {
                $("h3.active").next().addClass("active").text(1);
                $("h3.active").first().removeClass("active");
            }
        } else {
            if (num != 34) {
                $("h3.active").text(num);
                if ($("h3.active").is(":last-child") && num == 33) {
                    $("h3.active").first().removeClass("active");
                    $(".zekr__add").prop("disabled", true);
                }
            } else {
                $("h3.active").next().addClass("active").text(1);
                $("h3.active").first().removeClass("active");
            }
        }
    });
});
