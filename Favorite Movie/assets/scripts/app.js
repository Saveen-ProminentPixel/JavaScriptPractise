const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");


const movies = [];

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = "block";
    }else{
        entryTextSection.style.display = "none";
    }
};

const deleteMovieHandler = movieId => {
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    // listRoot.removeChild(listRoot.children[movieIndex]);
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
}

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove("visible");
}

const startDeleteMovieHandler = movieId => {
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
    let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
    
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

    // confirmDeletionButton.removeEventListener("click", deleteMovieHandler.bind(null, movieId));
    cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);


    cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
    confirmDeletionButton.addEventListener("click", deleteMovieHandler.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5</p>
    </div>
    `;
    newMovieElement.addEventListener("click", startDeleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
    addMovieModal.classList.remove("visible");
}

const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
};

const clearMovieInput = () => {
    for(const userInput of userInputs){
        userInput.value = "";
    }
};

const addMovieHandler = () => {
    const titleVaue = userInputs[0].value;
    const imageUrlVaue = userInputs[1].value;
    const ratingVaue = userInputs[2].value;

    if(titleVaue.trim() === "" || imageUrlVaue.trim === "" || ratingVaue.trim === "" || +ratingVaue < 1 || +ratingVaue > 5){
        alert("Please enter a valid input");
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleVaue,
        image: imageUrlVaue,
        rating: ratingVaue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);