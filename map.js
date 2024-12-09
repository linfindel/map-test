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

  const geometryType = displayFeatures[0]["geometry"];
  console.log(geometryType);

  document.getElementById('features').innerHTML = JSON.stringify(
      displayFeatures,
      null,
      2
  );
});