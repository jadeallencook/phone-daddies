<!doctype html>

<html class="no-js" lang="en">

<head>
    <!-- css -->
    <?php 
        // css includes and header info
        require_once('../partials/header.php'); 
    ?>
</head>

<body>
    <!-- main app -->
    <div class="wrapper">
        <?php 
            // main navbar build
            require_once('../partials/navbar.php');
            // mobile navigation 
            require_once('../partials/mobile-nav.php');
            // insert page content here
            require_once('../partials/homepage.php');
            // footer bar section 
            require_once('../partials/footer.php');
            // quick view for products
            require_once('../partials/quick-view.php'); 
        ?>
        <!-- END QUICKVIEW PRODUCT -->
    </div>
    <!-- js -->
    <?php 
        // all of the js includes
        require_once('../partials/js-includes.php'); 
    ?>
    
    <!-- homepage app -->
    <script src="../js/homepage.js"></script>
    <script src="../js/homepage-store.js"></script>

</body>

</html>