Template.bookmarks.helpers({
  artistCount: function() {
    return pluralize(this.length, 'artist');
  }
});