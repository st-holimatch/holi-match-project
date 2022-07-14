
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        freeMode: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        },        
      });
      
      var swiper = new Swiper(".SwiperCategorias", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 0,
      // Navigation arrows
        breakpoints: {
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 8,
            spaceBetween: 0,
          },
        },        
      });      
