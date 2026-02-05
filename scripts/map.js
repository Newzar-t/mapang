document.addEventListener("DOMContentLoaded", () => {
  let mapViewport = document.querySelector("#map-viewport");

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYW5hZWxsZTEyMyIsImEiOiJjbWw4MndidGEwMjY1M2VxczlrNHRnNGtkIn0.tnkWnrql_viOmVKbEdomvg";

  var monument = [-77.0353, 38.8895];
  var restaurant = [-77.0321, 38.8975];
  var walking = [-77.0445, 38.8909];
  var cafeDolphin = [-77.034368, 38.9000471];
  var vietnamVeteransMemorial = [-77.0477132, 38.8912933];
  var arenaStage = [-77.0205975, 38.8775368];
  var nationalMuseumAsianArt = [-77.0264462, 38.887961];

  const map = new mapboxgl.Map({
    container: "boxMap",
    center: monument,
    zoom: 12,
    style: "mapbox://styles/anaelle123/cml83d51g004q01s9gy9f95ik",
  });

  let pinElement = document.createElement("div");
  pinElement.id = "markerMuseum";

  let pinRestaurant = document.createElement("div");
  pinRestaurant.id = "markerResto";

  let pinHiking = document.createElement("div");
  pinHiking.id = "markerHiking";

  let pinCoffee = document.createElement("div");
  pinCoffee.id = "markerCoffee";

  let pinMemorial = document.createElement("div");
  pinMemorial.id = "markerMemorial";

  let pinStage = document.createElement("div");
  pinStage.id = "markerStage";

  let pinMuseum = document.createElement("div");
  pinMuseum.id = "markerMuseeAsian";

  let isEventOnScreen = false;

  pinElement.addEventListener("click", () => {
    let popups = document.querySelectorAll(".activity-container");
    if (isEventOnScreen == false) {
      popups.forEach((pop) => {
        pop.style.display = "none";
      });
      document.querySelector("#Pedro").style.display = "flex";
      isEventOnScreen = true;
    } else {
      isEventOnScreen = false;
    }
  });

  pinRestaurant.addEventListener("click", () => {
    let popups = document.querySelectorAll(".activity-container");

    if (isEventOnScreen == false) {
      popups.forEach((pop) => {
        pop.style.display = "none";
      });

      document.querySelector("#Yerin").style.display = "flex";

      isEventOnScreen = true;
    } else {
      isEventOnScreen = false;
    }
  });

  pinHiking.addEventListener("click", () => {
    let popups = document.querySelectorAll(".activity-container");
    if (isEventOnScreen == false) {
      popups.forEach((pop) => {
        pop.style.display = "none";
      });

      document.querySelector("#Tanaka").style.display = "flex";

      isEventOnScreen = true;
    } else {
      isEventOnScreen = false;
    }
  });

  new mapboxgl.Marker(pinElement).setLngLat(monument).addTo(map);
  new mapboxgl.Marker(pinRestaurant).setLngLat(restaurant).addTo(map);
  new mapboxgl.Marker(pinHiking).setLngLat(walking).addTo(map);

  new mapboxgl.Marker(pinCoffee).setLngLat(cafeDolphin).addTo(map);

    new mapboxgl.Marker(pinMemorial).setLngLat(vietnamVeteransMemorial).addTo(map);

        new mapboxgl.Marker(pinStage)
          .setLngLat(arenaStage)
          .addTo(map);

              new mapboxgl.Marker(pinMuseum)
                .setLngLat(nationalMuseumAsianArt)
                .addTo(map);

  activityDisplay(
    mapViewport,
    "public/pictures/restaurantImage.jpg",
    "Repas gastronomique",
    "12h-14h",
    "Yerin",
    "activity-food",
  );
  activityDisplay(
    mapViewport,
    "public/pictures/hikingImage.jpg",
    "Balade et gaufres !",
    "16h-19h",
    "Tanaka",
    "activity-hiking",
  );
  activityDisplay(
    mapViewport,
    "public/pictures/washingtonView.webp",
    "Visite du Washington Center",
    "15h-17h",
    "Pedro",
    "activity-museum",
  );

  activityDisplay(
    mapViewport,
    "public/pictures/bakeryPic.webp",
    "Café et blabla",
    "17h-19h",
    "Michael",
    "activity-coffee",
  );

  activityDisplay(
    mapViewport,
    "public/pictures/arenaStage.jpg",
    "Orchestre de Mozart",
    "20h - 23h",
    "Mohammed",
    "activity-stage",
  );

  activityDisplay(
    mapViewport,
    "public/pictures/museumasianart.jpeg",
    "Musée des Arts asiatiques",
    "10h-12h",
    "Filipé",
    "activity-asianart",
  );

    activityDisplay(
      mapViewport,
      "public/pictures/vvmemorial.jpg",
      "Mémorial des vétérans du Vietnam",
      "13h-15h",
      "Charlie",
      "activity-memorial",
    );

  let closingBtns = document.querySelectorAll(".closingBtn");

  closingBtns.forEach((btn) => {
    let popups = document.querySelectorAll(".activity-container");

    btn.addEventListener("click", () => {
      popups.forEach((pop) => {
        pop.style.display = "none";
      });
    });
  });

  //////// ---------------------------------------------------------------------------- ////

  /* document.querySelector("#activity-food").addEventListener("click", () => {
    let activityAdded = false;

    if (activityAdded == false) {
      newEvent(
        "Repas gastronomique",
        "public/pictures/restaurantImage.jpg",
        "12h-14h",
        "Yerin",
        "activity-food",
      );
      activityAdded = true;
    } else {
      return;
    }
  });

  document.querySelector("#activity-hiking").addEventListener("click", () => {
    let activityAdded = false;

    if (activityAdded == false) {
      newEvent(
        "Balade et gaufres !",
        "public/pictures/hikingImage.jpg",
        "16h-19h",
        "Tanaka",
        "activity-hiking",
      );
      activityAdded = true;
    } else {
      return;
    }
  });

  document.querySelector("#activity-museum").addEventListener("click", () => {
    let activityAdded = false;

    if (activityAdded == false) {
      newEvent(
        "Visite du Washington Center",
        "public/pictures/washingtonView.webp",
        "15h-17h",
        "Pedro",
        "activity-museum",
      );
      activityAdded = true;
    } else {
      return;
    }
  }); */
});

function activityDisplay(
  mapViewport,
  urlImage,
  activityTitle,
  activityHour,
  pseudo,
  eventType,
) {
  let newActivity = document.createElement("div");

  newActivity.className = "activity-container";
  newActivity.id = `${pseudo}`;

  newActivity.innerHTML = `


     <img class="activity-event-image" src="${urlImage}" />
     <button class="closingBtn">
     <svg width="18px" height="18px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#F5F0E4"> <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
     </button>
     <div class="activity-text">
     <h2 class="activity-title" >${activityTitle}</h2>
     <h3>${activityHour}</h3>

     <p>Organisé par ${pseudo}</p>
     <span class="activity-footer">
     <button id="${eventType}" class="basic-button activity-button">Rejoindre <img class="btn-cross-picto" src="public/Pictogrammes/addCross.svg" /></button>
     <img class="activity-group-preview" src="public/pictures/peopleGroupPreview.png" />
     </span>
     </div>


    `;

  newActivity.style.display = "none";
  mapViewport.appendChild(newActivity);
}
/* 
function newEvent(title, image, hour, pseudo) {
  let eventContainer = document.querySelector(".eventsComing");

  let event = document.createElement("div");
  event.classList.add("event-preview");

  event.innerHTML = `
       <img class="event-image-calendar" src="${image}" />
       <span>
       <h2>${title}</h2>
       <h3>${hour}</h3>
       <p>${pseudo}</p>
    </span>
    <img src="public/pictures/peopleGroupPreview.png" />
    <button>Voir sur la carte</button>
    `;

  eventContainer.appendChild(event);
}
 */
