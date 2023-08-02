let map = null;
let ourCoords = {
  latitude: 47.624851,
  longitude: -122.52099,
};
let watchId = null;

window.onload = getMyLocation;

function getMyLocation() {
  if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    let watchButton = document.getElementById("watch");
    watchButton.onclick = watchLocation; //start it
    let clearWatchButton = document.getElementById("clearWatch");
    clearWatchButton.onclick = clearWatch; //stop it
  } else {
    alert("Oops, no geolocation support");
  }
}

function displayLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let div = document.getElementById("location");
  div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
  div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";

  let km = computeDistance(position.coords, ourCoords);
  let distance = document.getElementById("distance");
  distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";

  if (map == null) {
    showMap(position.coords);
  } else {
    scrollMapToPosition(position.coords);
  }
}

// --------------------- Ready Bake ------------------
//
// Uses the Spherical Law of Cosines to find the distance
// between two lat/long points
//
function computeDistance(startCoords, destCoords) {
  let startLatRads = degreesToRadians(startCoords.latitude);
  let startLongRads = degreesToRadians(startCoords.longitude);
  let destLatRads = degreesToRadians(destCoords.latitude);
  let destLongRads = degreesToRadians(destCoords.longitude);

  let Radius = 6371; // radius of the Earth in km
  let distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads)
    ) * Radius;

  return distance;
}

function degreesToRadians(degrees) {
  radians = (degrees * Math.PI) / 180;
  return radians;
}

// ------------------ End Ready Bake -----------------

function showMap(coords) {
  let googleLatAndLong = new google.maps.LatLng(
    coords.latitude,
    coords.longitude
  );
  let mapOptions = {
    zoom: 10,
    center: googleLatAndLong,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  let mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);

  // add the user marker
  let title = "Your Location";
  let content = "You are here: " + coords.latitude + ", " + coords.longitude;
  addMarker(map, googleLatAndLong, title, content);
}

function addMarker(map, latlong, title, content) {
  let markerOptions = {
    position: latlong,
    map: map,
    title: title,
    clickable: true,
  };
  let marker = new google.maps.Marker(markerOptions);

  let infoWindowOptions = {
    content: content,
    position: latlong,
  };

  let infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, "click", function () {
    infoWindow.open(map);
  });
}

function displayError(error) {
  let errorTypes = {
    0: "Unknown error",
    1: "Permission denied",
    2: "Position is not available",
    3: "Request timeout",
  };
  let errorMessage = errorTypes[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + " " + error.message;
  }
  let div = document.getElementById("location");
  div.innerHTML = errorMessage;
}
//to watch the user's location
function watchLocation() {
  watchId = navigator.geolocation.watchPosition(displayLocation, displayError); //browser doesnt take more than 5000ms to get location
}

function scrollMapToPosition(coords) {
  let latitude = coords.latitude;
  let longitude = coords.longitude;

  let latlong = new google.maps.LatLng(latitude, longitude);
  map.panTo(latlong);

  // add the new marker
  addMarker(
    map,
    latlong,
    "Your new location",
    "You moved to: " + latitude + ", " + longitude
  );
}

function clearWatch() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId); //stops the watching
    watchId = null;
  }
}

// let options = { enableHighAccuracy: true, timeout: 100, maximumAge: 0 };
// window.onload = getMyLocation;
// function getMyLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       displayLocation,
//       displayError,
//       options
//     );
//   } else {
//     alert("Oops, no geolocation support");
//   }
// }
// function displayError(error) {
//   let errorTypes = {
//     0: "Unknown error",
//     1: "Permission denied",
//     2: "Position is not available",
//     3: "Request timeout",
//   };
//   let errorMessage = errorTypes[error.code];
//   if (error.code == 0 || error.code == 2) {
//     errorMessage = errorMessage + " " + error.message;
//   }
//   let div = document.getElementById("location");
//   div.innerHTML = errorMessage;
//   options.timeout += 100; //increase a timeout bt 100ms and try again. We will letthe use know that we are trying again
//   navigator.geolocation.getCurrentPosition(
//     displayLocation,
//     displayError,
//     options
//   );
//   div.innerHTML += " ... checking again with timeout=" + options.timeout;
// }
// function displayLocation(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let div = document.getElementById("location");
//   div.innerHTML =
//     "You are at Latitude: " + latitude + ", Longitude: " + longitude;
//   div.innerHTML += " (found in " + options.timeout + " milliseconds)"; //lets you know how long it took to get your location
//   let km = computeDistance(position.coords, ourCoords);
//   let distance = document.getElementById("distance");
//   distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
//   if (map == null) {
//     showMap(position.coords);
//   } else {
//     scrollMapToPosition(position.coords);
//   }
// }

// function scrollMapToPosition(coords) {
//   let latitude = coords.latitude;
//   let longitude = coords.longitude;
//   let latlong = new google.maps.LatLng(latitude, longitude);
//   map.panTo(latlong); //panTo method takes LatLng as an object and scrolls the map so that your new location is at the center of the map
//   addMarker(
//     map,
//     latlong,
//     "Your new location",
//     "You moved to: " + latitude + ", " + longitude
//   );
// }
