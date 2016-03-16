var app = app || {};

(function() {

    app.router = Sammy(function () {

        var selector = '#container';
        var homeView = app.homeViews.load();
        var songView = app.songViews.load();
        
        var homeController = app.homeController.load(homeView);
        var songController = app.songController.load(songView);

        this.get('#/', function () {
            homeController.loadHomePage(selector);
        });


        this.get('#/song', function () {
            songController.loadSongPage(selector);
        });

        // testing UI
        this.get('#/login', function () {
            $('#header ul').hide();
            $.get('templates/login.html', function (templ) {
                $(selector).html(templ);
            })
        });

        this.get('#/register', function () {
            $('#header ul').hide();
            $.get('templates/register.html', function (templ) {
                $(selector).html(templ);
            })
        });

    });

    app.router.run('#/');

})();