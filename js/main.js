// //video player manipulation
// $(".stream-options a").click(function(event) {
//     event.preventDefault();
//     $getData = $(this).attr("href");
//     document.getElementById("my-video_html5_api").src = $getData;
//     document.getElementById("my-video_html5_api").load();
//     document.getElementById("my-video_html5_api").play();
//     $(window).scrollTop(0);
// });

// // carousel
$('.owl-carousel').owlCarousel({

    loop: true,
    margin: 8,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

// form validation
// $.validate({
//     lang: 'en'
// });


// // when search icon is clicked
// $('#search').click(function() {
//     $('#search-container input').css('display', 'inherit');
// });


// // Jekyll search
// SimpleJekyllSearch({
//     searchInput: document.getElementById('search-input'),
//     resultsContainer: document.getElementById('results-container'),
//     json: 'search.json'
// })


// // fixed sidebar

    if(window.innerWidth >= 992){
    
    $(window).scroll(function () {

        var height = $(window).scrollTop();

        var body = $("body").height();

        var removePosition = (body - 1700);

        if(height > 700){
            $(".hold_it").addClass('stop');
        }
        if(height > 700){
            $(".hold_it_baby").addClass('stop');
        }
        if(height < 700){

            $(".hold_it_baby").removeClass('stop');

        }
        if(height > removePosition || height < 700){
            $(".hold_it").removeClass('stop');   
        }

    });
    
    };

// preloader
$(document).ready(function(){
    $('main').hide();
    $(window).on({
        load: function(){
            $('.preloader').hide();
            $('main').show();
        }
    })
})