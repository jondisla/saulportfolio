AOS.init({
    duration: 1300
});

$(document).ready(function () {

    // Get the deal
    var wheat = document.getElementById('wheatModal');
    var gym = document.getElementById('gymModal');
    var izak = document.getElementById('izakModal');
    var music = document.getElementById('musicModal');
    var deal = document.getElementById('dealModal');
    var movie = document.getElementById('movieModal');

    // Get the button that opens the deal
    var wheatBtn = document.getElementById("wheatBtn");
    var gymBtn = document.getElementById("gymBtn");
    var izakBtn = document.getElementById("izakBtn");
    var musicBtn = document.getElementById("musicBtn");
    var dealBtn = document.getElementById("dealBtn");
    var movieBtn = document.getElementById("movieBtn");

    // Get the <span> element that closes the deal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the deal 
    wheatBtn.onclick = function () {
        wheat.style.display = "block";
    }
    gymBtn.onclick = function () {
        gym.style.display = "block";
    }
    izakBtn.onclick = function () {
        izak.style.display = "block";
    }
    musicBtn.onclick = function () {
        music.style.display = "block";
    }
    dealBtn.onclick = function () {
        deal.style.display = "block";
    }
    movieBtn.onclick = function () {
        movie.style.display = "block";
    }

    // When the user clicks on <span> (x), close the deal
    span.onclick = function () {
        wheat.style.display = "none";
        gym.style.display = "none";
        izak.style.display = "none";
        music.style.display = "none";
        deal.style.display = "none";
        movie.style.display = "none";
    }

    // When the user clicks anywhere outside of the deal, close it
    window.onclick = function (event) {
        if (event.target == wheat) {
            wheat.style.display = "none";
        } else if (event.target == gym) {
            gym.style.display = "none";
        } else if (event.target == izak) {
            izak.style.display = "none";
        } else if (event.target == music) {
            music.style.display = "none";
        } else if (event.target == deal) {
            deal.style.display = "none";
        } else if (event.target == movie) {
            movie.style.display = "none";
        }
    }

});