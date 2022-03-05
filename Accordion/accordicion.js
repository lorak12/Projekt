window.addEventListener("DOMContentLoaded", function(){
    let marki = document.querySelectorAll("li");

    for(let item of marki){
        item.addEventListener("click", function(){
            let markiKlasa = document.querySelector(".full");
            let akapitZtekstem = item.querySelector("p"); 
            let newHeight = akapitZtekstem.offsetHeight + 20 + 30;
            if(markiKlasa != null){
                if(item.classList.contains("full")){
                    item.classList.remove("full");
                    item.style.height = "30px";
                }
                else{
                    markiKlasa.classList.remove("full");
                    item.style.height = "30px";       
                    item.classList.add("full")
                    item.style.height = newHeight + "px";
                }
            }  
            else{
                item.classList.add("full");
                item.style.height = newHeight + "px";
            }
            
        });
    };
});
