var cheerio = require('cheerio');
$ = cheerio.load('http://buymziki.com/artists/most_viewed');

$('#capital bold').each(function() {
    console.log($(this).text());
});
