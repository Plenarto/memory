$(document).ready(function(){
////////////// PREPARING TABLE /////////////////////////////

  var cards = [];
  cards.push('<img class="cardFront hidden" id="backpack" src="img/backpack.svg">');
  cards.push('<img class="cardFront hidden" id="bonfire" src="img/bonfire.svg">');
  cards.push('<img class="cardFront hidden" id="cabin" src="img/cabin.svg">');
  cards.push('<img class="cardFront hidden" id="campfire" src="img/campfire.svg">');
  cards.push('<img class="cardFront hidden" id="lodge" src="img/lodge.svg">');
  cards.push('<img class="cardFront hidden" id="map" src="img/map.svg">');
  cards.push('<img class="cardFront hidden" id="mountain" src="img/mountain.svg">');
  cards.push('<img class="cardFront hidden" id="swiss-army-knife" src="img/swiss-army-knife.svg">');

  //doubles each card in cards
  var doubleCards = cards.concat(cards);

  //shuffles array doubleCards;
  function shuffle() {
    doubleCards.sort(function(a, b){return 0.5 - Math.random()});
  }

  shuffle();

  // picture which displays when correct pair has been selected
  var cardFound = '<img class="cardFound hidden" src="img/white.png">';

  //Back side of the card
  var cardBack = '<img class="cardBack shown" src="img/gray.png">';

  //puts pictures from doubleCards array in td's + puts pictures of cardBack + pictures of cardFound
  for (var j=0; j<=doubleCards.length; j++) {
      $("#board td").eq(j).html(doubleCards[j] + cardFound + cardBack);
  }

/////////////////////// GAME //////////////////////////////////





  //after user clicks on any td...
  $("td").click(function() {

    //add picture from this cell to array
      //if array.length > 2 then...
      // if array.length === 2 then
          //if id of selectedOne === id of selectedTwo then...
      //if array length < 2 then



      //if cardBack is visible then...
      if ($(this).find(".cardBack").hasClass("shown")) {
        //hide cardBack
        $(this).find(".cardBack").addClass("hidden");
        $(this).find(".cardBack").removeClass("shown");
        //show cardFront
        $(this).find(".cardFront").addClass("shown");
        $(this).find(".cardFront").addClass("selected");
        $(this).find(".cardFront").removeClass("hidden");
      }
      //if cardFront is visible
      else if ($(this).find(".cardFront").hasClass("shown")) {
        //hide cardFront
        $(this).find(".cardFront").addClass("hidden");
        $(this).find(".cardFront").removeClass("shown");
        $(this).find(".cardFront").removeClass("selected");

        //show cardBack
        $(this).find(".cardBack").addClass("shown");
        $(this).find(".cardBack").removeClass("hidden");
      }


  });






//////////////////
});
