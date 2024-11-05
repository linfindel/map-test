// Based on https://wiki.openstreetmap.org/wiki/Map_features
// I should probably make it more efficient than a bunch of if statements at some point lol

function lookup(tags) {
  // Aerialways
  if (tags["aerialway"]) {
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
      return "Drag lift";
    }

    else if (tags["aerialway"] == "t-bar") {
      return "T-bar lift";
    }

    else if (tags["aerialway"] == "j-bar") {
      return "JS-bar lift";
    }

    else if (tags["aerialway"] == "platter") {
      return "Platter lift";
    }

    else if (tags["aerialway"] == "rope_tow") {
      return "Rope tow lift";
    }

    else if (tags["aerialway"] == "magic_carpet") {
      return "Magic carpet lift";
    }

    else if (tags["aerialway"] == "zip_line") {
      return "Zip line";
    }

    else if (tags["aerialway"] == "goods") {
      return "Aerial goods lift";
    }

    else if (tags["aerialway"] == "pylon") {
      return "Pylon";
    }

    else if (tags["aerialway"] == "zip_line") {
      return "Zip line";
    }

    else if (tags["aerialway"] == "station") {
      return "Aerialway station";
    }

    else {
      return "Aerialway feature";
    }
  }

  // Aeroway
  if (tags["aeroway"]) {
    if (tags["aeroway"] == "aerodrome") {
      return "Aerodrome";
    }

    else if (tags["aeroway"] == "aircraft_crossing") {
      return "Aircraft crossing";
    }

    else if (tags["aeroway"] == "apron") {
      return "Airport apron";
    }

    else if (tags["aeroway"] == "gate") {
      return "Airport gate";
    }

    else if (tags["aeroway"] == "hangar") {
      return "Hangar";
    }

    else if (tags["aeroway"] == "helipad") {
      return "Helipad";
    }

    else if (tags["aeroway"] == "heliport") {
      return "Heliport";
    }

    else if (tags["aeroway"] == "navigationaid") {
      return "Aircraft navigation aid";
    }

    else if (tags["aeroway"] == "runway") {
      return "Runway";
    }

    else if (tags["aeroway"] == "spaceport") {
      return "Spaceport";
    }

    else if (tags["aeroway"] == "taxiway") {
      return "Taxiway";
    }

    else if (tags["aeroway"] == "terminal") {
      return "Airport terminal";
    }

    else if (tags["aeroway"] == "windsock") {
      return "Windsock";
    }

    else {
      return "Aeroway feature";
    }
  }

  // Amenity
  if (tags["amenity"]) {
    // Sustainance
    if (tags["amenity"] == "bar") {
      return "Bar";
    }

    else if (tags["amenity"] == "biergarten") {
      return "Beer garden";
    }

    else if (tags["amenity"] == "cafe") {
      return "Café";
    }

    else if (tags["amenity"] == "fast_food") {
      return "Fast food restaurant";
    }

    else if (tags["amenity"] == "food_court") {
      return "Food court";
    }

    else if (tags["amenity"] == "ice_cream") {
      return "Ice cream shop";
    }

    else if (tags["amenity"] == "pub") {
      return "Pub";
    }

    else if (tags["amenity"] == "restaurant") {
      return "Restaurant";
    }
    
    // Education
    else if (tags["amenity"] == "college") {
      return "College";
    }

    else if (tags["amenity"] == "dancing_school") {
      return "Dancing school";
    }

    else if (tags["amenity"] == "driving_school") {
      return "Driving school";
    }

    else if (tags["amenity"] == "first_aid_school") {
      return "First aid school";
    }

    else if (tags["amenity"] == "kindergarten") {
      return "Preschool";
    }

    else if (tags["amenity"] == "language_school") {
      return "Language school";
    }

    else if (tags["amenity"] == "library") {
      return "Library";
    }

    else if (tags["amenity"] == "surf_school") {
      return "Surf school";
    }

    else if (tags["amenity"] == "toy_library") {
      return "Toy library";
    }

    else if (tags["amenity"] == "research_institute") {
      return "Research institute";
    }

    else if (tags["amenity"] == "training") {
      return "Training";
    }

    else if (tags["amenity"] == "music_school") {
      return "Music school";
    }

    else if (tags["amenity"] == "school") {
      return "School";
    }

    else if (tags["amenity"] == "traffic_park") {
      return "Traffic park";
    }

    else if (tags["amenity"] == "university") {
      return "University";
    }

    // Transportation
    else if (tags["amenity"] == "bicycle_parking") {
      return "Bicycle parking";
    }

    else if (tags["amenity"] == "bicycle_repair_station") {
      return "Bicycle repair station";
    }

    else if (tags["amenity"] == "bicycle_rental") {
      return "Bicycle rental";
    }

    else if (tags["amenity"] == "bicycle_wash") {
      return "Bicycle washing station";
    }

    else if (tags["amenity"] == "boat_rental") {
      return "Boat rental";
    }

    else if (tags["amenity"] == "bus_station") {
      return "Bus station";
    }

    else if (tags["amenity"] == "car_rental") {
      return "Car rental";
    }

    else if (tags["amenity"] == "car_sharing") {
      return "Car sharing";
    }

    else if (tags["amenity"] == "car_wash") {
      return "Car wash";
    }

    else if (tags["amenity"] == "compressed_air") {
      return "Tyre pump";
    }

    else if (tags["amenity"] == "vehicle_inspection") {
      return "Vehicle inspection facility";
    }

    else if (tags["amenity"] == "charging_station") {
      return "Charging station";
    }

    else if (tags["amenity"] == "driver_training") {
      return "Driver training course";
    }

    else if (tags["amenity"] == "ferry_terminal") {
      return "Ferry terminal";
    }

    else if (tags["amenity"] == "fuel") {
      return "Fuel station";
    }

    else if (tags["amenity"] == "grit_bin") {
      return "Grit bin";
    }

    else if (tags["amenity"] == "motorcycle_parking") {
      return "Motorcycle parking";
    }

    else if (tags["amenity"] == "parking") {
      return "Parking";
    }

    else if (tags["amenity"] == "parking_entrance") {
      return "Parking entrance";
    }

    else if (tags["amenity"] == "parking_space") {
      return "Parking space";
    }

    else if (tags["amenity"] == "taxi") {
      return "Taxi stand";
    }

    else if (tags["amenity"] == "weighbridge") {
      return "Weighbridge";
    }

    // Financial
    else if (tags["amenity"] == "atm") {
      return "ATM";
    }

    else if (tags["amenity"] == "payment_terminal") {
      return "Self-service payment terminal";
    }

    else if (tags["amenity"] == "bank") {
      return "Bank";
    }

    else if (tags["amenity"] == "bureau_de_change") {
      return "Currency exchange";
    }

    else if (tags["amenity"] == "money_transfer") {
      return "Money transfer";
    }

    else if (tags["amenity"] == "payment_centre") {
      return "Payment centre";
    }

    // Healthcare
    else if (tags["amenity"] == "baby_hatch") {
      return "Baby hatch";
    }

    else if (tags["amenity"] == "clinic") {
      return "Clinic";
    }

    else if (tags["amenity"] == "dentist") {
      return "Dentist";
    }

    else if (tags["amenity"] == "cafe") {
      return "Café";
    }
  }
} 