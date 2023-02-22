console.log('conntect cart page');

    

// 1. пікселы до гори екрану від батьківського елементу 
let wrapElement = document.querySelector(".wrap-ware");
    
let stickyBlock = document.querySelector("#sticky");  
  
let WrapHeight = wrapElement.getBoundingClientRect().height;
let StickyHeight = stickyBlock.getBoundingClientRect().height;



console.log(WrapHeight + "h")
let infoAboutHeight;

// 2. 
window.onscroll = function (e, sticky) {
  // елемент що треба зафіксувати 
    let pixelsToTopFromWrap = wrapElement.getBoundingClientRect().top;
    // console.log(stickyBlock);

   infoAboutHeight =  (WrapHeight + pixelsToTopFromWrap) - StickyHeight;
//    console.log(infoAboutHeight);

  if(pixelsToTopFromWrap >= 0){
    //   console.log('on top ' + pixelsToTopFromWrap);
      stickyBlock.style.top = "0px";
  } else if (pixelsToTopFromWrap < 0 ) {      
        //   console.log('under top ' + pixelsToTopFromWrap);
        if(infoAboutHeight > 0){
            stickyBlock.style.top = pixelsToTopFromWrap*-1 + 15 + "px";

        }
   
  }
}

//caLCULATE     

let counterPluses = document.querySelectorAll('.counter-plus');
let counterMinus = document.querySelectorAll('.counter-minus');
let quantity = 1;



counterPluses.forEach((counterPluses)=>{
    counterPluses.addEventListener('click', (e)=>{
        let thisItemCard = e.target.parentElement.parentElement.parentElement.parentElement;

        // plce of number in counter
        let NumberItem = thisItemCard.querySelector('.counter-number');

        // место для суммі
        let placeForPrice = thisItemCard.querySelector('.placeForPrice');

        // место для того чтоб узнать цену 
        let OriginPrice = thisItemCard.querySelector('.originPrice').innerHTML;


        // add +1 if click on +
        let actualQuantity = NumberItem.innerHTML;
        actualQuantity++;

        
        // take data about price
        let NewWarePrice =  OriginPrice * actualQuantity;

        placeForPrice.innerHTML = NewWarePrice;
        NumberItem.innerHTML = actualQuantity;               
        // console.log(actualQuantity);
        // console.log(thisItemCard.querySelector('.price-num'));

    });
});


counterMinus.forEach((counterMinus)=>{

    counterMinus.addEventListener('click', (e)=>{
        let thisItemCard = e.target.parentElement.parentElement.parentElement.parentElement;

        // plce of number in counter
        let NumberItem = thisItemCard.querySelector('.counter-number');

        // место для суммі
        let placeForPrice = thisItemCard.querySelector('.placeForPrice');

        // место для того чтоб узнать цену 
        let OriginPrice = thisItemCard.querySelector('.originPrice').innerHTML;


        // add +1 if click on +
        let actualQuantity = NumberItem.innerHTML;
        actualQuantity--;

        // take data about price
        let NewWarePrice =  OriginPrice * actualQuantity;

        placeForPrice.innerHTML = NewWarePrice;
        NumberItem.innerHTML = actualQuantity;               
        // console.log(actualQuantity);
        // console.log(thisItemCard.querySelector('.price-num'));

    });
});



let deleteBlockTrigger = document.querySelectorAll('.delete-img');


deleteBlockTrigger.forEach((deleteBlockTrigger)=>{
    deleteBlockTrigger.addEventListener('click', (e)=>{
            e.target.closest(".ware-item").remove();
    });
})