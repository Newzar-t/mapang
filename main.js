document.addEventListener("DOMContentLoaded", () => {
  let navBar = document.querySelector(".navigation-bar");

  navBar.innerHTML = `
<a id="#map-viewport" class="navigate-link active-link map-ancre" href="#map-viewport"> <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/boussolePicto.svg" />
 </button>
 </a>

 <a id="#calendar-viewport" class="navigate-link calendar-ancre" href="#calendar-viewport"> <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/calendarPicto.svg" />
 </button>
 </a>

 <a id="#chat-viewport" class="navigate-link chat-ancre" href="#chat-viewport">
 <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/messagePicto.svg" />
 </button>
 </a>

 <a id="#user-viewport" class="navigate-link user-ancre" href="#user-viewport">
 <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/userPicto.svg" />
 </button>
 </a>
 `;

  let navButtons = document.querySelectorAll(".navigate-link");

  navButtons.forEach((navBtn) => {
    navBtn.addEventListener("click", () => {
      if (navBtn.classList.contains("active-link")) {
        return;
      } else {
        navButtons.forEach((btn) => {
          btn.classList.remove("active-link");
        });
        navBtn.classList.add("active-link");
      }
    });

    let mapBoxView = document.querySelector("#map-viewport");

    let mapView = document.querySelector(".map-ancre");
    let calendarView = document.querySelector(".calendar-ancre");
    let chatView = document.querySelector(".chat-ancre");
    let userView = document.querySelector(".user-ancre");

    mapView.addEventListener("click", () => {
        mapBoxView.style.display = "flex"
    })

    calendarView.addEventListener("click", () => {
      mapBoxView.style.display = "none";
    });

    chatView.addEventListener("click", () => {
      mapBoxView.style.display = "none";
    });

    userView.addEventListener("click", () => {
      mapBoxView.style.display = "none";
    });

  });
});
