var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getFeatureTags(feature) {
  if (feature) {
    var tags = feature.tags;
    
    if (tags) {
      // var tagList = '';
      // for (var key in tags) {
      //   if (tags.hasOwnProperty(key)) {
      //     tagList += key + ': ' + tags[key] + '\n';
      //   }
      // }

      var tagList = {};
      for (var key in tags) {
        if (tags.hasOwnProperty(key)) {
          tagList[key] = tags[key];
        }
      }

      console.log(tagList);
      
      document.getElementById("name").innerText = tagList["name"];
      document.getElementById("type").innerText = lookup(tagList);

      if (document.getElementById("name").innerText == "undefined") {
        document.getElementById("name").innerText = document.getElementById("type").innerText;
        document.getElementById("type").innerText = "";
      }
    }
    
    else {
      alert('No tags available for this feature.');
    }
  }
  
  else {
    alert('No feature clicked.');
  }
}

map.on('click', function(e) {
  var latlng = e.latlng;
  var url = `https://overpass-api.de/api/interpreter?data=[out:json];is_in(${latlng.lat},${latlng.lng});out body qt 1;`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.elements && data.elements.length > 0) {
      var feature = data.elements[0];

      getFeatureTags(feature);
    }
    
    else {
      alert('No feature found at this location.');
    }
  })
  
  .catch(error => {
    console.error('Error fetching OSM data:', error);
    alert('Failed to fetch OSM data.');
  });
});