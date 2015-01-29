var TAB_KEY = 'artistShowTab';


var esther0 = new buzz.sound('/sounds/EstherLiana_Imela.mp3');
var bobbyghostboydinero0 = new buzz.sound('/sounds/ghostboy_phantom-family.mp3');
var bobbyghostboydinero1 = new buzz.sound('/sounds/ghostboy_Bean-Town.mp3');
var elizabethwambui0 = new buzz.sound('/sounds/elizabeth-wambui_nianguriire.mp3');
var elizabethwambui1 = new buzz.sound('/sounds/elizabeth-wambui_nianguriire.mp3');
var jimwat0 = new buzz.sound('/sounds/jimwat_under-18.mp3');
var jimwat1 = new buzz.sound('/sounds/jimwat_tunakatika-featuring-wamboe.mp3');
var knel0 = new buzz.sound('/sounds/k-nel-ft-jae-rich-vera-shindika-produced-by-ghostboy.mp3');
var knel1 = new buzz.sound('/sounds/naomis-baby_knel-ghostboy-ozmosis.mp3');
var knel2 = new buzz.sound('/sounds/k-nel__naomis-baby-produced-by-deejay-snake-from-portugal.mp3');
var elizabethwambui0 = new buzz.sound('/sounds/elizabeth-wambui_nianguriire.mp3');
var gabirodahiphop0 = new buzz.sound('/sounds/gabiro-dahiphop_Ujumbe.mp3');
var gabirodahiphop1 = new buzz.sound('/sounds/gabiro-dahiphop_naitwa-gabiro.mp3');
var judaking0 = new buzz.sound('/sounds/judaking-Just-a-dreamer.mp3');
var judaking1 = new buzz.sound('/sounds/judaking-Just-a-dreamer.mp3');
var khidytz0 = new buzz.sound('/sounds/khidy-tz_mdogo-mdogo.mp3');
var drgi0 = new buzz.sound('/sounds/dr-gi.mp3');
var bronzeh0 = new buzz.sound('/sounds/bronzeh_Sikumob.mp3');
var bronzeh1 = new buzz.sound('/sounds/bronzeh_nasifu_yangu.mp3');
var bernmusic0 = new buzz.sound('/sounds/bern-music_kwa-macho.mp3');
var makadem0 = new buzz.sound('/sounds/makadem_Orudo-aye.mp3');
var makena0 = new buzz.sound('/sounds/makena-skosh_.mp3');
var clintoz0 = new buzz.sound('/sounds/clintoz_kwenye-mitambo.mp3');
var ogyoung0 = new buzz.sound('/sounds/og-young_still-i-rule.mp3');

var 0 = new buzz.sound('/sounds/');'
//if (Template.artist.name == "Esther Liana")
//var beat2 = new buzz.sound('/sound/truck.ogg');


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

  'click .esther-liana0': function(event) {

        esther0.play().fadeIn();    

  },

  'click .esther-liana0_stop': function(event) {

        esther0.play().stop();        
  },


    'click .bobby-ghostboy-dinero0': function(event) {

        bobbyghostboydinero0.play().fadeIn();    

  },

  'click .bobby-ghostboy-dinero0_stop': function(event) {

        bobbyghostboydinero0.play().stop();        
  },


    'click .k-nel0': function(event) {

        knel0.play().fadeIn();    

  },

  'click .k-nel0_stop': function(event) {

        knel0.play().stop();        
  },


    'click .judaking0': function(event) {

        judaking0.play().fadeIn();    

  },

      'click .judaking0_stop': function(event) {

        judaking0.play().stop();    

  },

      'click .judaking1': function(event) {

        judaking1.play().fadeIn();    

  },

      'click .judaking1_stop': function(event) {

        judaking1.play().stop();    

  },

   'click .gabiro-hiphop0': function(event) {

        gabirodahiphop0.play().fadeIn();    

  },

   'click .gabiro-hiphop0_stop': function(event) {

        gabirodahiphop0.play().stop();    

  },

   'click .gabiro-hiphop1': function(event) {

        gabirodahiphop1.play().fadeIn();    

  },

   'click .gabiro-hiphop1_stop': function(event) {

        gabirodahiphop1.play().stop();    

  },

     'click .bern-music0': function(event) {

        bernmusic0.play().fadeIn();    

  },

   'click .bern-music0_stop': function(event) {

        bernmusic0.play().stop();    

  },

    'click .jimwat0': function(event) {

        jimwat0.play().fadeIn();    

  },

  'click .jimwat0_stop': function(event) {

        jimwat0.play().stop();        
  },

    'click .jclintoz-mfalme0': function(event) {

        clintoz0.play().fadeIn();    

  },

  'click .jjclintoz-mfalme0_stop': function(event) {

        clintoz0.play().stop();        
  },

  'og-young0': function(event) {

        ogyoung0.play().fadeIn();    

  },

  'click .og-young0_stop': function(event) {

        ogyoung0.play().stop();        
  },


    'click .jimwat1': function(event) {

        jimwat1.play().fadeIn();    

  },

  'click .jimwat1_stop': function(event) {

        jimwat1.play().stop();        
  },

  'click .khidy-tz0': function(event) {

        khidytz0.play().fadeIn();    

  },

  'click .khid-tz0_stop': function(event) {

        khidytz0.play().stop();        
  },

  'click .dr-gi0': function(event) {

        drgi0.play().fadeIn();    

  },

  'click .dr-gi0_stop': function(event) {

        drgi0.play().stop();        
  },

  'click .makadem0': function(event) {

        makadem0.play().fadeIn();    

  },

  'click .makadem0_stop': function(event) {

        makadem0.play().stop();        
  },

  'click .makena-skosh0': function(event) {

        makena0.play().fadeIn();    

  },

  'click .makena-skosh0_stop': function(event) {

        makena0.play().stop();        
  },

    'click .elizabeth-wambui0': function(event) {

        elizabethwambui0.play().fadeIn();    

  },

  'click .elizabeth-wambui0_stop': function(event) {

        elizabethwambui0.play().stop();        
  },


  'click EstherLianaImela': function(event) {

        EstherLianaImela.play().fadeIn();    

  },

  'click EstherLianaImela_stop': function(event) {

        buzz.play().stop();    

  },

  'click .js-remove-bookmark': function(event) {
    event.preventDefault();

    Meteor.call('unbookmarkArtist', this.name);
  },
  
  'click .js-show-artist': function(event) {
    event.stopPropagation();
    Template.artist.setTab('make')
  },

   'click .js-show-next': function(event) {
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
