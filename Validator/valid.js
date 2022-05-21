window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const login = document.querySelector("#login");
    const password = document.querySelector("#password");
    const ndpassword = document.querySelector("#ndpassword");
    const btnSumbit = document.querySelector("input[type=submit]");
    const divError = document.querySelector("#error");

    btnSumbit.addEventListener("click", (e) => {
        if (login.value === "") {
            e.preventDefault();
            var akapit = document.createElement("p");
            akapit.innerText = "Wpisz login";
            divError.appendChild(akapit);
        } else {
            form.submit();
        }
    });
});
