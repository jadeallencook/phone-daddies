/*
    event listers
    - sell phone
    - repair phone 
*/
$().ready(function(){
    // sell phone
    $('.sell').mousedown(function(){
        $('body').empty().append(
            '<center><a href="index.html"><img id="form-logo" src="images/logo.png" /></a></center>' +
            '<iframe src="https://docs.google.com/forms/d/1S8BjscsUQheDP9CZB-2foYoFx1uk_XLwPUpW1ucYirk/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
        );
    });
    // repair phone
    $('.repair').mousedown(function(){
        $('body').empty().append(
            '<center><a href="index.html"><img id="form-logo" src="images/logo.png" /></a></center>' +
            '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCtiPjnmtkCffB364yUjgPmHrSFOCnJKY5DBiilZ-fmIuZgw/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
        );
    }); 
});