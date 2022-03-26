document.addEventListener("DOMContentLoaded", ()=> {
    document.addEventListener("scroll", ()=>{
        let bar = document.querySelector("div");
        let wysokosc = document.querySelector("main").offsetHeight;
        let scrollSize = window.scrollY;
        let windowHeight = window.innerHeight;
        let procent = (scrollSize/(wysokosc - windowHeight)*100);
        bar.style.width = procent + "%";
    });
});
