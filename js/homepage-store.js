$(function () {
    // cache sheet info
    let sheetURL = 'https://docs.google.com/spreadsheets/d/1fW6oNMdGDy1_K7UckTKTc1Ve2CNqcwvn3Q8-kWnVR4Q/pubhtml';
    // using tabletop to get gDoc
    Tabletop.init({
        key: sheetURL,
        callback: insertDoc,
        simpleSheet: false
    });

    // main build function after sheet loads
    function insertDoc(data, tabletop) {
        // cache all store items 
        var database = data.database.elements;
        // html build for product
        function buildItem(storeItem) {
            var html = '<div class="col-md-3 col-sm-4 col-xs-12"><div class="product-item"><div class="product-img">' +
                '<a href="single-product.html">' +
                '<img src="' + storeItem['pic-1'] + '" alt="" />' +
                '</a></div>' +
                '<div class="product-info">' +
                '<h6 class="product-title">' +
                '<a href="single-product.html">' + storeItem.title + '</a>' +
                '</h6>' +
                '<div class="pro-rating">' +
                '<a href="#"><i class="zmdi zmdi-star"></i></a>' +
                '<a href="#"><i class="zmdi zmdi-star"></i></a>' +
                '<a href="#"><i class="zmdi zmdi-star"></i></a>' +
                '<a href="#"><i class="zmdi zmdi-star-half"></i></a>' +
                '<a href="#"><i class="zmdi zmdi-star-outline"></i></a>' +
                '</div>' +
                '<h3 class="pro-price">' + storeItem.retail + '</h3>' +
                '<ul class="action-button">' +
                '<li>' +
                '<a href="#" title="Wishlist"><i class="zmdi zmdi-favorite"></i></a>' +
                '</li><li>' +
                '<a href="#" data-toggle="modal" data-target="#productModal" title="Quickview"><i class="zmdi zmdi-zoom-in"></i></a>' +
                '</li><li>' +
                '<a href="#" title="Compare"><i class="zmdi zmdi-refresh"></i></a>' +
                '</li><li>' +
                '<a href="#" title="Add to cart"><i class="zmdi zmdi-shopping-cart-plus"></i></a>' +
                '</li></ul></div></div></div>';
            return html;
        }
        // cache settings 
        let store = {
            max: 8
        }
        // start build
        $.each(database, function(x, item){
            if (x < store.max) {
                $('div#products-list').append(buildItem(item));
            }
            if (item.front === 'TRUE') {
                // $('div#featured-products').append(buildItem[item]);
            }
        });
        for (var x = 0; x < 8; x++) {
            //$('div#products-list').append(buildItem(database[x]));
        }
    }
});
