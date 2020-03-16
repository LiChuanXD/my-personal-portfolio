document.addEventListener("DOMContentLoaded" , function(){
    const menuBtn = document.querySelector("#menu-btn");
    const navBar = document.querySelector("#nav-bar");
    const portrait = document.querySelector("#portrait");
    const menu = document.querySelector("#menu-nav");

    let showState = false;

    menuBtn.addEventListener("click" , function(){
        if(!showState){
            menuBtn.classList.add("spin");
            navBar.classList.add("show");
            portrait.classList.add("slideIn");
            menu.classList.add("slideIn");

            showState = true;
        }else{
            menuBtn.classList.remove("spin");
            navBar.classList.remove("show");
            portrait.classList.remove("slideIn");
            menu.classList.remove("slideIn");

            showState = false;
        }
    })
});