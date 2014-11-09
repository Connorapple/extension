var jewelContainer = $("._3t_z.notifCentered.notifGentleAppReceipt"); 
console.log(jewelContainer);
var favoritesJewel = $(document.createElement('div'));
var favoritesA = $(document.createElement('a'));
var favoritesimg = $(document.createElement('img'));

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

button.append(input);
buttonContainers.append(button);

var date = new Date();
var lastDateCheck = date.getTime();

$(document).scroll(function() {
  date = new Date();
  var dateCheck = date.getTime();

  if (dateCheck - lastDateCheck > 1000) {
    buttonContainers = $("._5pcp._5vsi").children("div");

    for (var i = buttonContainers.length - 1; i >= 0; i--) {
      if ($(buttonContainers[i]).children(".postBookmarkButton").length == 0) {
        $(buttonContainers[i]).css("color", "red");
        var label = $("<label class='uiLinkButton postBookmarkButton' title='Bookmark this' style='float:right;><input class='uiLinkButtonInput' type='button' value='Bookmark'></label>");
        $(buttonContainers[i]).append(label);
        console.log(button);
      }
    };

    // var editedButtons = $("._5pcp._5vsi div:contains('.postBookmarkButton')");
    // console.log(editedButtons.length);
    // for (var i = buttonContainers.length - 1; i >=0 ; i--) {

    //   if ($(buttonContainers[i]).children(".postBookmarkButton").length == 0) {
    //     console.log("false");
    //     $(buttonContainers[i]).append(button);
    //   } else {
    //     console.log("true");
    //   }
    // };

    lastDateCheck = dateCheck;
  };
});



















