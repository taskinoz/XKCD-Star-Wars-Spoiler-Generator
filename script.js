$(function(){
  function randomize(a) {
    l=Math.floor(Math.random() * Math.floor(a.length));
    return a[l];
  }

  function generate() {
    return 'In this Star Wars movie, our heroes take on the First Order and new villan '+randomize(villan)+
           ' with help from their new friend '+randomize(friend)+
           ' Rey builds a new lightsaber with a '+randomize(lightsaber)+
           ' blade, and they head out to confront the First Order\'s new superweapon, the '+randomize(superweapon)+
           ' a space station capable of '+randomize(spacestaton)+
           '. They unexpectedly join forces with their old enemy '+randomize(enemy)+
           ' and destroy the superweapon  in a battle featuring '+randomize(battle)+
           ' p.s. Rey\' parents are '+randomize(parents)+
           ' and '+randomize(parentsand)+".";
  }

  villan = [
    'kyle ren',
    'malloc',
    'darth sebelius',
    'thranos',
    'lord juul'
  ];

  friend = [
    'kim spacemeasurer',
    'teen yoda',
    'dab tweetdeck',
    'yaz progestin',
    'ti-83'
  ];

  lightsaber = [
    'beige',
    'ochre',
    'mauve',
    'aquamarine',
    'taupe'
  ];

  superweapon = [
    'sun obliterator',
    'moonsquisher',
    'world eater',
    'planet zester',
    'superconducting cupercolider'
  ];

  spacestaton = [
    'blowing up a planet with a bunch of beams of energy that combine into one',
    'blowing up a bunch of planets with one beam of energy that splits into many',
    'cutting a planet in half and smashing the halves together like two cymbals',
    'increasing the co2 levels in a planets atmosphere, causing rapid heating',
    'triggering the end credits before the movie is done'
  ];

  enemy = [
    'boba fett',
    'salacious crumb',
    'the space slug',
    'the bottom half of darth maul',
    'youtube commenters'
  ];

  battle = [
    'a bow that shoots little lightsaber-headed arrows',
    'x-wings and tie fighters dodging the giant letters of the opening crawl',
    'a sith educational display that uses force lightning to demonstrate the dielectric breakdown of air',
    'kylo ren putting on another helmet oveer his smaller one',
    'a sith car wash where the bristles on the brushes are little lightsabers'
  ];

  parents = [
    'luke',
    'leia',
    'han',
    'obi-wan',
    'a random junk trader'
  ];

  parentsand = [
    'poe',
    'bb-8',
    'amilyn holdo',
    'laura dern',
    'a random junk trader',
    'that one droid from the jawa sandcrawler that says gonk'
  ];

  // Display and interaction
  $('#Generate').on('click', function() {
    $('.text p').text(generate());
  });

  // Generate the first text
  $('.text p').text(generate());
});
