// Based on https://wiki.openstreetmap.org/wiki/Map_features
// I should probably make it more efficient than a bunch of if statements eventually lol

function lookup(tags) {
  // Aerialways

  if (tags["aerialway"] == "cable_car") {
    return "Cable car";
  }

  else if (tags["aerialway"] == "gondola") {
    return "Gondola";
  }

  else if (tags["aerialway"] == "mixed_lift") {
    return "Gondola/chairlift";
  }

  else if (tags["aerialway"] == "chair_lift") {
    return "Chairlift";
  }

  else if (tags["aerialway"] == "drag_lift") {
    return "Drag lift"
  }

  else if (tags["aerialway"] == "t-bar") {
    return "T-bar lift"
  }

  else if (tags["aerialway"] == "j-bar") {
    return "JS-bar lift"
  }

  else if (tags["aerialway"] == "platter") {
    return "Platter lift"
  }

  else if (tags["aerialway"] == "rope_tow") {
    return "Rope tow lift"
  }

  else if (tags["aerialway"] == "magic_carpet") {
    "Magic carpet lift"
  }

  else if (tags["aerialway"] == "zip_line") {
    "Zip line"
  }

  else if (tags["aerialway"] == "goods") {
    "Aerial goods lift"
  }

  else if (tags["aerialway"] == "pylon") {
    "Pylon"
  }

  else if (tags["aerialway"] == "zip_line") {
    "Zip line"
  }

  else if (tags["aerialway"] == "station") {
    "Aerialway station"
  }
} 