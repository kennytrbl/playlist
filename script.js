var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var songs = [
    {
        videoId: "rCeM57e2BfU",
        name: "And July (Feat. DEAN, DJ Friz)",
        artist: "Heize",
        album: "And July",
        duration: "3:48",
    },
    {
        videoId: "sk6WiGOmlso",
        name: "Shut Up & Groove (Feat. DEAN)",
        artist: "Heize",
        album: "And July",
        duration: "3:20",
    },
    {
        videoId: "eelfrHtmk68",
        name: "D (Half Moon) ft. Gaeko",
        artist: "DEANTRBL",
        album: "130 Mood: TRBL",
        duration: "3:51",
    },
    {
        videoId: "8wpX6164uk4",
        name: "풀어(Pour Up) (ft. Zico)",
        artist: "DEANTRBL",
        album: "130 Mood: TRBL",
        duration: "3:33",
    },
    {
        videoId: "3ze6drtwiE4",
        name: "Bonnie & Clyde",
        artist: "DEANTRBL",
        album: "130 Mood: TRBL",
        duration: "3:44",
    },
    {
        videoId: "D2sMg8mCHds",
        name: "Come Over ft. Ye Rin Baek",
        artist: "DEANTRBL",
        album: "Limbo",
        duration: "4:27",
    },
    {
        videoId: "Z3W0jKcv1SU",
        name: "하루살이 (dayfly) ft. 설리, Rad Museum",
        artist: "DEANTRBL",
        album: "하루살이",
        duration: "4:17",
    },
    {
        videoId: "hiUPJaHjuUk",
        name: "Troll (Feat. DEAN)",
        artist: "IU",
        album: "IU 5th Album 'LILAC'",
        duration: "3:09",
    },
    {
        videoId: "v7bnOxV4jAc",
        name: "LILAC",
        artist: "IU",
        album: "IU 5th Album 'LILAC'",
        duration: "4:39",
    },
    {
        videoId: "4iFP_wd6QU8",
        name: "Square (2017)",
        artist: "Yerin Baek",
        album: "Every letter I sent you",
        duration: "4:22",
    },
    {
        videoId: "IRNBtocmQ58",
        name: "Maybe It's Not Our Fault",
        artist: "Yerin Baek",
        album: "Our Love Is Great",
        duration: "3:59",
    },
    {
        videoId: "Vyo2m2CbdUs",
        name: "Blue Flame",
        artist: "LE SSERAFIM",
        album: "Fearless",
        duration: "3:21",
    },
    {
        videoId: "Y93Jjvhz1jg",
        name: "Why do u say (Feat. MOON, ASH ISLAND)",
        artist: "Way Ched",
        album: "Why do u say",
        duration: "2:50",
    },
    {
        videoId: "-7Uo2oKHGyU",
        name: "Only U (Original Ver.)",
        artist: "Moon Sujin",
        album: "Only U",
        duration: "3:47",
    },
    {
        videoId: "29ycT6fA-Rs",
        name: "Mayday (Feat. Joy)",
        artist: "Crush",
        album: "homemade 1",
        duration: "3:20",
    },
    {
        videoId: "QU9c0053UAU",
        name: "Seven (feat. Latto)",
        artist: "Jung Kook",
        album: "Seven (feat. Latto)",
        duration: "3:46",
    },
    {
        videoId: "UNo0TG9LwwI",
        name: "Standing Next to You",
        artist: "Jung Kook",
        album: "GOLDEN",
        duration: "3:46",
    },
    {
        videoId: "SctIHP5dPyM",
        name: "DIE 4 YOU",
        artist: "DEANTRBL",
        album: "DIE 4 YOU",
        duration: "3:15",
    },
    {
        videoId: "D8VEhcPeSlc",
        name: "Drama",
        artist: "aespa",
        album: "Drama - The 4th Mini Album",
        duration: "3:47",
    },
    {
        videoId: "Os_heh8vPfs",
        name: "Spicy",
        artist: "aespa",
        album: "MY WORLD - The 3rd Mini Album",
        duration: "3:24",
    },
    {
        videoId: "5_n6t9G2TUQ",
        name: "To.X",
        artist: "TAEYEON",
        album: "To.X - The 5th Mini Album",
        duration: "2:57",
    },
    {
        videoId: "zZwFi86zIZM",
        name: "Yes or No (Feat. HUH YUNJIN of LE SSERAFIM, Crush)",
        artist: "GroovyRoom",
        album: "Yes or No",
        duration: "3:02",
    },
    {
        videoId: "HKBPmZbrsm0",
        name: "Ego",
        artist: "Crush",
        album: "wonderego",
        duration: "3:02",
    },
    {
        videoId: "V4tmJoX4NsI",
        name: "Monday Blues",
        artist: "Crush",
        album: "wonderego",
        duration: "3:12",
    },
    {
        videoId: "w0sOLQXCGjE",
        name: "Chi-Ka (feat. DEAN)",
        artist: "Tabber",
        album: "Chi-Ka",
        duration: "3:23",
    },
    {
        videoId: "Z4qVfCi_lUI",
        name: "Love You With All My Heart",
        artist: "Crush",
        album: "Queen of Tears (Original Television Soundtrack)",
        duration: "4:04",
    },
    {
        videoId: "jRRCWFLAO6k",
        name: "Hold Me Back",
        artist: "Heize",
        album: "Queen of Tears (Original Television Soundtrack)",
        duration: "3:52",
    },
    {
        videoId: "PS0qkO5qty0",
        name: "Rush Hour (Feat. j-hope of BTS)",
        artist: "Crush",
        album: "Rush Hour",
        duration: "3:02",
    },
    {
        videoId: "zgxSYEFcePY",
        name: "Howlin' 404",
        artist: "DEANTRBL",
        album: "Howlin' 404",
        duration: "3:47",
    },
    {
        videoId: "Vk5-c_v4gMU",
        name: "Magenetic",
        artist: "ILLIT",
        album: "SUPER REAL ME",
        duration: "3:08",
    },
    {
        videoId: "lz46lUhrW5w",
        name: "Better (Feat. 쿠기)",
        artist: "Moon Sujin",
        album: "Better",
        duration: "2:41",
    },
    {
        videoId: "xfqBQ2XhBCg",
        name: "SPOT! (feat. JENNIE)",
        artist: "ZICO",
        album: "SPOT!",
        duration: "3:12",
    },
    {
        videoId: "phuiiNCxRMg",
        name: "Supernova",
        artist: "aespa",
        album: "Supernova",
        duration: "3:13",
    },
    {
        videoId: "nFYwcndNuOY",
        name: "Armageddon",
        artist: "aespa",
        album: "Armageddon - The 1st Album",
        duration: "3:32",
    },
    {
        videoId: "w2DOQLVpvLg",
        name: "Sun and Moon",
        artist: "aespa",
        album: "Hot Mess",
        duration: "3:19",
    },
    {
        videoId: "ahBKiNZFBNI",
        name: "NewJeans - New Jeans (Cover) AI",
        artist: "DEANTRBL",
        album: "",
        duration: "1:48",
    },
    {
        videoId: "iGKqh1DiNqI",
        name: "NewJeans - Ditto (A.I. cover)",
        artist: "DEANTRBL",
        album: "",
        duration: "2:14",
    },
    {
        videoId: "5tcBJCouOmE",
        name: "NewJeans - Hype Boy (A.I. cover)",
        artist: "DEANTRBL",
        album: "",
        duration: "2:47",
    },
    {
        videoId: "e8ybbaxw2UM",
        name: "NewJeans - Get Up (City Pop Remix)",
        artist: "Matty Prasty",
        album: "",
        duration: "5:08",
    },
    {
        videoId: "kTefaqHHLtI",
        name: "Yerin Baek - Maybe It's Not Our Fault (A.I. cover)",
        artist: "IU",
        album: "",
        duration: "3:53",
    },
    {
        videoId: "6s-nDXnISQU",
        name: "LE SSERAFIM - Perfect Night (City Pop Remix)",
        artist: "Matt Prasty",
        album: "",
        duration: "4:32",
    },
    {
        videoId: "3vbSOmZKKV8",
        name: "TAEYEON - To. X (AI Cover)",
        artist: "DEANTRBL",
        album: "",
        duration: "2:50",
    },
    {
        videoId: "VUsDpXkTntc",
        name: "TAEYEON - To. X (A.I. cover)",
        artist: "Jung Kook",
        album: "",
        duration: "2:52",
    },
    {
        videoId: "c12nDjyHN-8",
        name: "ILLIT - Magnetic (Cover) AI",
        artist: "DEANTRBL",
        album: "",
        duration: "2:40",
    },
    {
        videoId: "wWcuUryeiwY",
        name: "ILLIT - AI Yerin Baek 'Magnetic' (City Pop ver.)",
        artist: "Yerin Baek",
        album: "",
        duration: "3:10",
    },
];
var songListDiv = document.getElementById("song-list");
var renderSongs = function (songs) {
    if (songListDiv) {
        songListDiv.innerHTML = "";
        songs.forEach(function (song, index) {
            var songDiv = document.createElement("a");
            songDiv.classList.add("song-row", "flex", "items-center", "justify-between", "p-4", "rounded", "hover:bg-gray-800", "transition-colors", "duration-300");
            songDiv.href = "https://www.youtube.com/watch?v=".concat(song.videoId);
            songDiv.target = "_blank";
            songDiv.rel = "noopener noreferrer";
            songDiv.innerHTML = "\n        <span class=\"songNumber w-10 text-center mr-4 text-white\">".concat(index + 1, "</span>\n        <img src=\"https://img.youtube.com/vi/").concat(song.videoId, "/mqdefault.jpg\" alt=\"").concat(song.name, "\">\n        <div class=\"flex-1 ml-4 mr-auto\">\n          <span class=\"songName block font-bold text-base text-white\">").concat(song.name, "</span>\n          <span class=\"songArtist block text-sm text-white\">").concat(song.artist, "</span>\n        </div>\n        <span class=\"songAlbum flex-1 text-sm text-white\">").concat(song.album, "</span>\n        <span class=\"songDuration w-16 text-right text-white\">").concat(song.duration, "</span>\n      ");
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
    Array.prototype.slice
        .call(sortDurationButton)
        .forEach(function (button) {
        button.addEventListener("click", function () {
            var sortedSongs = __spreadArray([], songs, true).sort(function (a, b) {
                var _a = a.duration.split(":").map(Number), aMinutes = _a[0], aSeconds = _a[1];
                var _b = b.duration.split(":").map(Number), bMinutes = _b[0], bSeconds = _b[1];
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
            return song.name.toLowerCase().indexOf(query) !== -1 ||
                song.artist.toLowerCase().indexOf(query) !== -1 ||
                song.album.toLowerCase().indexOf(query) !== -1;
        });
        renderSongs(filteredSongs);
    });
}
if (customOrderButton) {
    customOrderButton.addEventListener("click", function () {
        renderSongs(songs);
    });
}
var totalSongs = songs.length;
var totalDuration = songs.reduce(function (total, song) {
    var _a = song.duration.split(":").map(Number), minutes = _a[0], seconds = _a[1];
    return total + minutes * 60 + seconds;
}, 0);
var formatDuration = function (totalSeconds) {
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var duration = "";
    if (hours > 0) {
        duration += "".concat(hours, " hour").concat(hours > 1 ? "s" : "");
    }
    if (minutes > 0) {
        if (duration)
            duration += " ";
        duration += "".concat(minutes, " minute").concat(minutes > 1 ? "s" : "");
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
document.getElementById("total-duration").textContent =
    ", " + formatDuration(totalDuration);
var getRandomVideoId = function () {
    return songs[Math.floor(Math.random() * songs.length)].videoId;
};
var randomLink = document.getElementById("random-link");
if (randomLink) {
    randomLink.href = "https://www.youtube.com/watch?v=".concat(getRandomVideoId(), "&list=PLXWIpfPoBagjtqU5kTT9KR9RxTNI5EtC3&pp=gAQBiAQB8AUB");
}
(_a = document
    .getElementById("dropdownButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var menu = document.getElementById("dropdownMenu");
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle("hidden");
});
document.addEventListener("click", function (event) {
    var button = document.getElementById("dropdownButton");
    var menu = document.getElementById("dropdownMenu");
    if (button && menu) {
        var target = event.target;
        if (!button.contains(target) && !menu.contains(target)) {
            menu.classList.add("hidden");
        }
    }
});
