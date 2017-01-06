$(document).ready(function(){
////////////// PREPARING TABLE /////////////////////////////

  var cards = [];
  cards.push('<img class="cardFront" src="img/backpack.svg">');
  cards.push('<img class="cardFront" src="img/bonfire.svg">');
  cards.push('<img class="cardFront" src="img/cabin.svg">');
  cards.push('<img class="cardFront" src="img/campfire.svg">');
  cards.push('<img class="cardFront" src="img/lodge.svg">');
  cards.push('<img class="cardFront" src="img/map.svg">');
  cards.push('<img class="cardFront" src="img/mountain.svg">');
  cards.push('<img class="cardFront" src="img/swiss-army-knife.svg">');

  //doubles each card in cards
  var doubleCards = cards.concat(cards);

  //shuffles array doubleCards;
  function shuffle() {
    doubleCards.sort(function(a, b){return 0.5 - Math.random()});
  }

  shuffle();


  //Back side of the card
  var cardBack = '<img class="cardBack" src="img/gray.png">';

  //puts pictures from doubleCards array in td's + puts pictures of cardBack + pictures of cardFound
  for (var j=0; j<=doubleCards.length; j++) {
      $("#board td").eq(j).html(doubleCards[j] + cardBack);
  }

  $(".cardFront").css("display", "none");

/////////////////////// GAME //////////////////////////////////

//after clicking back of the card
$(".cardBack").click(function(){
  //hide back of the card picture
  $(this).css("display", "none");
  //show front of the card
  $(this).siblings().css("display", "block");
});

//after clicking front of the card
$(".cardFront").click(function(){
  //if this card has been found in the past, do nothing
  if($(this).hasClass("found")) {

  }
  else {
    //hide front of the card picture
    $(this).css("display", "none");
    //show back of the card
    $(this).siblings().css("display", "block");
  }

});






//////////////////
});
