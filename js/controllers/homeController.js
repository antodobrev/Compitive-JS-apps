var app = app || {};

app.homeController = (function() {
    function HomeController(viewBag) {
        this._viewBag = viewBag;
    }

    HomeController.prototype.loadHomePage = function (selector) {
        $.get('templates/home.html', function (templ) {
            $(selector).html(templ);
        })
    };

    return {
        load: function (viewBag) {
            return new HomeController(viewBag);
        }
    }
}());