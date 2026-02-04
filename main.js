
document.addEventListener("DOMContentLoaded", () => {
 let navBar = document.querySelector(".navigation-bar");

navBar.innerHTML = `
<a id="map-button" class="navigate-link" href="#"> <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/boussolePicto.svg" />
 </button>
 </a>

 <a id="calendar-button" class="navigate-link" href="#"> <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/calendarPicto.svg" />
 </button>
 </a>

 <a id="chat-button" class="navigate-link" href="#">
 <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/messagePicto.svg" />
 </button>
 </a>

 <a id="user-button" class="navigate-link" href="#">
 <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/userPicto.svg" />
 </button>
 </a>
 `
})
