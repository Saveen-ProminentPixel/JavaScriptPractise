const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");

    if(movies.length === 0){
        movieList.classList.remove("visible");
        return;
    }else{
        movieList.classList.add("visible");
    }
    movieList.innerHTML = "";

    const filteredMoives = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMoives.forEach((movie) => {
        const movieEl = document.createElement("li");
        const {info, ...otherProps} = movie;
        console.log(otherProps);
        let text = info.title + " - ";
        for(const key in info){
            if(key !== "title"){
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });    
};

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if(title.trim() === "" || extraName.trim() === "" || extraValue.trim() === ""){
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random().toString()
    };
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);










// const movieList = document.getElementById("movie-list");

// movieList.style.backgroundColor = "red";
// movieList.style["backgroundColor"] = "yellow";
// movieList.style["background-color"] = "green";
// movieList.style.display = "block";

// const userChosenKeyName = "level";

// let person = {
//     name: "Sam",
//     age: 24,
//     hobbies: ["Sports", "Cooking"],
//     greet: function() {
//         alert("Hello World!");
//     },
//     1.5: "hey",
//     [userChosenKeyName]: "...."
// };

// // ...

// person.isAdmin = true;
// console.log(person.isAdmin);
// console.log(person);
// console.log(person.greet);
// // person.greet();
// console.log(person["1.5"]);

// // delete
// console.log(person.age);
// delete person.age;
// // person.age = undefined;
// console.log(person);
// console.log(person.age);

