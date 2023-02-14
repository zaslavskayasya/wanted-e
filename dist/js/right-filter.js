let closeRightSidebar = document.querySelector('.closeRightSidebar');

let RightSideMenu = document.querySelector('.filter-right');

let rightFilterTrigger = document.querySelectorAll('.filter-item');

rightFilterTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
      RightSideMenu.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden";


    //find data-attr on clicked element
    let activeFilter = e.currentTarget.dataset.filtername; 

    //choose filter item with data-attributes
    let filterItem = document.querySelectorAll('[data-CatalogFilterName]');

    // check each of filter for contain clicked menu's attribite
    //compare them and open 
    filterItem.forEach((fi)=> {
        
        let filterData = fi.dataset.catalogfiltername;
        // console.log(filterData);       
        
        if (filterData === activeFilter){
            console.log(fi);
            fi.querySelector('.mobile-main-menu').classList.add('open');
        } else {
        }
    })  

  });

})


closeRightSidebar.addEventListener('click', ()=>{
  RightSideMenu.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.pointerEvents  = "none";
  mobileItem.forEach((mi)=>{
        mi.classList.remove('open');    
   }) ;
   body.style.overflowY = "auto";

});

overflowDarken.addEventListener('click', ()=>{
    RightSideMenu.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.pointerEvents  = "none";
    mobileItem.forEach((mi)=>{
        mi.classList.remove('open');    
   }) ;
   body.style.overflowY = "auto";
  
  });




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