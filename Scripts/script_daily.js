$(document).ready(function () {
    const dayTexts = [
        "Ya Zal Jalale Val Ekram",
        "Ya Ghazi Al Hojat",
        "Ya Arhamar Rahemin",
        "Ya Haye Ghayum",
        "Malek Ol Hag Ol Mobin",
        "Doroud",
        "Ya Rab Al Alamin",
    ];

    const currentDay = new Date().getDay();

    // Change the text of the h1 tag based on the current day
    $(".title").text(dayTexts[currentDay]);
});
