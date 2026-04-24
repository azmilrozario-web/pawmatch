document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  // 1. Simulated array of Data
  // !! IMPORTANT: eventually this will be replaced with a fetch request (data from database)
  const pets = data;

  // 1.1. Reference the <div> element of id: productList to pupulate the list of products
  const homeListing = document.getElementById("homeListing");

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList.add("col");
    card.append(createCard(pet));
    homeListing.append(card);
  });

  // 2. Reference the <div> element of id: productModal and its elements to update the modal's data
  const appModal = document.getElementById("appModal");
  const appModalTitle = document.getElementById("appModalTitle");
  const appModalImage = document.getElementById("appModalImage");
  const appModalDesc = document.getElementById("appModalDesc");

  const spinnerTitle = new Spinner(appModalTitle);
  const spinnerDesc = new Spinner(appModalDesc);

  // Clear everything IMMEDIATELY before the modal even finishes sliding in
  appModal.addEventListener("show.bs.modal", () => {
    appModalTitle.textContent = "";
    appModalDesc.textContent = "";
    appModalImage.src =
      "https://placehold.co/100x100/CCCCCC/FFFFFF?text=Loading Image...";
    if(spinnerTitle.spinner !== null)
        spinnerTitle.displaySpinner(false);
    if(spinnerDesc.spinner !== null)
        spinnerDesc.displaySpinner(false);
  });

  // Show everything after the modal finished sliding in
  appModal.addEventListener("shown.bs.modal", async () => {
    appModalImage.src =
      "https://placehold.co/100x100/CCCCCC/FFFFFF?text=Loading Image...";
    spinnerTitle.createSpinner();
    spinnerDesc.createSpinner();
    spinnerTitle.displaySpinner(true);
    spinnerDesc.displaySpinner(true);

    // !! IMPORTANT: To remove this delay once the data is fetched from the server
    const sleep = (delay) =>
      new Promise((resolve) => setTimeout(resolve, delay));
    await sleep(1000);

    // !! the product id is along the URL
    const params = new URLSearchParams(window.location.search);

    if (params.has("pet")) {
      const id = params.get("pet");

      // !! IMPORTANT: eventually this will be replaced with a fetch request (data from database)
      const pet = pets.find((item) => item.id == id);

      if (pet) {
        appModalTitle.textContent = pet.name;
        appModalImage.src = pet.imageUrl;
        appModalDesc.textContent = pet.description;
      }
    }
  });

  // eventlistener that listens for "Submit Adoption form"
});

function createCard(item) {
  // 1. Create the card container
  const card = document.createElement("div");
  card.classList.add("card", "h-100", "product-card");

  // 2. Create the Image
  const img = document.createElement("img");
  img.src = item.imageUrl;
  img.classList.add("card-img-top");
  img.alt = item.title;

  // 3. Create the Card Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("d-flex", "card-body", "flex-column");

  // 4. Create the Title
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = item.name;

  // !! 4.1. Create the Subtitle (Age)
  const age = document.createElement("h6");
  age.classList.add("card-subtitle", "mb-2", "text-body-secondary");

  // !! 4.1.1. Create the Age label and text
  const ageLabel = document.createElement("span");
  ageLabel.textContent = "Age: "
  ageLabel.classList.add("fw-bolder");
  const ageText = document.createElement("span");
  ageText.textContent = `${item.age}`;
  age.append(ageLabel, ageText);

  // !! 4.2. Create the Subtitle (Gender)
  const gender = document.createElement("h6");
  gender.classList.add("card-subtitle", "mb-2", "text-body-secondary");
  // gender.textContent = `Gender: ${String(item.gender).toLowerCase()}`;

  /* 
    * Please include the code for Gender similar to item 4.1.1.
  */
  // !! 4.2.1. Create the Gender label and text
   // !! 4.1.1. Create the Age label and text
  const genderLabel = document.createElement("span");
  genderLabel.textContent = "Gender: "
  genderLabel.classList.add("fw-bolder");
  const genderText = document.createElement("span");
  genderText.textContent = `${item.gender.toLowerCase()}`;
  gender.append(genderLabel, genderText);

  // 5. Create the Description
  const description = document.createElement("p");
  description.classList.add("card-text", "d-block");
  description.textContent = item.description;

  // 6. Create the Button
  const button = document.createElement("a");
  button.href = "#";
  button.classList.add("btn", "btn-nav-light", "d-block", "mt-auto", "mx-auto");
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#appModal");
  button.textContent = "Details";

  // 6.1. Add an eventlistener to button to update the URL for the modal to pick up the product details
  button.addEventListener("click", (event) => {
    event.preventDefault();

    // Get current URL and search parameters
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    // Set or Append the parameter
    // .set() overwrites existing key; .append() adds even if it exists
    params.set("pet", item.id);

    // Update the URL in the address bar
    const newUrl = `${url.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  });

  // 7. Assemble the pieces (Bottom-up)
  cardBody.append(title, age, gender, description, button);
  card.append(img, cardBody);

  return card;
}
