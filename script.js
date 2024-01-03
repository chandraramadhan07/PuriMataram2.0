window.addEventListener("scroll", function(){   
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function(){   
    var nav = document.getElementById("home-nav");
    nav.classList.toggle("stick", window.scrollY > 830);
})