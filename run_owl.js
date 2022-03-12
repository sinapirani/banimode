$(document).ready(function (){
    $(".color-carousel").owlCarousel({
        items : 6,
        margin : 10,
        rtl : true,
        nav: true,
        dots: false,
        responsive : {
            0:{
                items : 2,
            },
            300 : {
                items : 3,
            },
            400 : {
                items : 4,
            },
            500 : {
                items : 5,
            },
            768 : {
                items : 6
            }
        }
    })
    $(".image-carousel").owlCarousel({
        items : 1,
        margin : 20,
        rtl : true,
        dots : true,
        onTranslated : change_zoom,
        onInitialized : change_zoom,
        onChanged: change_zoom,
        responsive : {
            0 :{
              dotsContainer: null
            },
            768 : {
                dotsContainer: "#carousel-custom-dots"
            }
        }
    })
//     $(".owl-item").owlCarousel({
//     items : 1,
//     margin : 20,
//     rtl : true,
//     dots : true,
//     onTranslated : change_zoom,
//     onInitialized : change_zoom,
//     onChanged: change_zoom,
//     responsive : {
//         0 :{
//           dotsContainer: null
//         },
//         768 : {
//             dotsContainer: "#carousel-custom-dots"
//         }
//     }
// })
    $(".size-carousel").owlCarousel({
        items : 7,
        margin : 12,
        rtl : true,
        dots : false,
        nav : true,
        responsive : {
            0:{
                items : 3,
            },
            300 : {
                items : 5,
            },
            400 : {
                items : 6,
            },
            500 : {
                items : 7,
            },
            768 : {
                items : 8
            }
        }
    })

    $(".product-carousel").owlCarousel({
        items : 4,
        margin : 15 ,
        rtl : true,
        dots : false,
        nav : true,
        responsive : {
            0 : {
                items : 1,
                nav : false
            },
            430 : {
                items : 2,
            },
            768 : {
                items : 2,
                nav : true,
            },
            1000 : {
                items: 3,
            },
            1100 : {
                items : 4,
            }
        }
    })

    function run_elvate() {
        $(".image-carousel .owl-item.active img[data-zoom-image]").elevateZoom({
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
			zoomType : "inner",
			cursor: "crosshair",
            scrollZoom: false
        })
    }
    function change_zoom(event){
        if (window.innerWidth > 768) {
            $(".zoomContainer").remove()
            run_elvate()
        }
    }

    var zoom = $(".zoom-container");
    var zoomConfig = {
        zoomType: "inner",
        cursor: "crosshair",
        galleryActiveClass: "active",
        zoomWindowFadeIn: 200,
        zoomWindowFadeOut: 200,
        lensFadeIn: 200,
        lensFadeOut: 200,
        easing: true,
        /* loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif', */
        /* imageSrc: $('.pdp-gallery .owl-stage .owl-item.active img').attr('data-zoom') */
    };
    
    // let zoomContainer = document.querySelector('.image-carousel')
    // zoomContainer.addEventListener('click',()=>{
    //     alert('fuck you')
    // })
    // owlActive.forEach(el => {

    // })
})