const bgimageEl = document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{
    updateimage()
})

function updateimage(){
     bgimageEl.style.opacity = 1 - window.pageYOffset / 800
     bgimageEl.style.backgroundSize = 160 - window.pageYOffset  / 12 + "%"
}