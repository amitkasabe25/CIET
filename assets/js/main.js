if($('.bikes-slider').length > 0) {
  $('.bikes-slider').slick({
      dots: false,
      autoplay:false,
      infinite: false,
      slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
  });
}

if($('.cars-slider').length > 0) {
  $('.cars-slider').slick({
      dots: false,
      autoplay:false,
      infinite: false,
      slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
  });
}

if($('.tyre-options-slider').length > 0) {
  $('.tyre-options-slider').slick({
      dots: false,
      autoplay:false,
      infinite: false,
      slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });
}


$(document).ready(function () {
  size = $(".accordion .accordion-item").length;
  let x=4;
  $(".accordion .accordion-item:lt("+x+")").css("display","block");
  $('#loadMore').click(function () {
      x= (x+4 <= size) ? x+3 : size;
      $(".accordion .accordion-item:lt("+x+")").css("display","block");
      if(x==size){
        $("#loadMore").css("display","none");
      }
      
  });
})

