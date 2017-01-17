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
                    var phones = data.repairs.elements;
                    for (var x = 0; x < 12; x++) {
                        $('a#phone-brand-' + (x + 1)).empty().text(phones[x].name);
                        $('img#phone-image-' + (x + 1)).attr('src', phones[x].image);
                    }
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
                    var blogs = data.blog.elements;
                    $.each(blogs, function (x, blog) {
                        $('img#blog-image-' + (x + 1)).attr('src', blog.image);
                        $('h5#blog-title-' + (x + 1)).text(blog.title);
                        $('p#blog-desc-' + (x + 1)).text(blog.description);
                        $('a#blog-link-' + (x + 1)).attr('href', blog.link);
                    });
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