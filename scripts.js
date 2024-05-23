var app = {

    //app checker if visible
    initializeApps: function() {
      if (document.querySelector('.splide.mainTeamSplide')) {
        app.mainTeamSplide();
      }
      if (document.querySelector('.splide.brandsSplide')) {
        app.brandsSplide();
      }
      if (document.querySelector('.splide.testimonialsSplide')) {
        app.testimonialsSplide();
      }
      if (document.querySelector('.splide.wwd__splide')) {
        app.wwdSplide();
      }
      if (document.querySelector('.splide.om__splide')) {
        app.omSplide();
      }
      if(document.querySelector('.splide.success__splide')) {
        app.successSplide();
      }
      if(document.querySelector('.splide.splide__testimonials')) {
        app.successTestimonialsSplide();
      }
      if (document.querySelector('.ideas-section')){
        app.ideasCounter();
      }
    },

    fixedHeader: () => {
        $(window).scroll(() => {
          var scroll = $(window).scrollTop();
          var navHeight = $(".header").height();
    
          if (scroll > navHeight) {
            $(".header").addClass("header--active");
          } else {
            $(".header").removeClass("header--active");
          }
        });
      },

      mobileHeader: () => {
        $(".mobile-header__btn, .mobile-header__close-btn").on("click", () => {
          $(".mobile-header__overlay").toggleClass("transform-mh")
        });
      },
      
      brandsSplide: () => {
        var brandsSplide = new Splide('.splide.brandsSplide', {
          type: 'loop',
          perPage: 6,
          easing: 'ease',
          arrows: false,  
          pagination: false, 
          pauseOnHover: false,
          autoScroll: {
            speed: 1, 
          },  
          breakpoints: {
            991 : { perPage: 3},
            567 : { perPage: 2},
            400 : { perPage : 1},
          },
        });
        brandsSplide.mount( window.splide.Extensions );
      },

      testimonialsSplide: () => {
          var testimonialsSplide = new Splide('.splide.testimonialsSplide' , {
            type: 'loop',
            // autoplay: true,
            perPage: 1,
            easing: 'ease',
            arrows: false,  
            pagination: false, 
            pauseOnHover: false,
            interval: 3500,  
          });
  
          $('.--next-btn').on('click', function () {
            testimonialsSplide.go('+1');
          });

          $('.--prev-btn').on('click', function () {
            testimonialsSplide.go('-1');
          });

          testimonialsSplide.mount();
      },

        wwdSplide: () => {
        var wwdSplide = new Splide('.splide.wwd__splide' , {
          type: 'loop',
          autoplay: true,
          perPage: 3,
          perMove: 1,
          easing: 'ease',
          arrows: false,  
          pagination: false, 
          pauseOnHover: false,
          interval: 4500,
          gap: '1rem',
          breakpoints: {
            991 : { perPage: 2},
            768 : { perPage: 1},
          },
        });

        $('.--wwd-prev').on('click', function () {
          wwdSplide.go('-1');
        });

        $('.--wwd-next').on('click', function () {
          wwdSplide.go('+1');
        });

        wwdSplide.mount();
    },

    omSplide: () => {
      var omSplide = new Splide('.splide.om__splide' , {
        type: 'loop',
        autoplay: true,
        perPage: 3,
        perMove: 1,
        easing: 'ease',
        arrows: false,  
        pagination: false, 
        pauseOnHover: false,
        interval: 4500,
        gap: '1rem',
        breakpoints: {
          991 : { perPage: 2},
          768 : { perPage: 1},
        },
      });

      $('.--wwd-prev').on('click', function () {
        omSplide.go('-1');
      });

      $('.--wwd-next').on('click', function () {
        omSplide.go('+1');
      });

      omSplide.mount();
  },

  successSplide: () => {
    var successSplide = new Splide('.splide.success__splide' , {
      type: 'loop',
      autoplay: true,
      perPage: 3,
      perMove: 3,
      easing: 'ease',
      arrows: false,  
      pagination: false, 
      pauseOnHover: false,
      interval: 6500,
      breakpoints: {
        991 : { perPage: 2, perMove: 2},
        768 : { perPage: 1, perMove: 1},
      },
    });

    $('.--sc-prev').on('click', function () {
      successSplide.go('-1');
    });

    $('.--sc-next').on('click', function () {
      successSplide.go('+1');
    });

    successSplide.mount();
},

successTestimonialsSplide: () => {
  var successTestimonialsSplide = new Splide('.splide.splide__testimonials' , {
    type: 'loop',
    autoplay: true,
    perPage: 1,
    perMove: 1,
    easing: 'ease',
    arrows: false,  
    pagination: false, 
    pauseOnHover: false,
    interval: 4000,
    breakpoints: {
      991 : { perPage: 2, perMove: 2},
      768 : { perPage: 1, perMove: 1},
    },
  });
  successTestimonialsSplide.mount();
},

    mainTeamSplide: () => {
      var mainTeamSplide = new Splide('.splide.mainTeamSplide' , {
          type: 'loop',
          autoplay: true,
          start: 0,
          perPage: 1,
          perMove: 1,
          easing: 'ease',
          arrows: false,  
          pagination: false, 
          pauseOnHover: false,
          interval: 5500,  
        });
      var prevTeamSplide = new Splide('.splide.prevTeamSplide' , {
          type: 'loop',
          autoplay: true,
          start: 1,
          perPage: 3,
          perMove: 1,
          easing: 'ease',
          arrows: false,  
          pagination: false, 
          pauseOnHover: false,
          isNavigation: true,
          interval: 5500,  
        });

        $('.--team-prev').on('click', function () {
          mainTeamSplide.go('-1');
        });

        $('.--team-next').on('click', function () {
          mainTeamSplide.go('+1');
        });

          mainTeamSplide.sync(prevTeamSplide);
          mainTeamSplide.mount();
          prevTeamSplide.mount();
    },

      ideasCounter: () => {
        const counter = document.querySelector(".ideas-section");
        const io = new IntersectionObserver((entries) => {
          if (entries[0].intersectionRatio !== 0) {
            $(".ideas-items__count").each(function () {
              var $this = $(this),
                countTo = $this.attr("data-count");
      
              $({ countNum: $this.text() }).animate(
                {
                  countNum: countTo
                },
      
                {
                  duration: 4000,
                  easing: "linear",
                  step: function () {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                    $this.text(this.countNum);
                  }
                }
              );
            });
          }
        });
        io.observe(counter);
      },

}

$(document).ready(function () {
    AOS.init();
    app.mobileHeader();
    app.initializeApps();
    app.fixedHeader();
  });