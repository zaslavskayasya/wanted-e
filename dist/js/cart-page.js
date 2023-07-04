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
  if(window.innerWidth < 1280){
        return;
  }
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
            stickyBlock.style.top = pixelsToTopFromWrap*-1 + "px";

        }   
  }
}



//caLCULATE
let counterPluses = document.querySelectorAll('.counter-plus');
let counterMinus = document.querySelectorAll('.counter-minus');

// place for total quantity 
let placeForTotalQuantity = document.querySelector('.ware-number');
let placeForTotalQuantityMob = document.querySelector('.ware-number-mob');
//place for total price
let placeForTotalSum1 = document.querySelector('.ware-calc-sum') ;
let placeForTotalSumMob = document.querySelector('.ware-calc-sum-mob') ;
// 
let placeForFinalySum  = document.querySelector('.finalSum');
let placeForFinalySumMob  = document.querySelector('.finalSum-mob');

function calculateQuantity(){
    let counterNumberTotaly = document.querySelectorAll('.counter-number');
    let elemSum = 0;
    console.log("counterNumberTotaly = " + counterNumberTotaly);
    elemSum  = 0;
    counterNumberTotaly.forEach((elem)=>{
            console.log(elem.innerHTML);
            elemSum += parseInt(elem.innerHTML);
    })
    placeForTotalQuantity.innerHTML = elemSum;
    placeForTotalQuantityMob.innerHTML = elemSum;
    
    console.log('elemSum  ' + elemSum);

}
calculateQuantity();


function calculateTotalSum(){
    let counterNumberTotaly = document.querySelectorAll('.placeForPrice');
    let elemsSum = 0;
    console.log("counterNumberTotaly = " + counterNumberTotaly);
    elemsSum  = 0;
    counterNumberTotaly.forEach((elem)=>{
            console.log(elem.innerHTML);
            elemsSum += parseInt(elem.innerHTML);
    })
    placeForTotalSum1.innerHTML = elemsSum;
    placeForFinalySum.innerHTML = elemsSum;
    placeForTotalSumMob.innerHTML = elemsSum;
    placeForFinalySumMob.innerHTML = elemsSum;
    console.log('elemSum  ' + elemsSum);

}
calculateTotalSum();


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

        calculateQuantity();
        calculateTotalSum();

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
        if (actualQuantity <= 0){
            return;
        } else{

            actualQuantity--;
        }

        // take data about price
        let NewWarePrice =  OriginPrice * actualQuantity;

        placeForPrice.innerHTML = NewWarePrice;
        NumberItem.innerHTML = actualQuantity;               
        // console.log(actualQuantity);
        // console.log(thisItemCard.querySelector('.price-num'));
        calculateQuantity();
        calculateTotalSum();

    });
});



let deleteBlockTrigger = document.querySelectorAll('.delete-img');


deleteBlockTrigger.forEach((deleteBlockTrigger)=>{
    deleteBlockTrigger.addEventListener('click', (e)=>{
        
        e.target.closest(".ware-item").remove();

        
        calculateQuantity();
        calculateTotalSum();

        console.log('test');

    });
})