$(document).ready(function () {
    window.location.pathname;
    let val = localStorage.getItem(window.location.pathname);
    if (val) {
        $("h3").text(val);
    }
    $(".zekr__add").click(function () {
        let num = parseInt($("h3").text()) + 1;
        if (num != 10) {
            $("h3").text(num);
            localStorage.setItem(window.location.pathname, num);
        } else {
            $("h3").text(10);
            $(".zekr__add").prop("disabled", true);
            localStorage.setItem(window.location.pathname, 0);
        }
    });
    $(".reset").click(function () {
        localStorage.setItem(window.location.pathname, 0);
        $("h3").text(0);
        $(".zekr__add").prop("disabled", false);
    });
});
