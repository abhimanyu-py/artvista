
// =====================================
// ARTVISTA - MAIN JAVASCRIPT
// =====================================


// 1. SELECT HTML ELEMENT

const featuredGrid = document.getElementById("featuredGrid");


// 2. GET SAVED FAVORITES

let favorites = JSON.parse(
    localStorage.getItem("artvistaFavorites")
) || [];


// 3. FUNCTION TO DISPLAY ARTWORKS

function displayArtworks() {

    if (!featuredGrid) return;

    featuredGrid.innerHTML = "";

    // Display first 3 artworks on homepage

    for (let i = 0; i < 3 && i < artworks.length; i++) {

        const art = artworks[i];

        const isFavorite = favorites.includes(art.id);

        const card = document.createElement("article");

        card.className = "art-card";

        card.innerHTML = `

            <img
                src="${art.image}"
                alt="${art.title}"
                loading="lazy"
            >

            <div class="art-info">

                <p class="art-category">
                    ${art.category}
                </p>

                <h3>${art.title}</h3>

                <p class="artist-name">
                    By ${art.artist}
                </p>

                <button
                    class="favorite-btn"
                    data-id="${art.id}"
                    aria-label="Add ${art.title} to favorites"
                    aria-pressed="${isFavorite}"
                >
                    ${isFavorite ? "♥ Remove Favorite" : "♡ Add Favorite"}
                </button>

            </div>

        `;

        featuredGrid.appendChild(card);
    }

}


// 4. FAVORITE BUTTON FUNCTIONALITY

if (featuredGrid) {

    featuredGrid.addEventListener("click", function(event) {

        const button = event.target.closest(".favorite-btn");

        if (!button) return;

        const artworkId = Number(button.dataset.id);

        if (favorites.includes(artworkId)) {

            favorites = favorites.filter(
                id => id !== artworkId
            );

        } else {

            favorites.push(artworkId);

        }

        // Save favorites in browser storage

        localStorage.setItem(
            "artvistaFavorites",
            JSON.stringify(favorites)
        );

        displayArtworks();

    });

}


// 5. START WEBSITE

displayArtworks();

console.log("ArtVista Website Loaded Successfully!");
