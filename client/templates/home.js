var FEATURED_COUNT = 4;

Template.home.helpers({
  // selects FEATURED_COUNT number of artists at random
  featuredartists: function() {
    var artists = _.values(ArtistData);
    var selection = [];
    
    for (var i = 0;i < FEATURED_COUNT;i++)
      selection.push(artists.splice(_.random(artists.length - 1), 1)[0]);

    return selection;
  },
  
  activities: function() {
    return Activities.latest();
  },
  
  latestNews: function() {
    return News.latest();
  }
});