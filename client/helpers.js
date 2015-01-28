pluralize = function(n, thing, options) {
  var plural = thing;
  if (_.isUndefined(n)) {
    return thing;
  } else if (n !== 1) {
    if (thing.slice(-1) === 's')
      plural = thing + 'es';
    else
      plural = thing + 's';
  }

  if (options && options.hash && options.hash.wordOnly)
    return plural;
  else
    return n + ' ' + plural;
}

Handlebars.registerHelper('pluralize', pluralize);

var DIMENSIONS = {
  small: '320x350',
  large: '640x480',
  full: '640x800'
};

UI.registerHelper('artistImage', function(options) {
  var size = options.hash.size || 'large';

  if (options.hash.artist)
    return '/img/artists/' + DIMENSIONS[size] + '/' + options.hash.artist.name + '.jpg';
});

Handlebars.registerHelper('activePage', function() {
  // includes Spacebars.kw but that's OK because the route name ain't that.
  var routeNames = arguments;

  return _.include(routeNames, Router.current().route.name) && 'active';
});

UI.registerHelper('addIndex', function (all) {
    return _.map(all, function(val, index) {
        val = val.split("__")
        return {index: index, value0: val[0], value1: val[1], value2: val[2] };
    });
});
