var app = app || {};

app.songController = (function() {
    function SongController(viewBag) {
        this._viewBag = viewBag;
    }

    SongController.prototype.loadSongPage = function (selector) {
        $.get('templates/songTemplate.html', function (templ) {
            $(selector).html(templ);
        })
    };

    return {
        load: function (viewBag) {
            return new SongController(viewBag);
        }
    }
})();