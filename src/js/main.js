console.log(`Loaded main.js`);


// header part

let overflowDarken = document.querySelector('.overflow-block');
let leftSideMenu = document.querySelector('#mySidenav');

let openLeftSidebarMenu = document.querySelector('.openLeftSideMenu');
let closeLeftSidebarMenu = document.querySelector('.closeLeftSidebar');


openLeftSidebarMenu.addEventListener('click', ()=>{
    leftSideMenu.style.left = "0px";
    leftSideMenu.style.opacity = "1";
    overflowDarken.style.opacity = "1";
});

closeLeftSidebarMenu.addEventListener('click', ()=>{
    leftSideMenu.style.left = "-100%";
    leftSideMenu.style.opacity = "0";
    overflowDarken.style.opacity = "0";

});


const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})


let mainMenuItem = document.querySelectorAll('.main-menu-item');

mainMenuItem.forEach((it)=>{
    it.addEventListener('mouseover', (e)=>{
        console.log(e.currentTarget)
        e.currentTarget.classList.add('hover');
    });
    it.addEventListener('mouseleave', (e)=>{
        console.log(e.currentTarget)
        e.currentTarget.classList.remove('hover');
    });
});



let mobileItem = document.querySelectorAll('.mobile-main-menu');

mobileItem.forEach((it)=>{
    it.addEventListener('click', (e)=>{
        console.log(e.currentTarget)
        e.currentTarget.classList.toggle('open');
    });
    // it.addEventListener('mouseleave', (e)=>{
    //     console.log(e.currentTarget)
    //     e.currentTarget.classList.remove('open');
    // });
})