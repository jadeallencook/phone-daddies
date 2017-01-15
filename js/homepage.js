$(function () {
    // cache sheet info
    var sheetURL = 'https://docs.google.com/spreadsheets/d/11OIyaip5SwDPagpRUebSrW8nSgsTFdyCadF3GnQ9lj8/pubhtml';

    // using tabletop to get gDoc
    Tabletop.init({
        key: sheetURL,
        callback: insertDoc,
        simpleSheet: false
    });

    // main build function after sheet loads
    function insertDoc(data, tabletop) {
        // main build object
        var build = {
                banner: function () {
<<<<<<< Updated upstream
                    var banners = data.banner.elements;
                    $.each(banners, function (x, banner) {
                        $('img#banner-image-' + (x + 1)).attr('src', banner.image);
                        $('h1#banner-title-' + (x + 1)).text(banner.title);
                        $('p#banner-desc-' + (x + 1)).text(banner.description);
                        $('a#banner-link-' + (x + 1)).attr('href', banner.link);
                        $('span#banner-button-' + (x + 1)).text(banner.button);
                    });
                },
                repairs: function () {
                    var json = data.repairs.elements;
=======
                    var json = data.banner.elements;
                },
                repairs: function () {
                    var phones = data.repairs.elements;
                    $.each(phones, function (x, phone) {
                        var html = '<div class="col-xs-12">' +
                            '<div class="single-brand-product">' +
                            '<a href="single-product.html"><img src="img/product/5.jpg" alt=""></a>' +
                            '<h3 class="brand-title text-gray">' +
                            '<a href="#">Brand name</a>' +
                            '</h3></div></div>';
                        $('div#phone-repairs').append(html);
                    });
>>>>>>> Stashed changes
                },
                featured: function () {
                    var json = data.featured.elements;
                },
                countdown: function () {
                    var json = data.countdown.elements;
                },
                promo: function () {
                    var json = data.promo.elements;
                },
                blog: function () {
                    var json = data.blog.elements;
                },
                all: function () {
                    // build all sections
                    build.banner();
                    build.repairs();
                    build.featured();
                    build.countdown();
                    build.promo();
                    build.blog();
                }
            }
            // init build 
        build.all();
    }
});