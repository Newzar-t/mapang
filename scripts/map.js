 document.addEventListener("DOMContentLoaded", () => {


     mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hZWxsZTEyMyIsImEiOiJjbWw4MndidGEwMjY1M2VxczlrNHRnNGtkIn0.tnkWnrql_viOmVKbEdomvg';
      
     var monument = [-77.0353, 38.8895];
     
     const map = new mapboxgl.Map({
        container: 'boxMap' ,
        center: monument,
        zoom:14,
        style:"mapbox://styles/anaelle123/cml83d51g004q01s9gy9f95ik"
    });

    var popup = new AnimatedPopup(
        {
            offset : 25,
            openingAnimation : {
                duration :1000,
                easing : "easeOutElastic",
                transform : "scale",
            },
            closingAnimation : {
                duration : 300,
                easing: "easeinBack",
                transform : "scale"
            }
        }
    ).setText("Visite du washington center");

    let pinElement = document.createElement("div");
    pinElement.id = "marker";

    let isEventOnScreen = false

    pinElement.addEventListener("click", () => {
        if(isEventOnScreen == false){
      activityDisplay();
      isEventOnScreen = true;
        }
        else{
            console.log("activity on screen !")
        }
        
    })

    new mapboxgl.Marker(pinElement).setLngLat(monument).setPopup(popup).addTo(map);

 })

 
    function activityDisplay(mapPin) {
      let newActivity = document.createElement("div");

      newActivity.className = "activity-container";

      newActivity.innerHTML = `
    <div class="activity-event">

     <img class="activity-event-image" src="public/pictures/washingtonView.webp" />
     <div class="activity-text">
     <h2>Visite et promenade</h2>
     <h3>14h-17h</h3>

     <p>Organisé par Monica</p>
     <span class="activity-footer">
     <button class="basic-button activity-button">Rejoindre <img class="btn-cross-picto" src="public/Pictogrammes/addCross.svg" /></button>
     <img class="activity-group-preview" src="public/pictures/peopleGroupPreview.png" />
     </span>
     </div>
     </div>

    `;

      document.body.appendChild(newActivity);
    }

 

