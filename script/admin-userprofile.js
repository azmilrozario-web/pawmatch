  // 2. Reference the <div> element of id: productModal and its elements to update the modal's data
  const appModal = document.getElementById("appModal");
  const appModalTitle = document.getElementById("appModalTitle");
  const appModalEmail = document.getElementById("appModalEmail");
  const appModalHousingType = document.getElementById("appModalHousingType");
  const appModalAddress = document.getElementById("appModalAddress");
  const appModalPhone = document.getElementById("appModalPhone");
  const appModalExperience = document.getElementById("appModalExperience");
  
  const spinnerTitle = new Spinner(appModalTitle);
  const spinnerEmail = new Spinner(appModalEmail);
  const spinnerHousingType = new Spinner(appModalHousingType);
  const spinnerAddress = new Spinner(appModalAddress);
  const spinnerPhone = new Spinner(appModalPhone);
  const spinnerExperience = new Spinner(appModalExperience);

  // Clear everything IMMEDIATELY before the modal even finishes sliding in
  appModal.addEventListener("show.bs.modal", () => {
    appModalTitle.textContent = "";
    appModalEmail.textContent = "";
    appModalHousingType.textContent = "";
    appModalAddress.textContent = "";
    appModalPhone.textContent = "";
    appModalExperience.textContent = "";
    if (spinnerTitle.spinner !== null)
      spinnerTitle.displaySpinner(false);
    if (spinnerEmail.spinner !== null)
      spinnerEmail.displaySpinner(false);
    if (spinnerHousingType.spinner !== null)
      spinnerHousingType.displaySpinner(false);
    if (spinnerAddress.spinner !== null)
      spinnerAddress.displaySpinner(false);
    if (spinnerPhone.spinner !== null)
      spinnerPhone.displaySpinner(false);
    if (spinnerExperience.spinner !== null)
      spinnerExperience.displaySpinner(false);
  });

  // Show everything after the modal finished sliding in
  appModal.addEventListener("shown.bs.modal", async (event) => {

    const link = event.relatedTarget;
    const user = link.dataset.userInfo;

    spinnerTitle.createSpinner();
    spinnerEmail.createSpinner();
    spinnerHousingType.createSpinner();
    spinnerAddress.createSpinner();
    spinnerPhone.createSpinner();
    spinnerExperience.createSpinner();
    spinnerTitle.displaySpinner(true);
    spinnerEmail.displaySpinner(true);
    spinnerHousingType.displaySpinner(true);
    spinnerAddress.displaySpinner(true);
    spinnerPhone.displaySpinner(true);
    spinnerExperience.displaySpinner(true);

    // !! IMPORTANT: To remove this delay once the data is fetched from the server
    const sleep = (delay) =>
      new Promise((resolve) => setTimeout(resolve, delay));
    await sleep(1000);

    if (user) {
        const parsedUser = JSON.parse(user);
        const xp = (parsedUser.experienceLevel === "ONE_TO_THREE") ? "One to three years" : 
                    (parsedUser.experienceLevel === "MORE_THAN_THREE") ? "More than three years" : "No experience";

        appModalTitle.textContent = `Applicant: ${parsedUser.firstName} ${parsedUser.lastName}`;
        appModalEmail.textContent = `${parsedUser.email}`;
        appModalHousingType.textContent = `${parsedUser.housingType.charAt(0).toUpperCase() + parsedUser.housingType.slice(1).toLowerCase()}`;;
        appModalAddress.textContent = `${parsedUser.address}`;
        appModalPhone.textContent = `${parsedUser.phone}`;
        appModalExperience.textContent = xp;
    }
  });


  