const menu_responsive = document.querySelector('.header-navbar__menu-responsive');
const menu_bar = document.querySelector('.menu-bar');

menu_bar.addEventListener('click',()=>{
    menu_responsive.classList.toggle('header-navbar__menu-responsive--show');

    const menu_responsive_items = menu_responsive.querySelectorAll('li');
    console.log(menu_responsive_items);
    menu_responsive_items.forEach((item,idx)=>{
        if(menu_responsive.classList.contains('header-navbar__menu-responsive--show')){
            idx++;
            console.log(idx);
            item.style.transition = `0.4s ease 0.${idx * 2}s`;
        }else{
            item.removeAttribute('style');
        }
    })
});