$(document).ready(function () {
    $(".statistics__343333--val").text(
        localStorage.getItem("Sum:/Zekrs/343333.html") || "0"
    );
    $(".statistics__daily--val").text(
        localStorage.getItem("Sum:/Zekrs/daily.html") || "0"
    );
    $(".statistics__mono--val").text(
        localStorage.getItem("Sum:/Zekrs/mono.html") || "0"
    );
    $(".statistics__doroud--val").text(
        localStorage.getItem("Sum:/Zekrs/doroud.html") || "0"
    );
    $(".statistics__fatah--val").text(
        localStorage.getItem("Sum:/Zekrs/fatah.html") || "0"
    );
    $(".statistics__kraft--val").text(
        localStorage.getItem("Sum:/Zekrs/kraft.html") || "0"
    );
});
