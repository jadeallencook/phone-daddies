$(document).ready(function(){
    $('.sell').mousedown(function(){
        $('body').empty().append(
            '<center><a href="index.html"><img src="images/logo.png" style="width: 250px; position:absolute; top: 45px; margin-left: -125px"  /></a></center>' +
            '<iframe src="https://docs.google.com/forms/d/1S8BjscsUQheDP9CZB-2foYoFx1uk_XLwPUpW1ucYirk/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
        );
    });
    $('.repair').mousedown(function(){
        $('body').empty().append(
            '<center><a href="index.html"><img src="images/logo.png" style="width: 250px; position:absolute; top: 45px; margin-left: -125px"  /></a></center>' +
            '<iframe src="https://docs.google.com/forms/d/1nHjvRo1qhdL9HXt453u9SBXUauXrOeQ7KqZXd8ydM3Y/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
        );
    });
});