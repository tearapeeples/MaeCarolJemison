function toggleDarkMode() {
    var bodyElement = document.getElementById("mainBackground")
    var darkModeBtnElement = document.getElementById("darkModeButton")
    console.log(darkModeBtnElement);
    // if it's in dark mode, change it to light mode
    // what does dark mode look like here?
    // dark mode looks like a black background and the button will say Change to Light Mode
    if (bodyElement.style.backgroundImage == 'url("https://www.nps.gov/subjects/nightskies/images/GLOBELM6.jpg?maxwidth=1200&maxheight=1200&autorotate=false")') {
        bodyElement.style.backgroundImage = 'url("https://w0.peakpx.com/wallpaper/750/787/HD-wallpaper-glittering-white-and-blue-stars-with-dirty-brown-clouds-galaxy.jpg")'
        darkModeBtnElement.innerHTML="Change to Dark Mode"
    }
   // if it's in light mode, change it to dark mode
    // what does light mode look like here?
    // light mode looks like a tan background and the button will say Change to Dark Mode
     else {
        bodyElement.style.backgroundImage = 'url("https://www.nps.gov/subjects/nightskies/images/GLOBELM6.jpg?maxwidth=1200&maxheight=1200&autorotate=false")'
        darkModeBtnElement.innerHTML="Change to Light Mode"
    }
}

 
