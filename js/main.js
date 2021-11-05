let btn = document.querySelector('.drop-link-open');
let modal = document.querySelector('.site-header__drop');

btn.addEventListener('click',function(){
  modal.classList.toggle('blocks-mod');
  console.log('sdsdsd');
});

let probtn = document.querySelectorAll('.products__btn');
let tabs = document.querySelectorAll('.pro');

probtn.forEach(function(item){

  item.addEventListener('click',function(){

    let primBtn = item;
    let curenTab = primBtn.getAttribute('data-tab');
    let enotherTab = document.querySelector(curenTab);
    let sliderBtn = document.querySelector('#slick-slide-control10');
    probtn.forEach(function(item){
      item.classList.remove('product-btn-activ');
    });
    tabs.forEach(function(item){
      item.classList.remove('product-block-activ');

    });

    primBtn.classList.add('product-btn-activ');

    enotherTab.classList.add('product-block-activ');

  });
});