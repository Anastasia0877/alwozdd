function backToTop() {
    var button = $('.back-to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 100) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, '100');
    })
}
backToTop();