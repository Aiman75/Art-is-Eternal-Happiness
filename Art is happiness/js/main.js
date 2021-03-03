$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

  ////////////////////// DEBUT CAROUSSEL ////////////////////////////////

  // $(document).ready(function(){
  //   $('.owl-carousel').owlCarousel({
  //     autoplay:true,
  //     loop:true
  //   })
  // });


  var prev = document.querySelector('div.prev');
var next = document.querySelector('div.next');
var index = 0;
var lis = document.querySelectorAll('ul.slider li');
var count = lis.length;

prev.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index--;
    if (index < 0){
        index = count-1;
    }

    lis[index].classList.add('visible');
});

next.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index++;
    if (index > count-1){
        index = 0;
    }

    lis[index].classList.add('visible');
});

///////////////////// FIN du caroussel //////////////////////////////////////////////////