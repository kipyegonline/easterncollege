
$('.owl_main_slider').owlCarousel({
    loop:false,
    margin:10,
    nav:true,        
    autoplay: true,
    navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            dots:false,
            items:1
        },
        768:{
            dots:false,
            items:2
        },
        600:{
            dots:false,
            items:1
        },
        1000:{
            dots:false,
            items:4
        }
    }
}); 

