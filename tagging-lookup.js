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

    else if (tags["amenity"] == "doctors") {
      return "Doctor";
    }

    else if (tags["amenity"] == "hospital") {
      return "Hospital";
    }

    else if (tags["amenity"] == "nursing_home") {
      return "Nursing home";
    }

    else if (tags["amenity"] == "pharmacy") {
      return "Pharmacy";
    }

    else if (tags["amenity"] == "social_facility") {
      return "Social facility";
    }

    else if (tags["amenity"] == "veterinary") {
      return "Veterinary";
    }

    // Entertainment, Arts & Culture
    else if (tags["amenity"] == "arts_centre") {
      return "Arts centre";
    }

    else if (tags["amenity"] == "brothel") {
      return "Brothel";
    }

    else if (tags["amenity"] == "casino") {
      return "Casino";
    }

    else if (tags["amenity"] == "cinema") {
      return "Cinema";
    }

    else if (tags["amenity"] == "community_centre") {
      return "Community centre";
    }

    else if (tags["amenity"] == "conference_centre") {
      return "Conference centre";
    }

    else if (tags["amenity"] == "events_venue") {
      return "Events venue";
    }

    else if (tags["amenity"] == "exhibition_centre") {
      return "Exihibition centre";
    }

    else if (tags["amenity"] == "fountain") {
      return "Fountain";
    }

    else if (tags["amenity"] == "gambling") {
      return "Gambling centre";
    }

    else if (tags["amenity"] == "love_hotel") {
      return "Love hotel";
    }

    else if (tags["amenity"] == "music_venue") {
      return "Music venue";
    }

    else if (tags["amenity"] == "nightclub") {
      return "Nightclub";
    }

    else if (tags["amenity"] == "planetarium") {
      return "Planetarium";
    }

    else if (tags["amenity"] == "public_bookcase") {
      return "Public bookcase";
    }

    else if (tags["amenity"] == "social_centre") {
      return "Community centre";
    }

    else if (tags["amenity"] == "stage") {
      return "Stage";
    }

    else if (tags["amenity"] == "stripclub") {
      return "Strip club";
    }

    else if (tags["amenity"] == "studio") {
      return "Studio";
    }

    else if (tags["amenity"] == "swingerclub") {
      return "Swinger club";
    }

    else if (tags["amenity"] == "theatre") {
      return "Theatre";
    }

    // Public service
    else if (tags["amenity"] == "courthouse") {
      return "Courthouse";
    }

    else if (tags["amenity"] == "fire_station") {
      return "Fire station";
    }

    else if (tags["amenity"] == "police") {
      return "Police station";
    }

    else if (tags["amenity"] == "post_box") {
      return "Post box";
    }

    else if (tags["amenity"] == "post_depot") {
      return "Post depot";
    }

    else if (tags["amenity"] == "post_office") {
      return "Post office";
    }

    else if (tags["amenity"] == "prison") {
      return "Prison";
    }

    else if (tags["amenity"] == "ranger_station") {
      return "Ranger station";
    }

    else if (tags["amenity"] == "townhall") {
      return "Town hall";
    }

    // Facilities
    else if (tags["amenity"] == "bbq") {
      return "Barbeque";
    }

    else if (tags["amenity"] == "bench") {
      return "Bench";
    }

    else if (tags["amenity"] == "dog_toilet") {
      return "Dog toilet";
    }

    else if (tags["amenity"] == "dressing_room") {
      return "Changing rooms";
    }

    else if (tags["amenity"] == "drinking_water") {
      return "Drinking water";
    }

    else if (tags["amenity"] == "give_box") {
      return "Give box";
    }

    else if (tags["amenity"] == "lounge") {
      return "Lounge";
    }

    else if (tags["amenity"] == "mailroom") {
      return " Mailroom";
    }

    else if (tags["amenity"] == "parcel_locker") {
      return "Parcel locker";
    }

    else if (tags["amenity"] == "shelter") {
      return "Shelter";
    }

    else if (tags["amenity"] == "shower") {
      return "Shower";
    }

    else if (tags["amenity"] == "Telephone") {
      return "Telephone";
    }

    else if (tags["amenity"] == "toilets") {
      return "Public toilets";
    }

    else if (tags["amenity"] == "water_point") {
      return "Drinking water";
    }

    else if (tags["amenity"] == "watering_place") {
      return "Animal watering place";
    }

    // Waste management
    else if (tags["amenity"] == "sanitary_dump_station") {
      return "Sanitary dump station";
    }

    else if (tags["amenity"] == "recycling") {
      return "Recycling";
    }

    else if (tags["amenity"] == "waste_basket") {
      return "Rubbish bin";
    }

    else if (tags["amenity"] == "waste_disposal") {
      return "Dumpster";
    }

    else if (tags["amenity"] == "waste_transfer_station") {
      return "Waste transfer station";
    }

    // Others
    else if (tags["amenity"] == "animal_boarding") {
      return "Animal boarding facility";
    }

    else if (tags["amenity"] == "animal_breeding") {
      return "Animal breeding facility";
    }

    else if (tags["amenity"] == "animal_shelter") {
      return "Animal shelter";
    }

    else if (tags["amenity"] == "animal_training") {
      return "Animal training facility";
    }

    else if (tags["amenity"] == "baking_oven") {
      return "Public baking oven";
    }

    else if (tags["amenity"] == "clock") {
      return "Clock";
    }

    else if (tags["amenity"] == "crematorium") {
      return "Crematorium";
    }

    else if (tags["amenity"] == "dive_centre") {
      return "Dive centre";
    }

    else if (tags["amenity"] == "funeral_hall") {
      return "Funeral hall";
    }

    else if (tags["amenity"] == "grave_yard") {
      return "Graveyard";
    }

    else if (tags["amenity"] == "hunting_stand") {
      return "Hunting stand";
    }

    else if (tags["amenity"] == "internet_cafe") {
      return "Internet café";
    }

    else if (tags["amenity"] == "kitchen") {
      return "Public kitchen";
    }

    else if (tags["amenity"] == "kneipp_water_cure") {
      return "Kneipp facility";
    }

    else if (tags["amenity"] == "lounger") {
      return "Lounger";
    }

    else if (tags["amenity"] == "marketplace") {
      return "Marketplace";
    }

    else if (tags["amenity"] == "monastery") {
      return "Monastery";
    }

    else if (tags["amenity"] == "mortuary") {
      return "Mortuary";
    }

    else if (tags["amenity"] == "photo_booth") {
      return "Photo booth";
    }

    else if (tags["amenity"] == "place_of_mourning") {
      return "Place of mourning";
    }

    else if (tags["amenity"] == "place_of_worship") {
      return "Place of worship";
    }

    else if (tags["amenity"] == "public_bath") {
      return "Public bath";
    }

    else if (tags["amenity"] == "public_building") {
      return "Public building";
    }

    else if (tags["amenity"] == "refugee_site") {
      return "Refugee camp";
    }

    else if (tags["amenity"] == "vending_machine") {
      return "Vending machine";
    }
  }

  // Barriers
  else if (tags["barrier"]) {
    // Linear barriers
    if (tags["barrier"] == "cable_barrier") {
      return "Cable barrier";
    }

    else if (tags["barrier"] == "city_wall") {
      return "City wall";
    }

    else if (tags["barrier"] == "ditch") {
      return "Ditch";
    }

    else if (tags["barrier"] == "fence") {
      return "Fence";
    }

    else if (tags["barrier"] == "guard_rail") {
      return "Guard rail";
    }

    else if (tags["barrier"] == "handrail") {
      return "Handrail";
    }

    else if (tags["barrier"] == "hedge") {
      return "Hedge";
    }

    else if (tags["barrier"] == "kerb") {
      return "Kerb";
    }

    else if (tags["barrier"] == "retaining_wall") {
      return "Retaining wall";
    }

    else if (tags["barrier"] == "wall") {
      return "Wall";
    }

    // Access control on highways
    else if (tags["barrier"] == "block") {
      return "Block";
    }

    else if (tags["barrier"] == "bollard") {
      return "Bollard";
    }

    else if (tags["barrier"] == "border-control") {
      return "Border control";
    }

    else if (tags["barrier"] == "bump_gate") {
      return "Bump gate";
    }

    else if (tags["barrier"] == "bus_trap") {
      return "Bus trap";
    }

    else if (tags["barrier"] == "cattle_grid") {
      return "Cattle grid";
    }

    else if (tags["barrier"] == "chain") {
      return "Chain";
    }

    else if (tags["barrier"] == "cycle_barrier") {
      return "Cycle barrier";
    }

    else if (tags["barrier"] == "debris") {
      return "Debris";
    }

    else if (tags["barrier"] == "entrance") {
      return "Entrance";
    }

    else if (tags["barrier"] == "full-height_turnstile") {
      return "Full-height turnstile";
    }

    else if (tags["barrier"] == "gate") {
      return "Gate";
    }

    else if (tags["barrier"] == "hampshire_gate") {
      return "Hampshire gate";
    }

    else if (tags["barrier"] == "height_restrictor") {
      return "Height restrictor";
    }

    else if (tags["barrier"] == "horse_stile") {
      return "Horse stile";
    }

    else if (tags["barrier"] == "jersey_barrier") {
      return "Jersey barrier";
    }

    else if (tags["barrier"] == "kissing_gate") {
      return "Kissing gate";
    }

    else if (tags["barrier"] == "lift_gate") {
      return "Lift gate";
    }

    else if (tags["barrier"] == "log") {
      return "Log";
    }

    else if (tags["barrier"] == "motorcycle_barrier") {
      return "Motorcycle barrier";
    }

    else if (tags["barrier"] == "rope") {
      return "Rope barrier";
    }

    else if (tags["barrier"] == "sally_port") {
      return "Sally port";
    }

    else if (tags["barrier"] == "spikes") {
      return "Spikes";
    }

    else if (tags["barrier"] == "stile") {
      return "Stile";
    }

    else if (tags["barrier"] == "sump_buster") {
      return "Sump buster";
    }

    else if (tags["barrier"] == "swing_gate") {
      return "Swing gate";
    }

    else if (tags["barrier"] == "toll_booth") {
      return "Toll gate";
    }

    else if (tags["barrier"] == "turnstile") {
      return "Turnstile";
    }

    else {
      return "Barrier";
    }
  }

  // Boundaries
  else if (tags["boundary"]) {
    if (tags["boundary"] == "aboriginal_lands") {
      return "Indigenous land boundary";
    }
    
    else if (tags["boundary"] == "administrative") {
      return "Administrative boundary";
    }

    else if (tags["boundary"] == "border_zone") {
      return "Border zone";
    }

    else if (tags["boundary"] == "census") {
      return "Census-designated boundary";
    }

    else if (tags["boundary"] == "forest") {
      return "Forest boundary";
    }

    else if (tags["boundary"] == "forest_compartment") {
      return "Forest boundary compartment";
    }

    else if (tags["boundary"] == "hazard") {
      return "Hazardous boundary";
    }

    else if (tags["boundary"] == "health") {
      return "Healthcare division boundary";
    }

    else if (tags["boundary"] == "historic") {
      return "Historic administrative boundary";
    }

    else if (tags["boundary"] == "local_authority") {
      return "Local administrative boundary";
    }

    else if (tags["boundary"] == "low_emission_zone") {
      return "Low emission zone";
    }

    else if (tags["boundary"] == "maritime") {
      return "Maritime boundary";
    }

    else if (tags["boundary"] == "marker") {
      return "Boundary marker";
    }

    else if (tags["boundary"] == "national_park") {
      return "National park boundary";
    }

    else if (tags["boundary"] == "place") {
      return "Boundary";
    }

    else if (tags["boundary"] == "political") {
      return "Electoral boundary";
    }

    else if (tags["boundary"] == "postal_code") {
      return "Postal boundary";
    }

    else if (tags["boundary"] == "protected_area") {
      return "Protected area boundary";
    }

    else if (tags["boundary"] == "religious_administration") {
      return "Religious administration boundary";
    }

    else if (tags["boundary"] == "special_economic_zone") {
      return "Special economic zone boundary";
    }

    else if (tags["boundary"] == "statistical") {
      return "Statistical boundary";
    }

    else if (tags["boundary"] == "disputed") {
      return "Disputed boundary";
    }

    else if (tags["boundary"] == "timezone") {
      return "Timezone boundary";
    }

    else {
      return "Boundary";
    }
  }

  // Buildings
  else if (tags["building"]) {
    // Accommodation
    if (tags["building"] == "apartments") {
      return "Apartments";
    }

    else if (tags["building"] == "barracks") {
      return "Barracks";
    }

    else if (tags["building"] == "bungalow") {
      return "Bungalow";
    }

    else if (tags["building"] == "cabin") {
      return "Cabin";
    }

    else if (tags["building"] == "detached") {
      return "Detached house";
    }

    else if (tags["building"] == "annexe") {
      return "Annexe";
    }

    else if (tags["building"] == "dormitory") {
      return "Dormitory";
    }

    else if (tags["building"] == "farm") {
      return "Farmhouse";
    }

    else if (tags["building"] == "ger") {
      return "Yurt/ger";
    }

    else if (tags["building"] == "hotel") {
      return "Hotel";
    }

    else if (tags["building"] == "house") {
      return "House";
    }

    else if (tags["building"] == "houseboat") {
      return "Houseboat";
    }

    else if (tags["building"] == "residential") {
      return "Residential building";
    }

    else if (tags["building"] == "semidetached_house") {
      return "Semi-detached house";
    }

    else if (tags["building"] == "static_caravan") {
      return "Static caravan";
    }

    else if (tags["building"] == "stilt_house") {
      return "Stilt house";
    }

    else if (tags["building"] == "terrace") {
      return "Terraced houses";
    }

    else if (tags["building"] == "tree_house") {
      return "Tree house";
    }

    else if (tags["building"] == "trullo") {
      return "Trullo";
    }

    // Commercial
    else if (tags["building"] == "commercial") {
      return "Commercial building";
    }

    else if (tags["building"] == "industrial") {
      return "Industrial building";
    }

    else if (tags["building"] == "kiosk") {
      return "Kiosk";
    }

    else if (tags["building"] == "office") {
      return "Office building";
    }

    else if (tags["building"] == "retail") {
      return "Retail building";
    }

    else if (tags["building"] == "supermarket") {
      return "Supermarket";
    }

    else if (tags["building"] == "warehouse") {
      return "Warehouse";
    }

    // Religious
    else if (tags["building"] == "religious") {
      return "Religious building";
    }

    else if (tags["building"] == "cathedral") {
      return "Cathedral";
    }

    else if (tags["building"] == "chapel") {
      return "Chapel";
    }

    else if (tags["building"] == "church") {
      return "Church";
    }

    else if (tags["building"] == "kingdom_hall") {
      return "Kingdom Hall";
    }

    else if (tags["building"] == "monastery") {
      return "Monastery";
    }

    else if (tags["building"] == "mosque") {
      return "Mosque";
    }

    else if (tags["building"] == "presbytery") {
      return "Presbytery";
    }

    else if (tags["building"] == "shrine") {
      return "Shrine";
    }

    else if (tags["building"] == "synagogue") {
      return "Synagogue";
    }

    else if (tags["building"] == "temple") {
      return "Temple";
    }

    // Civic/amenity
    else if (tags["building"] == "bakehouse") {
      return "Bakehouse";
    }

    else if (tags["building"] == "bridge") {
      return "Bridge";
    }

    else if (tags["building"] == "civic") {
      return "Civic building";
    }

    else if (tags["building"] == "college") {
      return "College building";
    }

    else if (tags["building"] == "fire_station") {
      return "Fire station";
    }

    else if (tags["building"] == "government") {
      return "Government building";
    }

    else if (tags["building"] == "gatehouse") {
      return "Gatehouse";
    }

    else if (tags["building"] == "hospital") {
      return "Hospital building";
    }

    else if (tags["building"] == "kindergarten") {
      return "Preschool building";
    }

    else if (tags["building"] == "museum") {
      return "Museum";
    }

    else if (tags["building"] == "public") {
      return "Public building";
    }

    else if (tags["building"] == "school") {
      return "School building";
    }

    else if (tags["building"] == "toilets") {
      return "Toilet block";
    }

    else if (tags["building"] == "train_station") {
      return "Train station building";
    }

    else if (tags["building"] == "transportation") {
      return "Transportation building";
    }

    else if (tags["building"] == "university") {
      return "University building";
    }    
  }
}