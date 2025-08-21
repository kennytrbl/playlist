// Reformatted for consistent spacing and indentation
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };

var _a;
var songs = [];

fetch("songs.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    songs = data;
    renderSongs(songs);

    // Calculate and display total songs and total duration after songs are loaded
    var totalSongs = songs.length;
    var totalDuration = songs.reduce(function (total, song) {
      var _a = song.duration.split(":").map(Number),
        minutes = _a[0],
        seconds = _a[1];
      return total + minutes * 60 + seconds;
    }, 0);
    var formatDuration = function (totalSeconds) {
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var duration = "";
      if (hours > 0) {
        duration += hours + " hour" + (hours > 1 ? "s" : "");
      }
      if (minutes > 0) {
        if (duration) duration += " ";
        duration += minutes + " minute" + (minutes > 1 ? "s" : "");
      }
      return duration || "0 minutes";
    };
    var totalSongsElement = document.getElementById("total-songs");
    if (totalSongsElement) {
      var linkElement = document.createElement("a");
      linkElement.href = "https://kennytrbl.github.io/";
      linkElement.textContent = "Kenny";
      linkElement.classList.add("hover:underline");
      var totalSongsText = document.createTextNode(" • " + totalSongs.toString() + " songs");
      totalSongsElement.textContent = "";
      totalSongsElement.appendChild(linkElement);
      totalSongsElement.appendChild(totalSongsText);
    }
    var totalDurationElement = document.getElementById("total-duration");
    if (totalDurationElement) {
      totalDurationElement.textContent = ", " + formatDuration(totalDuration);
    }

    // Update random link after songs are loaded
    var getRandomVideoId = function () {
      return songs[Math.floor(Math.random() * songs.length)].videoId;
    };
    var randomLink = document.getElementById("random-link");
    if (randomLink) {
      randomLink.href =
        "https://www.youtube.com/watch?v=" +
        getRandomVideoId() +
        "&list=PLXWIpfPoBagjtqU5kTT9KR9RxTNI5EtC3&pp=gAQBiAQB8AUB";
    }
  });

var songListDiv = document.getElementById("song-list");

var renderSongs = function (songs) {
  if (songListDiv) {
    songListDiv.innerHTML = "";
    songs.forEach(function (song, index) {
      var songDiv = document.createElement("a");
      songDiv.classList.add(
        "song-row",
        "flex",
        "items-center",
        "justify-between",
        "p-4",
        "rounded",
        "hover:bg-gray-800",
        "transition-colors",
        "duration-300"
      );
      songDiv.href = "https://www.youtube.com/watch?v=" + song.videoId;
      songDiv.target = "_blank";
      songDiv.rel = "noopener noreferrer";
      songDiv.innerHTML =
        '<span class="songNumber w-10 text-center mr-4 text-white">' +
        (index + 1) +
        '</span><img src="https://img.youtube.com/vi/' +
        song.videoId +
        '/mqdefault.jpg" alt="' +
        song.name +
        '"><div class="flex-1 ml-4 mr-auto"><span class="songName block font-bold text-base text-white">' +
        song.name +
        '</span><span class="songArtist block text-sm text-white">' +
        song.artist +
        '</span></div><span class="songAlbum flex-1 text-sm text-white">' +
        song.album +
        '</span><span class="songDuration w-16 text-right text-white">' +
        song.duration +
        "</span>";
      songListDiv.appendChild(songDiv);
    });
  }
};

renderSongs(songs);

var sortButton = document.getElementsByClassName("headerTitle");
var sortAlbumButton = document.getElementsByClassName("headerAlbum");
var sortDurationButton = document.getElementsByClassName("headerDuration");
var searchInput = document.getElementById("search-input");
var customOrderButton = document.getElementsByClassName("customOrder")[0];

if (sortButton.length) {
  Array.prototype.slice.call(sortButton).forEach(function (button) {
    button.addEventListener("click", function () {
      var sortedSongs = __spreadArray([], songs, true).sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      renderSongs(sortedSongs);
    });
  });
}

if (sortAlbumButton.length) {
  Array.prototype.slice.call(sortAlbumButton).forEach(function (button) {
    button.addEventListener("click", function () {
      var sortedSongs = __spreadArray([], songs, true).sort(function (a, b) {
        return a.album.localeCompare(b.album);
      });
      renderSongs(sortedSongs);
    });
  });
}

if (sortDurationButton.length) {
  Array.prototype.slice.call(sortDurationButton).forEach(function (button) {
    button.addEventListener("click", function () {
      var sortedSongs = __spreadArray([], songs, true).sort(function (a, b) {
        var _a = a.duration.split(":").map(Number),
          aMinutes = _a[0],
          aSeconds = _a[1];
        var _b = b.duration.split(":").map(Number),
          bMinutes = _b[0],
          bSeconds = _b[1];
        return aMinutes * 60 + aSeconds - (bMinutes * 60 + bSeconds);
      });
      renderSongs(sortedSongs);
    });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", function () {
    var query = searchInput.value.toLowerCase();
    var filteredSongs = songs.filter(function (song) {
      return (
        song.name.toLowerCase().indexOf(query) !== -1 ||
        song.artist.toLowerCase().indexOf(query) !== -1 ||
        song.album.toLowerCase().indexOf(query) !== -1
      );
    });
    renderSongs(filteredSongs);
  });
}

if (customOrderButton) {
  customOrderButton.addEventListener("click", function () {
    renderSongs(songs);
  });
}

var _a = document.getElementById("dropdownButton");
_a === null || _a === void 0
  ? void 0
  : _a.addEventListener("click", function () {
      var menu = document.getElementById("dropdownMenu");
      menu === null || menu === void 0 ? void 0 : menu.classList.toggle("hidden");
    });

var button = document.getElementById("dropdownButton");
var menu = document.getElementById("dropdownMenu");
if (button && menu) {
  var target = event.target;
  if (!button.contains(target) && !menu.contains(target)) {
    menu.classList.add("hidden");
  }
}
