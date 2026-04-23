// Sample pet data (you can expand this)
const pets = [
  { name: "Ruddy", species: "Dog", breed: "Golden Retriever", age: "Adult", location: "Toronto", img: "./imgs/dog1.jpg" },
  { name: "Buffy", species: "Dog", breed: "Labrador", age: "Adult", location: "London", img: "./imgs/dog2.jpg" },
  { name: "Detto", species: "Cat", breed: "Tabby", age: "Adult", location: "London", img: "./imgs/cat1.jpg" },
  { name: "Rusty", species: "Dog", breed: "Doberman", age: "Adult", location: "Toronto", img: "./imgs/dog3.jpg" }
];

// Render listings dynamically
function renderListings(filteredPets) {
  const container = document.querySelector(".cards-grid");
  container.innerHTML = ""; // clear old cards

  filteredPets.forEach(pet => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${pet.img}" class="card-img-top" alt="${pet.name}">
      <div class="card-body">
        <h5 class="card-title">${pet.name}</h5>
        <p class="card-text">${pet.breed}, ${pet.age}, ${pet.location}</p>
        <a href="#" class="btn btn-primary">View Details</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Initial render
renderListings(pets);

// Filter logic
function applyFilters() {
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // Collect checked ages
  const ageChecks = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
    .map(cb => cb.nextElementSibling.textContent);

  // Filter pets
  const filtered = pets.filter(pet => {
    const speciesMatch = species === "All species" || pet.species === species;
    const breedMatch = breed === "All breeds" || pet.breed === breed;
    const ageMatch = ageChecks.length === 0 || ageChecks.includes(pet.age);
    return speciesMatch && breedMatch && ageMatch;
  });

  renderListings(filtered);
}

// Attach event listeners
document.getElementById("species").addEventListener("change", applyFilters);
document.getElementById("breed").addEventListener("change", applyFilters);
document.querySelectorAll("input[type=checkbox]").forEach(cb => {
  cb.addEventListener("change", applyFilters);
});
