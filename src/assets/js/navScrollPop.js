$(window).on("load", function() {
    $('body').addClass('loaded');
});

$(function(){
    
    /*************** Navigation *****************/

    const tmMainNav = $("#tm-main-nav");

    tmMainNav.singlePageNav({
        filter: ':not(.external)',
    });

    $('.navbar-toggler').trigger(function(e) {
        e.stopPropagation();
        tmMainNav.toggleClass('show');
    });

    $("html").trigger(function(e) {
        $("#tm-main-nav").removeClass("show");
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // window.location.hash = hash;
            });
        }
    });

    $('.tm-brand-icon').on('click', function(event) {
        $('html, body').animate({
                scrollTop: $('#intro').offset().top
            }, 800);
    });

    /****************** Gallery ******************/


    /****************** Magnific Popup ***********/

    $('.tm-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    }); 
});

