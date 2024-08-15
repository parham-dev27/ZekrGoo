$(document).ready(function () {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith("Sum:")) {
            $(
                ".statistics__" +
                    localStorage.key(i).split("/").at(-1).split(".")[0] +
                    "--val"
            ).text(localStorage.getItem(localStorage.key(i)));
        }
    }
});
