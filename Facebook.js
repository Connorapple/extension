var jewelContainer = $("._3t_z.notifCentered.notifGentleAppReceipt"); 
console.log(jewelContainer);
var favoritesJewel = $(document.createElement('div'));
var favoritesA = $(document.createElement('a'));
var favoritesimg = $(document.createElement('img'));
var favoritesToggleState = false;

favoritesJewel.attr({
   class:"uiToggle _4962",
   id:"fbFavoritesJewel"
    
});
favoritesA.attr({
   class:"jewelbutton",
    href:"#",
    role:"button",
    "aria-haspopup":"true"
});
favoritesimg.attr({
   src: chrome.extension.getURL('img/bookmarkButton.png')
});

favoritesA.append(favoritesimg);
favoritesJewel.append(favoritesA);
jewelContainer.append(favoritesJewel);

$("#fbFavoritesJewel").append('<div class="__tw uiToggleFlyout" id="fbFavoritesFlyout"><div class="jewelBeeperHeader"><div class="beeperNubWrapper"><div class="beeperNub" id="myBeeper"></div></div></div></div>');
$("#fbFavoritesFlyout").append('<div class="jewelHighlight uiScrollableArea fade uiScrollableAreaWithShadow"><ul><li>CONNOR</li><li>FUCK</li></ul></div>');

$(".uiToggle._4962").click(function(e) {
    var parentJewel = $(e.target).parents(".uiToggle._4962");
    console.log(parentJewel.attr('id'));
    if (parentJewel.attr('id') != "fbFavoritesJewel") {
      closeFlyout($("#fbFavoritesJewel"));
    }
});

favoritesA.click(function(){
  if (favoritesToggleState) {
    closeFlyout($("#fbFavoritesJewel"));
  } else{
    $("#fbFavoritesJewel").addClass('openToggler');
    favoritesToggleState = true;  
  }
})

function closeFlyout (jewel) {
  jewel.removeClass("openToggler");
  jewel.children(".__tw.uiToggleFlyout").addClass("toggleTargetClosed");
  favoritesToggleState = false;
}


/////////////////////////////////////////////////////////////////////////////////////////////    
// var post = $("._4-u2.mbm._5jmm._5pat._5v3q._5x16").children($("._5pcp._5vsi"));
var buttonContainers = $("._5pcp._5vsi").children("div");
var button = $(document.createElement('label'));
var input = $(document.createElement("input"));

button.attr({
    class:"uiLinkButton postBookmarkButton",
    title:"Bookmark this"
});

button.css({
    float: "right"
});

input.attr({
    class:"uiLinkButtonInput",
    type:"button",
    value: "Bookmark"
});

button.click( function(e) {
  getId(e.target);
});
button.append(input);
button.appendTo(buttonContainers);

var date = new Date();
var lastDateCheck = date.getTime();

$(document).scroll(function() {
  date = new Date();
  var dateCheck = date.getTime();

  if (dateCheck - lastDateCheck > 1000) {
    buttonContainers = $("._5pcp._5vsi").children("div");
    var buttonsNeedingEdits = [];

    for (var i = buttonContainers.length - 1; i >= 0; i--) {
      if ($(buttonContainers[i]).children(".postBookmarkButton").length == 0) {
        buttonsNeedingEdits.push($(buttonContainers[i]));
      }
    };

    button.appendTo(buttonsNeedingEdits);
    button.click( function(e) {
      getId(e.target);
    });
    lastDateCheck = dateCheck;
  };
});

function getId(button) {
  var post = $(button).parents(".userContentWrapper._5pcr._3ccb");
  var postLink = post.find("._5pcq");
  console.log(postLink.attr("href"));
}


















