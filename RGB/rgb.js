window.addEventListener("DOMContentLoaded", () => {
    const red = document.querySelector("#red");
    const green = document.querySelector("#green");
    const blue = document.querySelector("#blue");
    const alpha = document.querySelector("#alpha");
    const div = document.querySelector(".output");

    red.addEventListener("input", () => {
        div.style.backgroundColor =
            "rgba(" +
            red.value +
            "," +
            green.value +
            "," +
            blue.value +
            "," +
            alpha.value +
            ")";
    });
    green.addEventListener("input", () => {
        div.style.backgroundColor =
            "rgba(" +
            red.value +
            "," +
            green.value +
            "," +
            blue.value +
            "," +
            alpha.value +
            ")";
    });
    blue.addEventListener("input", () => {
        div.style.backgroundColor =
            "rgba(" +
            red.value +
            "," +
            green.value +
            "," +
            blue.value +
            "," +
            alpha.value +
            ")";
    });
    alpha.addEventListener("input", () => {
        div.style.backgroundColor =
            "rgba(" +
            red.value +
            "," +
            green.value +
            "," +
            blue.value +
            "," +
            alpha.value +
            ")";
    });
});
