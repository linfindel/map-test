const map = new maplibregl.Map({
  container: 'map',
  style:
      'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  center: [-4.705, 50.475],
  zoom: 15
});

map.on('mousemove', (e) => {
  const features = map.queryRenderedFeatures(e.point);

  const displayProperties = ['id', 'geometry'];

  const displayFeatures = features.map((feat) => {
      const displayFeat = {};
      displayProperties.forEach((prop) => {
          displayFeat[prop] = feat[prop];
      });
      return displayFeat;
  });

  let geometryType = displayFeatures[0]["geometry"].type;
  let id = displayFeatures[0]["id"]

  if (geometryType == "Point") {
    geometryType = "node";
  }

  else if (geometryType == "LineString" || "Polygon" || "MultiLineString") {
    geometryType = "way";
  }

  console.log(geometryType);

  fetch(`https://api.openstreetmap.org/api/0.6/${geometryType}/${id}/full.json`)
  .then((response) => {
    if (!response.ok) {
        throw new Error
            (`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    let elements = data.elements;
    let tags;
    elements.forEach(element => {
      if (element.tags) {
        tags = element.tags;
        console.log(tags);
        if (tags.name) {
          document.getElementById("name").innerText = tags.name;
        }

        else {
          document.getElementById("name").innerText = "";
        }
      }
    });
  })
  .catch((error) => console.error("Unable to fetch data:", error));
  

  document.getElementById('features').innerHTML = JSON.stringify(
      displayFeatures,
      null,
      2
  );
});