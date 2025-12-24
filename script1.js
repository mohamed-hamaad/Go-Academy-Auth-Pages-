//       Dark Mode       //
const darkButton=document.querySelector(".dark-mode");
darkButton.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        darkButton.textContent="Light Mode";
    }else{
        darkButton.textContent="Dark Mode";
    }
})

//       Ham Menu       //
const hamMenu=document.querySelector(".ham-menu");
const navLinks=document.querySelector(".nav-links");
const AuthButtons=document.querySelector(".auth-buttons");
const navWords=document.querySelector("nav-a");
hamMenu.addEventListener("click",()=>{
    navLinks.classList.toggle("show");
    AuthButtons.classList.toggle("show");
    navWords.classList.toggle("show");
})