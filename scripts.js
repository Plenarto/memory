$(document).ready(function(){

  var cards = [];
  cards.push('<img src="img/backpack.svg">');
  cards.push('<img src="img/bonfire.svg">');
  cards.push('<img src="img/cabin.svg">');
  cards.push('<img src="img/campfire.svg">');
  cards.push('<img src="img/lodge.svg">');
  cards.push('<img src="img/map.svg">');
  cards.push('<img src="img/mountain.svg">');
  cards.push('<img src="img/swiss-army-knife.svg">');

  //doubles each card in cards
  var doubleCards = cards.concat(cards);

  //shuffles array doubleCards;
  function shuffle() {
    doubleCards.sort(function(a, b){return 0.5 - Math.random()});
  }

  shuffle();

  //puts pictures from doubleCards array in td's
  for (var j=0; j<=doubleCards.length; j++) {
      $("#board td").eq(j).html(doubleCards[j]);
  }

});
