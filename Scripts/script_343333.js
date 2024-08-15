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
                    if (
                        localStorage.getItem("Sum:" + window.location.pathname)
                    ) {
                        localStorage.setItem(
                            "Sum:" + window.location.pathname,
                            parseInt(
                                localStorage.getItem(
                                    "Sum:" + window.location.pathname
                                )
                            ) + 1
                        );
                    } else {
                        localStorage.setItem(
                            "Sum:" + window.location.pathname,

                            1
                        );
                    }
                    // if (
                    //     Number.isInteger(
                    //         localStorage.getItem(
                    //             "Sum:" + window.location.pathname
                    //         )
                    //     )
                    // ) {
                    //     localStorage.setItem(
                    //         "Sum:" + window.location.pathname,
                    //         parseInt(
                    //             localStorage.getItem(
                    //                 "Sum:" + window.location.pathname
                    //             )
                    //         ) + 1
                    //     );
                    // } else {
                    //     localStorage.setItem(
                    //         "Sum:" + window.location.pathname,
                    //         0
                    //     );
                    // }
                }
            } else {
                $("h3.active").next().addClass("active").text(1);
                $("h3.active").first().removeClass("active");
            }
        }
    });
});
