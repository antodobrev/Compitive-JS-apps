var app = app || {};

app.homeViews = (function() {

    function showHeader(selector) {
        $.get('templates/header.html', function (templ) {
            $(selector).html(templ);
        })
    }

    function showHeaderLogged(selector) {
        $.get('templates/headerLogged.html', function (templ) {
            $(selector).html(templ);
        })
    }

    function showHomePage(selector) {
        $.get('templates/home.html', function (templ) {
            $(selector).html(templ);
        })
    }

    function showHomePageLogged(selector) {
        $.get('templates/homeLogged.html', function (templ) {
            $(selector).html(templ);
        })
    }

    return {
        load: function() {
            return {
                showHeader: showHeader,
                showHeaderLogged: showHeaderLogged,
                showHomePage: showHomePage,
                showHomePageLogged: showHomePageLogged
            }
        }
    }
})();