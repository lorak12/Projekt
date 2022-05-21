document.addEventListener("DOMContentLoaded", () => {
    const btnSubmit = document.querySelector("#submit");
    const txtName = document.querySelector("#poleDoImienia");
    const rng = document.querySelector("#suwak");
    const txtArea = document.querySelector("#obszar");
    const spanZnaki = document.querySelector("#znaki");

    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        if (txtName.value == "") alert("Podaj imię");
    });
    rng.addEventListener("change", () => {
        console.log(rng.value);
    });
    txtArea.addEventListener("input", () => {
        let tresc = txtArea.value;
        spanZnaki.innerText = tresc.length + "/140";
    });
});
