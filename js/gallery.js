
// ArtVista Gallery JavaScript

const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

// Get saved favorites
let favorites = JSON.parse(
  localStorage.getItem("artvistaFavorites")
) || [];

// Display all artworks
function displayGallery(items) {
  galleryGrid.innerHTML = "";

  resultCount.textContent = `${items.length} Artworks Found`;
  noResults.hidden = items.length !== 0;

  items.forEach((art) => {
    const isFavorite = favorites.some(
      item => Number(item) === art.id
    );

    const card = document.createElement("article");
    card.className = "art-card";

    card.innerHTML = `
      <div class="art-image">
        <img
          src="${art.image}"
          alt="${art.title}"
          loading="lazy"
        >

        <button
          class="favorite-btn"
          data-id="${art.id}"
          aria-label="Add ${art.title} to favorites"
          aria-pressed="${isFavorite}"
        >
          ${isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div class="art-info">
        <span class="art-category">${art.category}</span>
        <h3>${art.title}</h3>
        <p>By ${art.artist}</p>
        <span class="art-year">${art.year}</span>
      </div>
    `;

    galleryGrid.appendChild(card);
  });
}

// Search and filter artworks
function filterGallery() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  let filteredArtworks = artworks.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchText) ||
      art.artist.toLowerCase().includes(searchText) ||
      art.category.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      art.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sorting
  const sortValue = sortSelect.value;

  if (sortValue === "az") {
    filteredArtworks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortValue === "za") {
    filteredArtworks.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  } else if (sortValue === "newest") {
    filteredArtworks.sort((a, b) => b.year - a.year);
  } else if (sortValue === "oldest") {
    filteredArtworks.sort((a, b) => a.year - b.year);
  }

  displayGallery(filteredArtworks);
}

// Search event
searchInput.addEventListener("input", filterGallery);

// Category event
categoryFilter.addEventListener("change", filterGallery);

// Sorting event
sortSelect.addEventListener("change", filterGallery);

// Favorite button event
galleryGrid.addEventListener("click", function(event) {
  const button = event.target.closest(".favorite-btn");

  if (!button) return;

  const artworkId = Number(button.dataset.id);

  if (favorites.some(item => Number(item) === artworkId)) {
    favorites = favorites.filter(
      item => Number(item) !== artworkId
    );
  } else {
    favorites.push(artworkId);
  }

  localStorage.setItem(
    "artvistaFavorites",
    JSON.stringify(favorites)
  );

  filterGallery();
});

// Load all artworks initially
displayGallery(artworks);

/* =================================
   ARTVISTA ARTWORK LIGHTBOX
================================= */

// Open artwork in large preview
galleryGrid.addEventListener("click", function(event) {

  // Do not open preview when favorite button is clicked
  if (event.target.closest(".favorite-btn")) return;

  const image = event.target.closest(".art-image img");

  if (!image) return;

  const artwork = artworks.find(
    art => art.title === image.alt
  );

  if (!artwork) return;

  // Create preview overlay
  const lightbox = document.createElement("div");
  lightbox.className = "art-lightbox";

  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close preview">
      &times;
    </button>

    <div class="lightbox-content">
      <img src="${artwork.image}" alt="${artwork.title}">

      <div class="lightbox-details">
        <span>${artwork.category}</span>
        <h2>${artwork.title}</h2>
        <p>Created by ${artwork.artist}</p>
        <small>${artwork.year}</small>
        <p>${artwork.description}</p>
      </div>
    </div>
  `;

  document.body.appendChild(lightbox);
  document.body.style.overflow = "hidden";

  // Close preview
  function closeLightbox() {
    lightbox.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleEscape);
  }

  function handleEscape(e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  }

  lightbox.querySelector(".lightbox-close")
    .addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", handleEscape);
});

// QUICK CATEGORY FILTER CHIPS

const categoryChips = document.querySelectorAll(".category-chip");

categoryChips.forEach((chip) => {
  chip.addEventListener("click", function() {

    categoryChips.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    categoryFilter.value = this.dataset.category;

    filterGallery();
  });
});

// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
  backToTop.classList.toggle("show", window.scrollY > 350);
});

backToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
