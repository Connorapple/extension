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
var post = $("._4-u2.mbm._5jmm._5pat._5v3q._5x16").children($("._5pcp._5vsi"));
var buttonContainers = $("._5pcp._5vsi").children("div");
var button = $(document.createElement('label'));
var input = $(document.createElement("input"));

button.attr({
    class:"uiLinkButton",
    title:"Bookmark this"
});
button.css({
    float: "right"
});

input.attr({
    class:"uiLinkButtonInput postBookmarkButton",
    type:"button",
    value: "Bookmark"
});

button.append(input);
buttonContainers.append(button);
post.append(buttonContainers);


$(document).scroll(function() {
  buttonContainers = $("._5pcp._5vsi");
  for (var i = buttonContainers.length -1; i >=0 ; i--) {
    console.log($(buttonContainers[i]).children(".postBookmarkButton").length);
    if ($(buttonContainers[i]).children(".postBookmarkButton").length == 0) {
      console.log("false");
      $(post[i]).append(button);
    } else {
      console.log("true");
    }
  };
});



















