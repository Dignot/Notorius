(function(){
    const burgerItem=document.querySelector(`.burger_menu`);
    const menu=document.querySelector(`.header_menu`)
    const menuClose=document.querySelector(`.heder_nav_close`)
    burgerItem.addEventListener(`click`,()=>{
        menu.classList.add(`heder_nav_active`);
    })
    menuClose.addEventListener(`click`,()=>{
        menu.classList.remove(`heder_nav_active`);
    })
}())