function lookupFeature(tags) {
  switch (tags.advertising) {
    case "billboard":
      return "Billboard";
    
    case "board":
      return "Notice board";
    
    case "column":
      return "Advertising column";
    
    case "poster_box":
      return "Poster box";
    
    case "totem":
      return "Advertising totem";
  }

  switch (tags.aerialway) {
    case "cable_car":
      return "Cable car";
    
    case "chair_lift":
      return "Chair lift";
    
    case "drag_lift":
      return "Drag lift";
    
    case "gondola":
      return "Gondola lift";
    
    case "goods":
      return "Goods aerialway";

    case "j-bar":
      return "J-bar lift";

    case "magic_carpet":
      return "Magic carpet lift";
    
    case "mixed_lift":
      return "Mixed lift";

    case "platter":
      return "Platter lift";

    case "pylon":
      return "Aerialway pylon";

    case "rope_tow":
      return "Rope tow lift";

    case "t-bar":
      return "T-bar lift";

    case "zip_line":
        return "Zipline";
  }

  switch (tags.aeroway) {
    case "aerodrome":
      return "Aerodrome";
    
    case "apron":
      return "Airport apron";
    
    case "gate":
      return "Airport gate";
    
    case "hangar":
      return "Hangar";
    
    case "helipad":
      return "Helipad";

    case "Holding position":
      return "Aircraft holding position";

    case "jet_bridge":
      return "Jet bridge";
    
    case "parking_position":
      return "Aircraft parking position";

    case "runway":
      return "Runway";

    case "spaceport":
      return "Spaceport";

    case "taxiway":
      return "Taxiway";

    case "terminal":
      return "Airport terminal";

    case "windsock":
        return "Windsock";
  }

  switch (tags.allotments) {
    case "plot":
      return "Allotment plot";
  }

  switch (tags.amenity) {
    case "bar":
      if (tags.lgbtq == "primary") return "LGBTQ+ bar";
      break;
  
    case "bicycle_parking":
      if (tags.bicycle_parking == "building") return "Bicycle parking garage";
      if (tags.bicycle_parking == "lockers") return "Bicycle lockers";
      if (tags.bicycle_parking == "shed") return "Bicycle shed";
      break;
  
    case "cafe":
      if (tags.cuisine == "bubble_tea") return "Bubble tea café";
      if (tags.cuisine == "coffee_shop") return "Coffee shop";
      break;
  
    case "clinic":
      if (tags.healthcare == "clinic" && tags["healthcare:speciality"] == "abortion") return "Abortion clinic";
      if (tags.healthcare == "dialysis" && tags["healthcare:speciality"] == "nephrology") return "Dialysis centre";
      if (tags.healthcare == "clinic" && tags["healthcare:speciality"] == "fertility") return "Fertility clinic";
      break;
  
    case "clock":
      if (tags.display == "sundial") return "Sundial";
      break;
  
    case "community_centre":
      if (tags.community_centre == "club_home") return "Clubhouse";
      if (tags.community_centre == "community_hall") return "Community hall";
      if (tags.community_centre == "cultural_centre") return "Cultural centre";
      if (tags.community_centre == "family_centre") return "Family centre";
      if (tags.lgbtq == "primary") return "LGBTQ+ community centre";
      if (tags.community_centre == "parish_hall") return "Parish hall";
      if (tags.community_centre == "village_hall") return "Village hall";
      if (tags.community_centre == "youth_centre") return "Youth centre";
      break;
  
    case "doctors":
      switch (tags["healthcare:speciality"]) {
        case "allergology": return "Allergologist";
        case "cardiology": return "Cardiologist";
        case "child_psychiatry": return "Child and adolescent psychiatrist";
        case "dermatology": return "Dermatologist";
        case "gastroenterology": return "Gastroenterologist";
        case "general": return "General practitioner";
        case "gynaecology": return "Gynecologist";
        case "haematology": return "Haematologist";
        case "internal": return "Internist";
        case "nephrology": return "Nephrologist";
        case "neurology": return "Neurologist";
        case "neurosurgery": return "Neurosurgeon";
        case "oncology": return "Oncologist";
        case "ophthalmology": return "Ophthalmologist";
        case "orthopaedics": return "Orthopedic Surgeon";
        case "otolaryngology": return "Otolaryngologist";
        case "paediatrics": return "Paediatrician";
        case "pathology": return "Pathologist";
        case "plastic_surgery": return "Plastic surgeon";
        case "podiatry": return "Podiatrist";
        case "proctology": return "Colorectal Surgeon";
        case "psychiatry": return "Psychiatrist";
        case "pulmonology": return "Pulmonologist";
        case "radiology": return "Radiologist";
        case "rheumatology": return "Rheumatologist";
        case "surgery": return "General surgeon";
        case "trauma": return "Trauma surgeon";
        case "urology": return "Urologist";
        default: break;
      }
      break;
  
    case "fast_food":
      if (tags.cuisine == "ice_cream") return "Ice cream fast food";
      if (tags.cuisine == "bagel") return "Bagel fast food";
      if (tags.cuisine == "burger") return "Burger fast food";
      if (tags.cuisine == "cafeteria") return "Cafeteria";
      if (tags.cuisine == "chicken") return "Chicken fast food";
      if (tags.cuisine == "chinese") return "Chinese fast food";
      if (tags.cuisine == "donut") return "Donut fast food";
      if (tags.cuisine == "fish_and_chips") return "Fish and chip shop";
      if (tags.cuisine == "hot_dog") return "Hot dog fast food";
      if (tags.cuisine == "juice") return "Juice fast food";
      if (tags.cuisine == "kebab") return "Kebab fast food";
      if (tags.cuisine == "mexican") return "Mexican fast food";
      if (tags.cuisine == "pizza") return "Pizza fast food";
      if (tags.cuisine == "sandwich") return "Sandwich fast food";
      if (tags.cuisine == "wings") return "Chicken wings fast food";
      break;
  
    case "ice_cream":
      if (tags.cuisine == "frozen_yogurt") return "Frozen yoghurt shop";
      break;
  
    case "nightclub":
      if (tags.lgbtq == "primary") return "LGBTQ+ nightclub";
      break;
  
    case "parking":
      if (tags.parking == "multi-storey") return "Multi-level parking garage";
      if (tags.park_ride == "yes") return "Park & ride";
      if (tags.parking == "street_side") return "Street-side parking";
      if (tags.parking == "underground") return "Underground parking";
      break;
  
    case "parking_space":
      if (tags.parking_space == "disabled") return "Accessible parking space";
      break;
  
    case "place_of_worship":
      if (tags.religion == "christian") {
        if (tags.denomination == "jehovahs_witness") return "Kingdom Hall of Jehovah's Witnesses";
        if (tags.denomination == "la_luz_del_mundo") return "La Luz del Mundo Temple";
        if (tags.denomination == "quaker") return "Quaker Friends Meeting House";
        if (!tags.religion) return "Christian church";
      }

      if (tags.religion == "buddhist") return "Buddhist temple";
      if (tags.religion == "hindu") return "Hindu temple";
      if (tags.religion == "jewish") return "Jewish synagogue";
      if (tags.religion == "muslim") return "Muslim mosque";
      if (tags.religion == "shinto") return "Shinto shrine";
      if (tags.religion == "sikh") return "Sikh temple";
      if (tags.religion == "taoist") return "Taoist temple";
      break;

    case "pub":
      if (tags.theme == "irish") return "Irish pub";
      if (tags.lgbtq == "primary") return "LGBTQ+ pub";
      if (tags.microbrewery == "yes") return "Brewpub";
      break;
    
    case "recycling":
      if (tags.recycling_type == "container" && tags["recycling:electrical_items"] == "yes") return "E-waste container";
      if (tags.recycling_type == "container" && tags["recycling:green_waste"] == "yes") return "Green waste container";
      break;
    
    case "restaurant":
      if (tags.cuisine == "american") return "American restaurant";
      if (tags.cuisine == "asian") return "Asian restaurant";
      if (tags.cuisine == "barbecue") return "Barbecue restaurant";
      if (tags.cuisine == "chinese") return "Chinese restaurant";
      if (tags.cuisine == "french") return "French restaurant";
      if (tags.cuisine == "georgian") return "Georgian restaurant";
      if (tags.cuisine == "german") return "German restaurant";
      if (tags.cuisine == "greek") return "Greek restaurant";
      if (tags.cuisine == "indian") return "Indian restaurant";
      if (tags.cuisine == "italian") return "Italian restaurant";
      if (tags.cuisine == "japanese") return "Japanese restaurant";
      if (tags.cuisine == "korean") return "Korean restaurant";
      if (tags.cuisine == "mexican") return "Mexican restaurant";
      if (tags.cuisine == "noodle") return "Noodle restaurant";
      if (tags.cuisine == "pizza") return "Pizza restaurant";
      if (tags.cuisine == "ramen") return "Ramen restaurant";
      if (tags.cuisine == "seafood") return "Seafood restaurant";
      if (tags.cuisine == "spanish") return "Spanish restaurant";
      if (tags.cuisine == "steakhouse") return "Steakhouse";
      if (tags.cuisine == "sushi") return "Sushi restaurant";
      if (tags.cuisine == "thai") return "Thai restaurant";
      if (tags.cuisine == "turkish") return "Turkish restaurant";
      if (tags.cuisine == "ukrainian") return "Ukrainian restaurant";
      if (tags.cuisine == "vietnamese") return "Vietnamese restaurant";
      break;
    
    case "shelter":
      if (tags.shelter_type == "gazebo") return "Gazebo";
      if (tags.shelter_type == "lean_to") return "Lean-to";
      if (tags.shelter_type == "picnic_shelter") return "Picnic shelter";
      if (tags.shelter_type == "public_transport") return "Transit shelter";
      break;
    
    case "social_facility":
      if (tags.social_facility == "ambulatory_care") return "Ambulatory care";
      if (tags.social_facility == "assisted_living") return "Senior assisted living facility";
      if (tags.social_facility == "food_bank") return "Food bank";
      if (tags.social_facility == "group_home" && tags["social_facility:for"] == "senior") return "Elderly group home";
      if (tags.social_facility == "shelter" && tags["social_facility:for"] == "homeless") return "Homeless shelter";
      if (tags.social_facility == "nursing_home" && tags["social_facility:for"] == "senior") return "Nursing home";
      break;
    
    case "studio":
      if (tags.studio == "audio") return "Recoring studio";
      if (tags.studio == "radio") return "Radio station";
      if (tags.studio == "television") return "Television station";
      if (tags.studio == "video") return "Film studio";
      break;

    case "taxi":
      if (tags.taxi_vehicle == "auto_rickshaw") return "Auto rickshaw stand";
      if (tags.taxi_vehicle == "cycle_rickshaw") return "Cycle rickshaw stand";
      if (tags.taxi_vehicle == "motorcycle") return "Motorcycle taxi stand";
      break;
    
    case "theatre":
      if (tags["theatre:type"] == "amphi") return "Amphitheatre";
      break;
    
    case "toilets":
      if (tags["toilets:disposal"] == "flush") return "Flush toilets";
      if (tags["toilets:disposal"] == "pitlatrine") return "Pit latrine";
      if (tags.portable == "yes") return "Portable toilet";
      break;
    
    case "townhall":
      if (tags["townhall:type"] == "barangay") return "Barangay hall";
      if (tags["townhall:type"] == "city") return "City hall";
      break;
    
    case "vending_machine":
      if (tags.vending == "food" && tags.food == "snacks") return "Snack vending machine";
      if (tags.vending == "bicycle_tube") return "Bicycle inner tube vending machine";
      if (tags.vending == "bottle_return") return "Bottle return machine";
      if (tags.vending == "bread") return "Bread vending machine";
      if (tags.vending == "cigarettes") return "Cigarette vending machine";
      if (tags.vending == "coffee") return "Coffee vending machine";
      if (tags.vending == "condoms") return "Condom vending machine";
      if (tags.vending == "drinks") return "Drink vending machine";
      if (tags.vending == "eggs") return "Egg vending machine";
      if (tags.vending == "electronics") return "Electronics vending machine";
      if (tags.vending == "elongated_coin") return "Flat coin vending machine";
      if (tags.vending == "excrement_bags") return "Excrement bag dispenser";
      if (tags.vending == "feminine_hygiene") return "Feminine hygiene vending machine";
      if (tags.vending == "food") return "Food vending machine";
      if (tags.vending == "ice_cream") return "Ice cream vending machine";
      if (tags.vending == "ice_cubes") return "Ice vending machine";
      if (tags.vending == "newspapers") return "Newspaper vending machine";
      if (tags.vending == "parking_tickets") return "Parking ticket vending machine";
      if (tags.vending == "pizza") return "Pizza vending machine";
      if (tags.vending == "public_transport_tickets") return "Transit ticket vending machine";
      if (tags.vending == "stamps") return "Postage vending machine";
      if (tags.vending == "sweets") return "Confectionary vending machine";
      break;
  }  
}