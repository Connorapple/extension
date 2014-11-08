var jewelContainer = $(document.getElementsByClassName("_3t_z notifCentered notifGentleAppReceipt")); 
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

console.log($("#fbFavoritesJewel")),
    
var buttonContainer = $(document.getElementsByClassName("._5pcp _5vsi"));
var button = $(document.createElement('label'));

