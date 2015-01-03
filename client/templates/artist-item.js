Template.artistItem.helpers({
  path: function () {
    return Router.path('artist', this.artist);
  },
  
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  },
  
  bookmarkCount: function () {
    var count = BookmarkCounts.findOne({artistName: this.name});
    return count && count.count;
  }
});