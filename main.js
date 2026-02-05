
document.addEventListener("DOMContentLoaded", () => {

let navBar = document.querySelector(".navigation-bar");

navBar.innerHTML = `
<a id="#map-viewport" class="navigate-link active-link" href="#map-viewport"> <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/boussolePicto.svg" />
 </button>
 </a>

 <a id="#calendar-viewport" class="navigate-link" href="#calendar-viewport"> <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/calendarPicto.svg" />
 </button>
 </a>

 <a id="#chat-viewport" class="navigate-link" href="#chat-viewport">
 <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/messagePicto.svg" />
 </button>
 </a>

 <a id="#user-viewport" class="navigate-link" href="#user-viewport">
 <button class="navigate-btn">
 <img class="nav-picto" src="public/Pictogrammes/userPicto.svg" />
 </button>
 </a>
 `

 let navButtons = document.querySelectorAll(".navigate-link");

 navButtons.forEach((navBtn) => {

    navBtn.addEventListener("click", () => {
        if(navBtn.classList.contains("active-link")){
            let actualDisplay = window.location;

            return;
        }
        else{
            
            navButtons.forEach((btn) => {
                btn.classList.remove("active-link");
            })
        navBtn.classList.add("active-link")
        }
    })
    
 })

 
})

