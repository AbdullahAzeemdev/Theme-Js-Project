const themeToggle = document.getElementById("theme-toggle");
const saveTheme = localStorage.getItem("theme")

if(saveTheme === "light"){
    document.body.classList.add("light-mode")
    themeToggle.classList.replace("fa-moon", "fa-sun")
};

if(themeToggle){
    themeToggle.addEventListener("click",function(){
        document.body.classList.toggle("light-mode");
        const isLight = document.body.classList.contains("light-mode")
        
        themeToggle.classList.toggle("fa-moon", !isLight)
        themeToggle.classList.toggle("fa-sun",isLight)

        if(isLight){
            localStorage.setItem("theme","light")
        }else{
            localStorage.setItem("theme","dark")
        }
    });
}

// Assignment completed


// Ai 


const particleContainer = document.getElementById("particles");

if (particleContainer) {
    function createParticle() {
        const span = document.createElement("span");
        const size = Math.random() * 5 + "px";

        span.style.position = "absolute";
        span.style.width = size;
        span.style.height = size;
        span.style.background = "rgba(89,178,244,0.6)";
        span.style.borderRadius = "50%";
        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.top = window.innerHeight + "px";
        span.style.animation = "floatUp 6s linear infinite";

        particleContainer.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 6000);
    }
    setInterval(createParticle, 200);
}