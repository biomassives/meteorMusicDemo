var feedSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('news');
  Meteor.subscribe('bookmarkCounts');
  feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  dataReadyHold = LaunchScreen.hold();
}

HomeController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('latestActivity', function() {
      dataReadyHold.release();
    });
  }
});

ArtistController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('artist', this.params.name);
  },
  data: function() {
    return ArtistData[this.params.name];
  }
});

ArtistsController = RouteController.extend({
  data: function() {
    return _.values(ArtistData);
  }
});

FeedController = RouteController.extend({
  onBeforeAction: function() {
    this.feedSubscription = feedSubscription;
  }
});

BookmarksController = RouteController.extend({
  onBeforeAction: function() {
    if (Meteor.user())
      Meteor.subscribe('bookmarks');
    else
      Overlay.open('authOverlay');
  },
  data: function() {
    if (Meteor.user())
      return _.values(_.pick(ArtistData, Meteor.user().bookmarkedArtistNames));
  }
});


AdminController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('news');
  }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('feed');
  this.route('artists');
  this.route('bookmarks');
  this.route('about');
  this.route('artist', {path: '/artist/:name'});
  this.route('admin', { layoutTemplate: null });
});

Router.onBeforeAction('dataNotFound', {only: 'artist'});