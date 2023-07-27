const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = "block";
    }else{
        entryTextSection.style.display = "none";
    }
};

const deleteMovieHandler = (movieId) => {
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
    newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
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
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);