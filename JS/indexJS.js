var previousPosition = null;

function initialize() {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 19,
        center: new google.maps.LatLng(48.858565, 2.347198),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
}

if (navigator.geolocation)
  var watchId = navigator.geolocation.watchPosition(successCallback, null, {enableHighAccuracy:true});
else
  alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");

function successCallback(position){
  map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    map: map
  });
  if (previousPosition){
    var newLineCoordinates = [
       new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
       new google.maps.LatLng(position.coords.latitude, position.coords.longitude)];

    var newLine = new google.maps.Polyline({
      path: newLineCoordinates,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    newLine.setMap(map);
  }
  previousPosition = position;
};
