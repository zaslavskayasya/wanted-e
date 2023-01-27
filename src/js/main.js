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
        e.currentTarget.classList.toggle('open');
    });

});


var mySlider = $('.main-image-slider');

$('.main-image-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
});

mySlider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});




var collectionSlider = $('.new-collection-slider');

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

collectionSlider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});


var saleSlider = $('.sale-slider');

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

saleSlider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});


var lastSeenSlider = $('.last-seen-slider');

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

lastSeenSlider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});


let clothesColor = document.querySelectorAll('.color-item');

clothesColor.forEach((element)=>{
    let col = element.getAttribute('data-color');

    element.style.backgroundColor = col;

    if (["white", "#fff"].includes(col.toLowerCase())){
        element.style.borderColor = "#000";
    }

})

