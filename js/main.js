$(document).ready(() => {

    $('.products-category').click((event) => {
        let current = $(event.target);
        $('.products-container').hide();
        let id = current.data('id');
        $('#' + id).show();

        $('.products-category').removeClass('active');
        current.addClass('active');

        $('#' + id + ' .products-carousel').slick('refresh');
        $('#' + id + ' .products-carousel-nav').slick('refresh');
    });

    $('#burgers .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers .products-carousel-nav',
        responsive: [{
            breakpoint: 321,
            settings: {
                arrows: false
            }
        }]
    });
    $('#burgers .products-carousel-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers .products-carousel',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#fries .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries .products-carousel-nav',
        responsive: [{
            breakpoint: 321,
            settings: {
                arrows: false
            }
        }]
    });
    $('#fries .products-carousel-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries .products-carousel',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#sauces .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauces .products-carousel-nav',
        responsive: [{
            breakpoint: 321,
            settings: {
                arrows: false
            }
        }]
    });
    $('#sauces .products-carousel-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauces .products-carousel',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('#drinks .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks .products-carousel-nav',
        responsive: [{
            breakpoint: 321,
            settings: {
                arrows: false
            }
        }]
    });
    $('#drinks .products-carousel-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks .products-carousel',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#reviews-content').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 547,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.btn-table').click(() => {
        $('#reservation').css('display', 'flex');

    });

    $('#reservation-cancel-img, #reservation').click((event) => {
        if (event.target.id === 'reservation' || event.target.id === 'reservation-cancel-img') {
            $('#reservation').hide();
        }
    });

    $('.actions > .btn-menu').click(() => {
        let error = $('#reserve-error');
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');

        if (name.val() && count.val() && phone.val() && time.val()) {
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-content').hide();
                    $('#reservation-sent').show();
                },
                error: () => {
                    $('#reservation').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по телефону.')
                }
            });
        } else {
            error.show();
        }
    });

    $('#burger').click(() => {
        $('#menu').toggleClass('open-menu');
        $('.menu-item, #menu').click(() => {
            $('#menu').removeClass('open-menu');

        });
    });

})