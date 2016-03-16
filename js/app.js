var app = app || {};

(function() {

    app.router = Sammy(function () {

        var baseUrl = "https://baas.kinvey.com";
        var appId = "kid_Z19LWTj4JW";
        var appSecret = "a6abc3d9c01c4adf8b42bf866611e195";

        var header = "#header";
        var selector = '#container';

        var requester = app.requester.load();

        var credentials = app.credentials.load(appId,appSecret);
        var userModel = app.user.load(baseUrl,appId,credentials,requester);

        var homeView = app.homeViews.load();
        var userView = app.userViews.load();
        var songView = app.songViews.load();
        
        var homeController = app.homeController.load(homeView);
        var userController = app.userController.load(userModel,userView,credentials);
        var songController = app.songController.load(songView);

        this.before({except: {path: '#\/(register|login)?'}},function(){
            var sessionId = sessionStorage.getItem('sessionId');
            if(!sessionId){
                this.redirect("#/login");
                return false;
            }
        });

        this.get('#/', function () {
            homeController.loadHeader(header);
            homeController.loadHomePage(selector);
        });

        this.get('#/song', function () {
            songController.loadSongPage(selector);
        });

        this.get('#/home', function () {
            homeController.loadHomePageLogged(selector);
        });

        this.get('#/login', function () {
            userController.loadLoginPage(selector);
        });

        this.get('#/logout', function () {
            userController.logout();
        });

        this.get('#/register', function () {
            userController.loadRegisterPage(selector);
        });

        this.bind('redirectUrl',function(e,data){
            this.redirect(data.url);
        });

        this.bind('login',function(e,data){
            userController.login(data);
        });

        this.bind('register',function(e,data){
            userController.register(data);
        });

        this.bind('loadLoggedHeader',function(e){
            homeController.loadHeaderLogged(header);
        });

        this.bind('loadHeader',function(e){
            homeController.loadHeader(header);
        });

    });

    app.router.run('#/');

})();