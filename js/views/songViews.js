var app = app || {};

app.songViews = (function() {

    function showSongs(selector,data) {
        $.get('templates/songTemplate.html', function (templ) {
            var result = Mustache.render(templ,data);
            $(selector).html(result);
        })
    }

    function showHomePageSongs(selector,data) {
        $.get('templates/songsHomePage.html', function (templ) {
            var result = Mustache.render(templ,data);
            $(selector).html(result);
        })
    }

    function showPlaylistSongs(selector,data) {
        $.get('templates/songsList.html', function (templ) {
            var result = Mustache.render(templ,data);
            $(selector).html(result);
        });

        $("#createPlaylist").on('click', function () {
            var title = $("#title").val();
            var author = $("#author").val();
            var songs = [];
            var checkedBoxes = $(".include");
            $.each(checkedBoxes,function () {
                if($(this).is(":checked")){
                    songs.push({'_type': "KinveyRef", '_id': $(this).val(), '_collection': "songs"});
                }
            });

            $.sammy(function () {
                this.trigger('addPlaylist', {title: title, author: author, songs: songs})
            })
        })
    }
    return {
        load: function() {
            return {
                showPlaylistSongs:showPlaylistSongs,
                showSongs:showSongs,
                showHomePageSongs:showHomePageSongs
            }
        }
    }
})();