
// =====================================
// ARTVISTA - FAVORITES FUNCTIONALITY
// =====================================


// 1. Select HTML elements

const favoritesGrid = document.getElementById("favoritesGrid");

const favoriteCount = document.getElementById("favoriteCount");

const emptyFavorites = document.getElementById("emptyFavorites");


// 2. Load saved favorites

let favorites = JSON.parse(
    localStorage.getItem("artvistaFavorites")
) || [];


// 3. Display favorite artworks

function displayFavorites() {

    favoritesGrid.innerHTML = "";

    let savedArtworks = [];

    // WHILE LOOP: Find saved artworks

    let i = 0;

    while (i < artworks.length) {

        const art = artworks[i];

        if (favorites.includes(art.id) || favorites.includes(art.title)) {
            savedArtworks.push(art);
        }

        i++;
    }


    // Update count

    favoriteCount.textContent =
        savedArtworks.length + " Saved Artworks";


    // Show empty message

    emptyFavorites.hidden = savedArtworks.length !== 0;


    // FOR LOOP: Generate favorite cards

    for (let j = 0; j < savedArtworks.length; j++) {

        const art = savedArtworks[j];

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
                >
                    ♥ Remove from Favorites
                </button>

            </div>

        `;

        favoritesGrid.appendChild(card);
    }

}


// 4. Remove favorite functionality

favoritesGrid.addEventListener("click", function(event) {

    const button = event.target.closest(".favorite-btn");

    if (!button) return;

    const artworkId = Number(button.dataset.id);

    favorites = favorites.filter(
        id => Number(id) !== artworkId
    );

    favorites = favorites.filter(
        id => id !== artworks.find(art => art.id === artworkId)?.title
    );

    localStorage.setItem(
        "artvistaFavorites",
        JSON.stringify(favorites)
    );

    displayFavorites();

});


// 5. Start favorites page

displayFavorites();

console.log("Favorites Page Loaded Successfully!");
