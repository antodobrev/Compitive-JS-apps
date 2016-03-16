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

    });

    app.router.run('#/');

})();