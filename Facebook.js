var favoritesDiv = $('<div class="uiToggle _4962" id="fbFavoritesJewel"></div>');
var favoritesA = $('<a class="jewelButton" href="#" rel="toggle" role="button" name="favorites" aria-haspopup="true" aria-owns="fbFavoritesFlyout"></a>');

favoritesDiv.append(favoritesA);

$(document).ready(function{
 
    $("._3t_z .notifCentered .notifGentleAppReceipt").append(favoritesDiv);


});





