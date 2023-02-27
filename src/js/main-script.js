console.log(`Loaded main.js`);

// header part
let body = document.getElementById('body');
let overflowDarken = document.querySelector('.overflow-block');
let leftSideMenu = document.querySelector('#mySidenav');
let openLeftSidebarMenu = document.querySelector('.openLeftSideMenu');
let closeLeftSidebarMenu = document.querySelector('.closeLeftSidebar');



openLeftSidebarMenu.addEventListener('click', ()=>{
    leftSideMenu.style.left = "0px";
    leftSideMenu.style.opacity = "1";
    overflowDarken.style.opacity = "1";
    overflowDarken.style.height = "100rem";
    overflowDarken.style.pointerEvents  = "auto"; 
    body.style.overflowY = "hidden";      
   
});

closeLeftSidebarMenu.addEventListener('click', ()=>{
    leftSideMenu.style.left = "-100%";
    leftSideMenu.style.opacity = "0";
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none";
    body.style.overflowY = "auto";

});

overflowDarken.addEventListener('click', ()=>{
  leftSideMenu.style.left = "-100%";
  leftSideMenu.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.opacity = "0";
  overflowDarken.style.pointerEvents  = "none";
  body.style.overflowY = "auto";

});


const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});


let mainMenuItem = document.querySelectorAll('.main-menu-item');

let is_view = false;
mainMenuItem.forEach((it)=>{  
      it.addEventListener('mouseover', () => {
          if (is_view) it.classList.add('hover');
          else setTimeout(() => {
            mainMenuItem.forEach(_ => { _.classList.remove('hover')});
              it.classList.add('hover');
              it.parentNode.classList.add('hovers');
              is_view = true;
            }, 300);
      });

      it.addEventListener('mouseleave', (e)=>{
          // if (is_view) it.classList.remove('hover');
          setTimeout(() => {           
              it.classList.remove('hover');
            }, 300);

          // e.currentTarget.classList.remove('hover');
          // e.currentTarget.parentNode.classList.remove('hovers');
      });

  });


document.querySelector('.main-menu').addEventListener('mouseenter', (e) => {
  // e.currentTarget.classList.add('wow');
});

document.querySelector('.main-menu').addEventListener('mouseleave', (e) => {
  is_view = false;
  // e.currentTarget.classList.remove('wow');
});


let mobileItem = document.querySelectorAll('.mobile-main-menu');
let elemForHideSkroll = document.querySelector('.sidenav');

mobileItem.forEach((it)=>{
    it.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('open');
        console.log( e.currentTarget.classList.contains('open'));
        if(e.currentTarget.classList.contains('open')){
          elemForHideSkroll.style.overflow = "auto";
          RightSideMenu.style.overflow = "auto";
        } else{
          elemForHideSkroll.style.overflow = "hidden";
          RightSideMenu.style.overflow  = "hidden";
        }
    });
});

let mySlider = $('.main-image-slider');

$('.main-image-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
});

// mySlider.mousewheel(function(e) {
//   e.preventDefault();

//   if (e.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// });


let collectionSlider = $('.new-collection-slider');

$('.new-collection-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 890,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              rows:2,
            }
          },
    ],

});

// collectionSlider.mousewheel(function(e) {
//   e.preventDefault();

//   if (e.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// });


let saleSlider = $('.sale-slider');

$('.sale-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 890,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              rows:2,
            }
          },
    ],

});

// saleSlider.mousewheel(function(e) {
//   e.preventDefault();

//   if (e.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// });


let lastSeenSlider = $('.last-seen-slider');

$('.last-seen-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 890,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
    ],

});

// lastSeenSlider.mousewheel(function(e) {
//   e.preventDefault();

//   if (e.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// });


let clothesColor = document.querySelectorAll('.color-item');

clothesColor.forEach((element)=>{
    let col = element.getAttribute('data-color');

    element.style.backgroundColor = col;

    if (["white", "#fff"].includes(col.toLowerCase())){
        element.style.borderColor = "#000";
    }

});




let headercartTrigger = document.querySelectorAll('.cart-trigger');
let closeRightSidebar2 = document.querySelector('.closeCart');
let RightSideCart = document.querySelector('.cart-right');
let cartTrigger = document.querySelectorAll('.addToCart');


headercartTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    RightSideCart.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
  });

})

cartTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    RightSideCart.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
  });

})

closeRightSidebar2.addEventListener('click', ()=>{
  RightSideCart.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.pointerEvents  = "none"; 
   body.style.overflowY = "auto";
});

overflowDarken.addEventListener('click', ()=>{
    RightSideCart.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none";    
   body.style.overflowY = "auto";
  
});


let cabinetInfoTrigger = document.querySelector('.person-icon');
let headerFind = document.querySelector('.logged');

let bigPlace = document.querySelector('.right-menu-info');



// // let cabinetStayActive = document.querySelector('.personal-cabinet');

cabinetInfoTrigger.addEventListener("mouseover", (e)=>{
  console.log(e.target.parentNode)
  headerFind.classList.add('active');
});

bigPlace.addEventListener("mouseleave", (e)=>{
  console.log(e.target.parentNode)
  headerFind.classList.remove('active');
});



// cabinetInfo.addEventListener("mouseleave", (e)=>{
//   console.log(e.target.parentNode)
//     e.target.parentNode.classList.remove('cab-info-hover');
// });


// cabinetStayActive.addEventListener("mouseleave", (e)=>{
//   cabinetInfo.parentNode.classList.remove('cab-info-hover');
// });