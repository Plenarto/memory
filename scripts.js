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
  var cardBack = '<img class="cardBack" src="img/cardback5.svg">';

  //puts pictures from doubleCards array in td's + puts pictures of cardBack + pictures of cardFound
  //and adds to each td unique id of "td" + number
  for (var j=0; j<=doubleCards.length; j++) {
      $("#board td").eq(j).html(doubleCards[j] + cardBack);
      $("#board td").eq(j).attr("id", "td" + j);
  }

  $(".cardFront").css("display", "none");

/////////////////////// GAME //////////////////////////////////
//array of selected images;
var selected = [];

//display number of user moves
var movesNumber = "";

//after clicking BACK OF THE CARD
$(".cardBack").click(function(){
    //hide back of the card picture
    $(this).css("display", "none");
    //show front of the card
    $(this).siblings().css("display", "block");
    //front of the card is added to array selected
    var selectedCard = $(this).siblings();

    selected.push(selectedCard);

    for (var i=0; i<selected.length; i++) {
      console.log(selected[i]);
    }

    //check selected array length
    //if it's two, compare pictures
    if (selected.length === 2) {
      //sources (paths) of selected front cards
      var pictureOneSource = selected[0].eq(0).attr("src");
      var pictureTwoSource = selected[1].eq(0).attr("src");
      //variables for ID's of selected cards (for later comparison)
      var IdSelectedParent1 = selected[0].parents().eq(0).attr("id");
      var IdSelectedParent2 = selected[1].parents().eq(0).attr("id");

      //pictures are same and they are in different TD's (their parent's id's are different);
      if ((pictureOneSource === pictureTwoSource) && (IdSelectedParent1 !== IdSelectedParent2)) {
        //shows pictures of found cards with opacity
        selected[0].eq(0).addClass("found");
        selected[1].eq(0).addClass("found");
        //hides grey side of the found card
        selected[0].eq(0).siblings().addClass("foundHidden");
        selected[1].eq(0).siblings().addClass("foundHidden");
      }
      else if (pictureOneSource !== pictureTwoSource) {

      }
    }
    else if (selected.length > 2) {
      console.log("selected > 2");
      selected[0].eq(0).css("display", "none");
      selected[1].eq(0).css("display", "none");
      selected[0].eq(0).siblings().css("display", "block");
      selected[1].eq(0).siblings().css("display", "block");
      selected = [];
      selected.push(selectedCard);
    }
    else if (selected.length < 2) {

    }

    //add 1 to number of user moves
    movesNumber++;
    $("#movesNumber").text(movesNumber);
});



//after clicking FRONT OF THE CARD
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
