var app = app || {};

app.songViews = (function() {
    function showSongPage(selector) {
        $.get('templates/songTemplate.html', function (templ) {
            $(selector).html(templ);
        })
    }

    return {
        load: function() {
            return {
                showHomePage: showSongPage
            }
        }
    }
})();