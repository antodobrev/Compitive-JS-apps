var app = app || {};

app.homeController = (function() {
    function HomeController(viewbag) {
        this._viewbag = viewbag;
    }

    HomeController.prototype.loadHeader = function(selector){
        this._viewbag.showHeader(selector);
    };

    HomeController.prototype.loadHeaderLogged = function(selector){
        this._viewbag.showHeaderLogged(selector);
    };

    HomeController.prototype.loadHomePage = function (selector) {
        this._viewbag.showHomePage(selector);
    };

    HomeController.prototype.loadHomePageLogged = function (selector) {
        this._viewbag.showHomePageLogged(selector);
    };

    return {
        load: function (viewBag) {
            return new HomeController(viewBag);
        }
    }
}());