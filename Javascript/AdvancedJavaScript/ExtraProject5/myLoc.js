let map = null;
let ourCoords = {//object for the coordinates the location of Wickedly Smart HQ
  latitude: 47.624851,
  longitude: -122.52099,
};
let watchId = null;

window.onload = getMyLocation;//call the function getMyLocation as soon as the browswer loads

function getMyLocation() {//want to check if broswer supports geolocation api
  if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    let watchButton = document.getElementById("watch");
    watchButton.onclick = watchLocation; //start it
    let clearWatchButton = document.getElementById("clearWatch");
    clearWatchButton.onclick = clearWatch; //stop it
  } else {
    alert("Oops, no geolocation support");//if broswer doesnt support it
  }
}

function displayLocation(position) {//handler function that is called when the browser has a location so we pass it a position object
  let latitude = position.coords.latitude;//get our location from the position object that has coords property
  let longitude = position.coords.longitude;

  let div = document.getElementById("location");
  div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
  div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
  //use accuracy property of position and append onto the end of the <div> innerhtml

  let km = computeDistance(position.coords, ourCoords);//pass it my position and Wickledyly smart location
  let distance = document.getElementById("distance");
  distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";

  if (map == null) {
    showMap(position.coords);//we call this function
  } else {
    scrollMapToPosition(position.coords);
  }
}

// --------------------- Ready Bake ------------------
//
// Uses the Spherical Law of Cosines to find the distance
// between two lat/long points
//
function computeDistance(startCoords, destCoords) {//takes 2 coordinates, a start coordinate and a destination coordinate and returns the distance in km
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
  );//there is a constructor that takes the Lat and Long and returns an object that holds them both
  let mapOptions = {
    zoom: 10,
    center: googleLatAndLong,//want the map to be centered around this location
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  let mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);
  //assign map object to global variable map
  //Here’s another constructor from Google’s API, which takes an element and our options and creates and returns a map object

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
    clickable: true,//set it true because we want to display info window when it is clicked
  };
  let marker = new google.maps.Marker(markerOptions);
//create a marker object using a constructor from google's api and pass it the markerOption object we just created
  let infoWindowOptions = {
    content: content,
    position: latlong,//we needed the lat and long
  };

  let infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, "click", function () {
    infoWindow.open(map);
  });//When the marker is clicked, 
  //this function is called and the 
  //infoWindow opens on the map
}
//call this function if we are failing to get geolocation
function displayError(error) {//pass an error
  let errorTypes = {//error object contains a code property from 0-3
    0: "Unknown error",
    1: "Permission denied",
    2: "Position is not available",
    3: "Request timeout",
  };
  let errorMessage = errorTypes[error.code];//assign the error code property to errorMessage
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + " " + error.message;
  }
  let div = document.getElementById("location");
  div.innerHTML = errorMessage;//let user know their error
}
//to watch the user's location
function watchLocation() {
  watchId = navigator.geolocation.watchPosition(displayLocation, displayError); //browser doesnt take more than 5000ms to get location
}//pass the watchPosition function a success handler ie dispayLocation and the exsisting error handler

function scrollMapToPosition(coords) {
  let latitude = coords.latitude;
  let longitude = coords.longitude;

  let latlong = new google.maps.LatLng(latitude, longitude);
  map.panTo(latlong);
  //The panTo method of the map takes the LatLng object and scrolls the map so your new location is at the center of the map

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
  }//call the geolocation.clearWatch 
  //method, passing in the watchId. 
  //This stops the watching
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
