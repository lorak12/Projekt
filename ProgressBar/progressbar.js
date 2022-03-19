document.addEventListener("scroll", ()=>{
    
    
    let bar = document.querySelector("div");
    let wysokosc = window.scrollY;
    bar.style.width = ((wysokosc / 10) + "%");
    console.log(bar.style.width);
});