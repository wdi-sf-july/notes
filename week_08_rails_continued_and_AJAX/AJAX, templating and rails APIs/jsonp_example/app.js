var source = $("#flickrTemplate").html();
var template = Handlebars.compile(source);

$.ajax({
    url: "http://api.flickr.com/services/feeds/photos_public.gne",
    data: {
        tags: "pug",
        format: "json"
    },
    success: function(response) {
        response.items.forEach(function (itm) {
            var html = template(itm);
            $("body").append(html);
        });
    }
});
