document.addEventListener("DOMContentLoaded", async (event) => {
  event.preventDefault();

  // 1. Simulated array of Data
  // !! IMPORTANT: eventually this will be replaced with a fetch request (data from database)
  const response = await fetch("http://localhost:8080/public/api/all/pets");
  const pets = await response.json();

  // 1.1. Reference the <div> element of id: productList to pupulate the list of products
  const homeListing = document.getElementById("homeListing");

  function renderListings(list) {
    homeListing.innerHTML = "";
    if (list.length === 0) {
      homeListing.innerHTML = `<p class="text-center text-muted w-100">No pets found.</p>`;
      return;
    }
    list.forEach((pet) => {
      const col = document.createElement("div");
      col.classList.add("col");
      col.append(createCard(pet));
      homeListing.append(col);
    });
  }

  renderListings(pets);

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  searchForm.addEventListener("submit", (e) => e.preventDefault());

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase().trim();
    const filtered = pets.filter(
      (pet) =>
        pet.name.toLowerCase().includes(q) ||
        pet.gender.toLowerCase() === q ||
        pet.species.toLowerCase().includes(q) ||
        String(pet.age).includes(q)
    );
    renderListings(filtered);
  });

  // 2. Reference the <div> element of id: productModal and its elements to update the modal's data
  const appModal = document.getElementById("appModal");
  const appModalTitle = document.getElementById("appModalTitle");
  const appModalImage = document.getElementById("appModalImage");
  const appModalType = document.getElementById("appModalType");
  const appModalAdoptionStatus = document.getElementById("appModalAdoptionStatus");
  const adoptBtn = document.getElementById("adoptBtn");

  const spinnerTitle = new Spinner(appModalTitle);
  const spinnerType = new Spinner(appModalType);
  const spinnerAdoptionStatus = new Spinner(appModalAdoptionStatus);

  // Clear everything IMMEDIATELY before the modal even finishes sliding in
  appModal.addEventListener("show.bs.modal", () => {
    appModalTitle.textContent = "";
    appModalType.textContent = "";
    appModalAdoptionStatus.textContent = "";
    appModalImage.src =
      "https://placehold.co/100x100/CCCCCC/FFFFFF?text=Loading Image...";
    if (spinnerTitle.spinner !== null)
      spinnerTitle.displaySpinner(false);
    if (spinnerType.spinner !== null)
      spinnerType.displaySpinner(false);
    if (spinnerAdoptionStatus.spinner !== null)
      spinnerAdoptionStatus.displaySpinner(false);
  });

  // Show everything after the modal finished sliding in
  appModal.addEventListener("shown.bs.modal", async () => {
    appModalImage.src =
      "https://placehold.co/100x100/CCCCCC/FFFFFF?text=Loading Image...";
    spinnerTitle.createSpinner();
    spinnerType.createSpinner();
    spinnerAdoptionStatus.createSpinner();
    spinnerTitle.displaySpinner(true);
    spinnerType.displaySpinner(true);
    spinnerAdoptionStatus.displaySpinner(true);

    // !! IMPORTANT: To remove this delay once the data is fetched from the server
    const sleep = (delay) =>
      new Promise((resolve) => setTimeout(resolve, delay));
    await sleep(500);

    // !! the product id is along the URL
    const params = new URLSearchParams(window.location.search);

    if (params.has("pet")) {
      const id = params.get("pet");

      // !! IMPORTANT: eventually this will be replaced with a fetch request (data from database)
      const pet = pets.find((item) => item.id == id);

      if (pet) {
        appModalTitle.textContent = pet.name;
        appModalImage.src = pet.imageUrl;
        appModalType.textContent = `${pet.animalType.charAt(0).toUpperCase() + pet.animalType.slice(1).toLowerCase()}`;
        appModalAdoptionStatus.textContent = !pet.adoptionStatus ? "Available" : "Adopted";

        adoptBtn.onclick = () => {
          window.location.href = `application.html?pet=${pet.id}`;
        };
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
  img.classList.add("card-img-top", `pet-img-${item.id}`);
  img.alt = item.title;

  // 3. Create the Card Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("d-flex", "card-body", "flex-column");

  // 4. Create the Title
  const title = document.createElement("h5");
  title.classList.add("card-title", "mb-3", "fs-4");
  title.textContent = item.name;

  // !! 4.0. Create the Subtitle (Species)
  const species = document.createElement("h6");
  species.classList.add("card-subtitle", "mb-2", "text-body-secondary");
  const speciesLabel = document.createElement("span");
  speciesLabel.textContent = "Species: ";
  speciesLabel.classList.add("fw-bolder");
  const speciesText = document.createElement("span");
  speciesText.textContent = item.species;
  species.append(speciesLabel, speciesText);

  // !! 4.1. Create the Subtitle (animalType)
  const animalType = document.createElement("h6");
  animalType.classList.add("card-subtitle", "mb-2", "text-body-secondary");

  // !! 4.1.1. Create the Animal Type label and text
  const animalTypeLabel = document.createElement("span");
  animalTypeLabel.textContent = "Type: "
  animalTypeLabel.classList.add("fw-bolder");
  const animalTypeText = document.createElement("span");
  animalTypeText.textContent = `${item.animalType.charAt(0).toUpperCase() + item.animalType.slice(1).toLowerCase()}`;
  animalType.append(animalTypeLabel, animalTypeText);

  // !! 4.2. Create the Subtitle (Gender)
  const gender = document.createElement("h6");
  gender.classList.add("card-subtitle", "mb-2", "text-body-secondary");
  gender.textContent = `Gender: ${String(item.gender).toLowerCase()}`;

  /* 
    * Please include the code for AdoptionStatus similar to item 4.1.1.
  */
  // !! 4.2.1. Create the Gender label and text
  // !! 4.1.1. Create the Age label and text
  const adoptionStatusLabel = document.createElement("span");
  adoptionStatusLabel.textContent = "Adoption Status: "
  adoptionStatusLabel.classList.add("fw-bolder");
  const adoptionStatusText = document.createElement("span");
  adoptionStatusText.textContent = `${!item.adoptionStatus ? "Available" : "Adopted"}`;
  adoptionStatus.append(adoptionStatusLabel, adoptionStatusText);

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
