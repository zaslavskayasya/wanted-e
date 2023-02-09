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


let closeRightSidebar = document.querySelector('.closeRightSidebar');

let RightSideMenu = document.querySelector('.filter-right');

let rightFilterTrigger = document.querySelectorAll('.filter-item');

rightFilterTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', ()=>{
    RightSideMenu.classList.add('active');
    overflowDarken.style.opacity = "1";
  })
})


closeRightSidebar.addEventListener('click', ()=>{
  RightSideMenu.classList.remove('active');
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

// mySlider.mousewheel(function(e) {
//   e.preventDefault();

//   if (e.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// });


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

// collectionSlider.mousewheel(function(e) {
//   e.preventDefault();

//   if (e.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// });


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

// saleSlider.mousewheel(function(e) {
//   e.preventDefault();

//   if (e.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else {
//     $(this).slick('slickPrev');
//   }
// });


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

})


var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [20, 50000],
    connect: true,
    tooltips: false,
    range: {
        'min': [0],
        'max': 10000
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});


// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

  input.addEventListener('change', function () {
      stepsSlider.noUiSlider.setHandle(handle, this.value);
  });

  input.addEventListener('keydown', function (e) {

      var values = stepsSlider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = stepsSlider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

          case 13:
              stepsSlider.noUiSlider.setHandle(handle, this.value);
              break;

          case 38:

              // Get step to go increase slider value (up)
              position = step[1];

              // false = no step is set
              if (position === false) {
                  position = 1;
              }

              // null = edge of slider
              if (position !== null) {
                  stepsSlider.noUiSlider.setHandle(handle, value + position);
              }

              break;

          case 40:

              position = step[0];

              if (position === false) {
                  position = 1;
              }

              if (position !== null) {
                  stepsSlider.noUiSlider.setHandle(handle, value - position);
              }

              break;
      }
  });
});