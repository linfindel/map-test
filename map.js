const map = new maplibregl.Map({
  container: 'map',
  style:
      'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  center: [-96, 37.8],
  zoom: 3
});

map.on('mousemove', (e) => {
  const features = map.queryRenderedFeatures(e.point);

  // Limit the number of properties we're displaying for
  // legibility and performance
  const displayProperties = [
      'properties',
      'id',
      'layer'
  ];

  const displayFeatures = features.map((feat) => {
      const displayFeat = {};
      displayProperties.forEach((prop) => {
          displayFeat[prop] = feat[prop];
      });
      return displayFeat;
  });

  document.getElementById('features').innerHTML = JSON.stringify(
      displayFeatures,
      null,
      2
  );
});