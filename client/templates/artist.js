var TAB_KEY = 'artistShowTab';

Template.artist.created = function() {
  if (Router.current().params.activityId)
    Template.artist.setTab('feed');
  else
    Template.artist.setTab('artist');
}

Template.artist.rendered = function () {
  this.$('.artist').touchwipe({
    wipeDown: function () {
      if (Session.equals(TAB_KEY, 'artist'))
        Template.artist.setTab('make')
    },
    preventDefaultEvents: false
  });
  this.$('.attribution-artist').touchwipe({
    wipeUp: function () {
      if (! Session.equals(TAB_KEY, 'artist'))
        Template.artist.setTab('artist')
    },
    preventDefaultEvents: false
  });
}

// CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over
Template.artist.setTab = function(tab) {
  var lastTab = Session.get(TAB_KEY);
  Session.set(TAB_KEY, tab);
  
  var fromArtist = (lastTab === 'artist') && (tab !== 'artist');
  $('.feed-scrollable').toggleClass('instant', fromArtist);

  var toArtist = (lastTab !== 'artist') && (tab === 'artist');
  $('.feed-scrollable').toggleClass('delayed', toArtist);
}

Template.artist.helpers({
  isActiveTab: function(name) {
    return Session.equals(TAB_KEY, name);
  },
  activeTabClass: function() {
    return Session.get(TAB_KEY);
  },
  bookmarked: function() {
    return Meteor.user() && _.include(Meteor.user().bookmarkedArtistNames, this.name);
  },
  activities: function() {
    return Activities.find({ArtistName: this.name}, {sort: {date: -1}});
  }
});

Template.artist.events({
  'click .js-add-bookmark': function(event) {
    event.preventDefault();

    if (! Meteor.userId())
      return Overlay.open('authOverlay');
    
    Meteor.call('bookmarkArtist', this.name);
  },

  'click .js-remove-bookmark': function(event) {
    event.preventDefault();

    Meteor.call('unbookmarkArtist', this.name);
  },
  
  'click .js-show-artist': function(event) {
    event.stopPropagation();
    Template.artist.setTab('make')
  },
  
  'click .js-show-feed': function(event) {
    event.stopPropagation();
    Template.artist.setTab('feed')
  },
  
  'click .js-uncollapse': function() {
    Template.artist.setTab('artist')
  },

  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});
