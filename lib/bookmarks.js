BookmarkCounts = new Meteor.Collection('bookmarkCounts');

Meteor.methods({
  'bookmarkArtist': function(artistName) {
    check(this.userId, String);
    check(artistName, String);

    var affected = Meteor.users.update({
      _id: this.userId,
      bookmarkedArtistNames: {$ne: artistName}
    }, {
      $addToSet: {bookmarkedArtistNames: artistName}
    });

    if (affected)
      BookmarkCounts.update({artistName: artistName}, {$inc: {count: 1}});
  },

  'unbookmarkArtist': function(artistName) {
    check(this.userId, String);
    check(artistName, String);

    var affected = Meteor.users.update({
      _id: this.userId,
      bookmarkedArtistNames: artistName
    }, {
      $pull: {bookmarkedArtistNames: artistName}
    });

    if (affected)
      BookmarkCounts.update({artistName: artistName}, {$inc: {count: -1}});
  }
});

// Initialize bookmark counts. We could use upsert instead.
if (Meteor.isServer && BookmarkCounts.find().count() === 0) {
  Meteor.startup(function() {
    _.each(ArtistData, function(artist, artistName) {
      BookmarkCounts.insert({artistName: artistName, count: 0});
    });
  });
}