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
var judaking1 = new buzz.sound('/sounds/judaking_mercy-and-love.mp3');
var khidytz0 = new buzz.sound('/sounds/khidy-tz_mdogo-mdogo.mp3');
var drgi0 = new buzz.sound('/sounds/dr-gi.mp3');
var bronzeh0 = new buzz.sound('/sounds/bronzeh_Sikumob.mp3');
var bronzeh1 = new buzz.sound('/sounds/bronzeh_nasifu_yangu.mp3');
var bernmusiq0 = new buzz.sound('/sounds/bern-music_kwa-macho.mp3');
var makadem0 = new buzz.sound('/sounds/makadem_Orudo-aye.mp3');
var makadem1 = new buzz.sound('/sounds/Makadem_mganga-Mkuu.mp3');
var makena0 = new buzz.sound('/sounds/makena-skosh_.mp3');
var clintoz0 = new buzz.sound('/sounds/clintoz_kwenye-mitambo.mp3');
var ogyoung0 = new buzz.sound('/sounds/og-young_still-i-rule.mp3');
var dspark0 = new buzz.sound('/sounds/dspark_be-strong.mp3');
var revelation0 = new buzz.sound('/sounds/revelation_nionyeshe.mp3');
var pacekenya0 = new buzz.sound('/sounds/pace-kenya_hands.mp3');
var pacekenya1 = new buzz.sound('/sounds/pace-kenya_go-banannas.mp3');
var revelation0 = new buzz.sound('/sounds/pace-kenya_twende-safari.mp3');
var rebbzondari0 = new buzz.sound('/sounds/rebbz-ondari_nasimama.mp3');
var sizzla0 = new buzz.sound('/sounds/sizzla.mp3');

//if (Template.artist.name == "Esther Liana")    var revelation = new buzz.sound('/sounds/



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

      'click .sizzla0_stop': function(event) {

        sizzla0.play().stop();    

  },

      'click .sizzla0': function(event) {

        sizzla0.play().fadeIn();    

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

     'click .bern-musiq0': function(event) {

        bernmusiq0.play().fadeIn();    

  },

   'click .bern-musiq0_stop': function(event) {

        bernmusiq0.play().stop();    

  },
  'click .bronzeh0': function(event) {

        bronzeh0.play().fadeIn();    

  },

  'click .bronzeh0_stop': function(event) {

        bronzeh0.play().stop();        
  },
  
    'click .bronzeh1': function(event) {

        bronzeh1.play().fadeIn();    

  },


  'click .bronzeh1_stop': function(event) {

        bronzeh1.play().stop();        
  },

    'click .jimwat0': function(event) {

        jimwat0.play().fadeIn();    

  },

  'click .jimwat0_stop': function(event) {

        jimwat0.play().stop();        
  },

    'click .jimwat1': function(event) {

        jimwat1.play().fadeIn();    

  },


  'click .jimwat1_stop': function(event) {

        jimwat1.play().stop();        
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


  'rebbzondari0': function(event) {

        rebbzondari0.play().fadeIn();    

  },

  'click .rebbzondari0_stop': function(event) {

        rebbzondari0.play().stop();        
  },

  'pace-kenya0': function(event) {

        pacekenya0.play().fadeIn();    

  },

  'click .pace-kenya0_stop': function(event) {

        pacekenya0.play().stop();        
  },


  'pace-kenya1': function(event) {

        pacekenya1.play().fadeIn();    

  },

  'click .pace-kenya1_stop': function(event) {

        pacekenya1.play().stop();        
  },



  'click .khidy-tz0': function(event) {

        khidytz0.play().fadeIn();    

  },

  'click .khidy-tz0_stop': function(event) {

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

 'click .makadem1': function(event) {

        makadem1.play().fadeIn();    

  },

  'click .makadem1_stop': function(event) {

        makadem1.play().stop();        
  },


  'click .dspark-the-rap-master0_stop': function(event) {

        dspark0.play().stop();        
  },
    'click .dspark-the-rap-master0': function(event) {

        dspark0.play().fadeIn();    

  },

  'click .revelation0_stop': function(event) {

        revelation0.play().stop();        
  },
    'click .revelation0': function(event) {

        revelation0.play().fadeIn();    

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
