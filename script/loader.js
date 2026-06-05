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
    const profileNameContainer = document.getElementById("profileNameContainer");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");
    
    if(!token){
        // User is not logged in
        profileContainer.classList.add("d-none");
        loginLink.classList.remove("d-none");
        logoutLink.classList.add("d-none");
        
    }
    else{
        // User is logged in
        const user = decodeUser(token);
        profileNameContainer.textContent = user.username;
        loginLink.classList.add("d-none");
        logoutLink.classList.remove("d-none");
       
        // set the logout function
        logoutLink.addEventListener("click", () => {
          logout();
        })

        // set the cursor for the profile to navigate to profile.html
        profileContainer.setAttribute("role", "button");
        profileContainer.addEventListener("click", () => {
            window.location = "profile.html";
        });
    }
});