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

/////////////////////////////////////////////////////////////////////////////////////////////    
var buttonContainers = $(document.getElementsByClassName("_5pcp _5vsi")).children("div");
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
    class:"uiLinkButtonInput",
    type:"button",
    value: "Bookmark"
});

button.append(input);
buttonContainers.append(button);



$(document).scroll(function() {
   if(buttonContainers.contains(button)){
       console.log("has button"); 
       }
    else{
        buttonContainers.append(button);
    }
});