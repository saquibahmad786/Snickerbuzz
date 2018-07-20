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