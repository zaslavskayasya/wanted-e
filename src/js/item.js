console.log("test item");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].classList.add('active');
  dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


clothesColor.forEach((el)=>{
  el.addEventListener("click", (event)=> {

    clothesColor.forEach((elem)=>{
      elem.classList.remove('active');
    });  

        if(!event.target.classList.contains('active')){
          
          el.classList.add('active');

        } 

    });
})


let sizeItems = document.querySelectorAll(".size-item");

sizeItems.forEach((el)=>{
  el.addEventListener("click", (event)=> {

    sizeItems.forEach((elem)=>{
      elem.classList.remove('active');
    });  

        if(!event.target.classList.contains('active')){
          
          el.classList.add('active');

        } 

    });
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnm = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal
btnm.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let closeRightSidebar = document.querySelector('.closeRightSidebar');

let RightSideMenuInfo = document.querySelector('.info-right');

let rightFilterTrigger = document.querySelectorAll('.info-trigger');

rightFilterTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    RightSideMenuInfo.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
  });

})

closeRightSidebar.addEventListener('click', ()=>{
  RightSideMenuInfo.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.pointerEvents  = "none"; 
   body.style.overflowY = "auto";

});
overflowDarken.addEventListener('click', ()=>{
    RightSideMenuInfo.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.pointerEvents  = "none";    
   body.style.overflowY = "auto";
  
});



function openDes(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

