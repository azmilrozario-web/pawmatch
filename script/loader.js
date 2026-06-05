let spinner = null;

// EventListener to instantiate the navController
document.addEventListener("DOMContentLoaded", async (event) => {
    /*
     * *********************************************************************
     * Instantiate a spinner, currently used in login.html
     * *********************************************************************
    */
    spinner = new Spinner();
    
    /*
    * *********************************************************************
    * Display or hider userProfile link.
    * *********************************************************************
    */

    const token = isAuthenticated();   
    
    const profileContainer = document.getElementById("profileContainer");
    const dropdownMenu = document.querySelectorAll(".dropdown-menu .dropdown-item");
    const dropdownMenuDivider = document.querySelector(".dropdown-menu .dropdown-divider");

    if(!token){
        // User is not logged in
        dropdownMenu[0].classList.remove("d-none");     // show Login
        dropdownMenu[1].classList.remove("d-none");     // show Signup
        dropdownMenu[2].classList.add("d-none");        // hide Profile
        dropdownMenu[3].classList.add("d-none");        // hide Signout
        dropdownMenuDivider.classList.add('d-none');    // hide the divider
        profileContainer.textContent = "";
        profileContainer.classList.add("d-none");       // hider user profile nameX
    }
    else{
        // User is logged in
        dropdownMenu[0].classList.add("d-none");        // hide Login
        dropdownMenu[1].classList.add("d-none");        // hide Signup
        dropdownMenu[2].classList.remove("d-none");     // show Profile
        dropdownMenu[3].classList.remove("d-none");     // show Signout
        dropdownMenuDivider.classList.remove('d-none'); // show the divider
        
        const user = decodeUser(token);
        profileContainer.textContent = user.email;
        profileContainer.classList.remove("d-none");   // hide user profile nameX
        
       
        // set the logout function
        dropdownMenu[3].addEventListener("click", () => {   // enable signout button so sign out
          logout();
        })
    }
});