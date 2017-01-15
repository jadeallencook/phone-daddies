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
                var json = data.banner.elements;
            },
            repairs: function () {
                var json = data.repairs.elements;
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
            all: function(){
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