console.log('personal test');

let personalCabinetTrigger = document.querySelectorAll('.cabinet-trigger');
let closeCabinetSidebar = document.querySelector('.closeCabinetSidebar');

let cabinetSidebar = document.querySelector('.login-part');


personalCabinetTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    cabinetSidebar.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
  });
})


closeCabinetSidebar.addEventListener('click', ()=>{
    cabinetSidebar.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none"; 
     body.style.overflowY = "auto";
});


overflowDarken.addEventListener('click', ()=>{
  cabinetSidebar.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.pointerEvents  = "none";    
 body.style.overflowY = "auto";

});


let triggerRegister = document.querySelector('.triggerRegister');
let triggerLogin = document.querySelector('.triggerLogin');

let registerblock = document.querySelector('.wrap-register');
let loginBlock = document.querySelector('.wrap-login');



triggerRegister.addEventListener('click', ()=>{
    loginBlock.classList.remove('active');
    registerblock.classList.add('active');
});

triggerLogin.addEventListener('click', ()=>{
    registerblock.classList.remove('active');
    loginBlock.classList.add('active');
});
