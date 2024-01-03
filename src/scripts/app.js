'use strict';

class App {
    constructor() {
        console.log('hello world');
        axios.get('https://api.themoviedb.org/3/search/movie?query=Terminator&include_adult=false&language=en-US&page=1', {'headers': {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWY4YTZmYzk4OGMwMGYzNzNjNmE2ZmU0NDhkZmNhZSIsInN1YiI6IjY1MDRmNGVjMzczYWMyMDBhY2Q1YTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4Ij4SnA99006RBmzHg3fCH7J_SOVaGNvFZVLrY1Gw4'}}).then(result => console.log(result));
    }
}

new App();