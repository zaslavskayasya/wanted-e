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

//# sourceMappingURL=item.js.map
